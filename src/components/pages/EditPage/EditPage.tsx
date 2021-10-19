import {useState} from 'react'
// import { postData } from '../../../utils/apiCalls';
import AwardPressDisplay from '../../displays/AwardPressDisplay/AwardPressDisplay';
import AwardPressForm from '../../forms/HeaderForm/AwardPressForm/AwardPressForm';
// import postData from '../../../utils/apiCalls'; file path?

const EditPage = () => {
const [film, setFilm] = useState({})
// const [isEdittingHeader, setIsEdittingHeader] = useState(false)
const [isEdittingAwardsPress, setIsEdittingAwardsPress] = useState<boolean>(true)



const props = { setIsEditting: setIsEdittingAwardsPress }
return (

  <main>
    {/* {isEdittingHeader && <HeaderForm />}
    {!isEdittingHeader && <HeaderDisplay />} */}
    {/* {isEdittingAwardsPress && <AwardPressForm {...props}/>} */}
    {isEdittingAwardsPress && <AwardPressForm />}
    {!isEdittingAwardsPress && <AwardPressDisplay />}  
  </main>
)

// const postFilmInfo = (filminfo) => {
// postData(filmInfo)
// the response will update state
// This will be passed to back up to the edit page
// We will thne put the response in state
//   }
}


export default EditPage;