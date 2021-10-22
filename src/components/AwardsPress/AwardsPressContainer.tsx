import { useState } from 'react'
import { FilmEPK } from '../../types'
import AwardPressDisplay from './AwardPressDisplay'
import AwardPressForm from './AwardPressForm'
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { film } from '../../utils/mockData';

interface APContainerProps {
  filmEPK: FilmEPK;
  addFilmInfo: (filmInfo: object, id: number) => void
}

// const AwardsPressContainer = ({filmEPK}: APContainerProps) => {

const AwardsPressContainer = ({filmEPK, addFilmInfo}: APContainerProps) => {
const [isEditting, setIsEditting] = useState(false)

  return (
    <div>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      {(filmEPK.attributes.awards.length > 0 && filmEPK.attributes.press.length > 0) && 
      <AwardPressDisplay press={filmEPK.attributes.press} awards={filmEPK.attributes.awards} />}
      {isEditting && <AwardPressForm addFilmInfo={addFilmInfo} />}
    </div>
  )
}

export default AwardsPressContainer
