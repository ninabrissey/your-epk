import { useState } from 'react'
import { FilmEPK } from '../../types'
import AwardPressDisplay from './AwardPressDisplay'
import AwardPressForm from './AwardPressForm'
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
// import { film } from '../../utils/mockData';

interface APContainerProps {
  filmEPK: FilmEPK;
  addFilmInfo: any
  // addFilmInfo:  void
}

// interface APContainerProps {
//   filmEPK: FilmEPK;
// }

// const AwardsPressContainer = ({filmEPK}: APContainerProps) => {

const AwardsPressContainer = ({filmEPK, addFilmInfo}: APContainerProps) => {
// const AwardsPressContainer = ({filmEPK}: APContainerProps) => {
const [isEditting, setIsEditting] = useState(true)

  return (
    <div>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      {/* {(filmEPK.attributes.awards.length > 0 && filmEPK.attributes.presses.length > 0) && 
      <AwardPressDisplay presses={filmEPK.attributes.presses} awards={filmEPK.attributes.awards} />} */}
      {isEditting && <AwardPressForm addFilmInfo={addFilmInfo} />}
      {/* {isEditting && <AwardPressForm  />} */}
    </div>
  )
}

export default AwardsPressContainer
