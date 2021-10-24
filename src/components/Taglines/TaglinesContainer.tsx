import { useState } from 'react';
import { FilmEPK } from '../../types';
import TaglinesForm from '../Taglines/TaglinesForm';
import TaglinesDisplay from '../Taglines/TaglinesDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

const TaglinesContainer = () => {
  const [isEditing, setIsEditing] = useState<boolean>(true)

  return (
    <div>
      <TaglinesForm />
      <TaglinesDisplay />
    </div>
  )
}

export default TaglinesContainer
