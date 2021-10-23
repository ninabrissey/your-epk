import { useEffect, useState } from 'react'
import { FilmEPK, Attributes, Award, Press } from '../../types'
import AwardPressDisplay from './AwardPressDisplay'
import AwardPressForm from './AwardPressForm'
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { film } from '../../utils/mockData';
// import { film } from '../../utils/mockData';

interface APContainerProps {
  addFilmInfo: any;
  awards: Award[] | [];
  presses: Press[] | [];
  epk_id: string
}

const AwardsPressContainer = ({awards, presses, addFilmInfo, epk_id}: APContainerProps) => {
  // const AwardsPressContainer = ({filmEPK, addFilmInfo}: APContainerProps) => {
const [isEditting, setIsEditting] = useState(true)
// const [awards, setAwards] = useState<Award[] | undefined >()

return (
  <div>
    {!isEditting && <Fab color="secondary" aria-label="edit" onClick={() => setIsEditting(!isEditting)}>
      <EditIcon />
    </Fab>}
    {awards !== undefined && 
    <AwardPressDisplay awards={awards} presses={presses} />}
    {isEditting && <AwardPressForm addFilmInfo={addFilmInfo} setIsEditting={setIsEditting} isEditting={isEditting} epk_id={epk_id}/>}
  </div>
  )
}

export default AwardsPressContainer

// if (this.state.selectedMovie === null || undefined ) {
//   return (
//     <div>
//       Loading
//     </div>
//   )
// }
