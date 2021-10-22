import { useState } from 'react';
import HeaderForm from './HeaderForm';
import HeaderDisplay from './HeaderDisplay';

interface IHeader {
  // filmEPK: FilmEPK;
  addFilmInfo: any;
}

const HeaderContainer = ({ addFilmInfo } : IHeader) => {
  const [isEditing, setIsEditing] = useState<boolean>(true)

  return (
    <div className='header-container'>
      {isEditing && <HeaderForm addFilmInfo={addFilmInfo} />}
      {!isEditing && <HeaderDisplay />}
    </div>
  )
}

export default HeaderContainer
