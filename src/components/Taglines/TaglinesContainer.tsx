import { useState } from 'react';
import { FilmEPK } from '../../types';
import TaglinesForm from '../Taglines/TaglinesForm';
import TaglinesDisplay from '../Taglines/TaglinesDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

interface ITaglines {
  filmEPK: FilmEPK;
  addFilmInfo: any;
}

const TaglinesContainer = ({ filmEPK, addFilmInfo} : ITaglines) => {
  const [isEditing, setIsEditing] = useState<boolean>(true)

  return (
    <section className='taglines-container'>

      {!isEditing && 
        <Fab 
          color='secondary' 
          aria-label='edit'
          onClick={() => setIsEditing(true)}
        >
          <EditIcon />
        </Fab>
      }

      {isEditing && <TaglinesForm 
        filmEPK={filmEPK} 
        addFilmInfo={addFilmInfo} 
        setIsEditing={setIsEditing}
      />}

      {!isEditing && <TaglinesDisplay 
        filmEPK={filmEPK} 
      />}

    </section>
  )
}

export default TaglinesContainer
