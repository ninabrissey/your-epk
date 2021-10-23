import { fileChecksum } from 'utils/checksum';

const createPresignedUrl = async (file, byte_size, checksum) => {
  let options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      file: {
        filename: file.name,
        byte_size: byte_size,
        checksum: checksum,
        content_type: 'application/pdf',
        metadata: {
          message: 'resume for parsing',
        },
      },
    }),
  };
  let res = await fetch(PRESIGNED_URL_API_ENDPOINT, options);
  if (res.status !== 200) return res;
  return await res.json();
};

export const createUser = async (userInfo) => {
  const { pdf, email, first_name, last_name } = userInfo;

  // To upload pdf file to S3, we need to do three steps:
  // 1) request a pre-signed PUT request (for S3) from the backend

  const checksum = await fileChecksum(pdf);
  const presignedFileParams = await createPresignedUrl(pdf, pdf.size, checksum);

  // 2) send file to said PUT request (to S3)
  const s3PutOptions = {
    method: 'PUT',
    headers: presignedFileParams.direct_upload.headers,
    body: pdf,
  };
  let awsRes = await fetch(presignedFileParams.direct_upload.url, s3PutOptions);
  if (awsRes.status !== 200) return awsRes;

  // 3) confirm & create user with backend
  let usersPostOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      first_name: first_name,
      last_name: last_name,
      pdf: presignedFileParams.blob_signed_id,
    }),
  };
  let res = await fetch(USERS_API_ENDPOINT, usersPostOptions);
  if (res.status !== 200) return res;
  return await res.json();
};
