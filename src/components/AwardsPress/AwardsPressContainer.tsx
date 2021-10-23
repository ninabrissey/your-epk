import { useEffect, useState } from 'react'
import { FilmEPK, Attributes, Award } from '../../types'
import AwardPressDisplay from './AwardPressDisplay'
import AwardPressForm from './AwardPressForm'
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { film } from '../../utils/mockData';
// import { film } from '../../utils/mockData';

interface APContainerProps {
  filmEPK: FilmEPK;
  addFilmInfo: any;
  awards: Award[] | undefined;
}

const AwardsPressContainer = ({filmEPK, addFilmInfo}: APContainerProps) => {
const [isEditting, setIsEditting] = useState(false)
const [awards, setAwards] = useState<Award[] | undefined >()

console.log(filmEPK)

useEffect(() => {
  setAwards(filmEPK.attributes.awards)
}, [film])

return (
  <div>
    <Fab color="secondary" aria-label="edit">
      <EditIcon />
    </Fab>
    {/* {awards !== undefined && 
    <AwardPressDisplay presses={presses} awards={awards} />} */}
     {awards !== undefined && 
    <AwardPressDisplay awards={awards} />}
    {isEditting && <AwardPressForm addFilmInfo={addFilmInfo} />}
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
