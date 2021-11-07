import Fab from '@mui/material/Fab';
import DownloadIcon from '@mui/icons-material/Download';
import { saveAs } from 'file-saver';
// var FileSaver = require('file-saver');

const DownloadBtn = ({ image }: any) => {
  console.log(image);
  const downloadImage = () => {
    saveAs(image, 'image.jpg');
  };

  return (
    <div>
      {' '}
      {
        <a href={image} download>
          <Fab
            style={{ marginLeft: '235px', marginBottom: '235px' }}
            size="small"
            aria-label="delete"
            onClick={downloadImage}
          >
            <DownloadIcon />
          </Fab>
        </a>
      }
    </div>
  );
};

export default DownloadBtn;
