import HeaderDisplay from "../../Header/HeaderDisplay";
import AwardPressDisplay from "../../AwardsPress/AwardPressDisplay";
import { FilmEPK, EPKData } from '../../../types';
import { useEffect, useState } from 'react';
import { getEPK } from "../../../utils/apiCalls";


const PressPage = ({ title, epk_id }: any) => {
  const [epk, setEpk] = useState<FilmEPK>({} as FilmEPK)

  console.log(epk)

  useEffect(() => {
    getEPK(epk_id)
      .then((info: EPKData) => {
        setEpk(info.data)
        console.log(epk)
      })
  }, [])

  return (
    <div>
      {epk.id && <p>{`You've reached press page for ${epk.attributes.movie_title}, id# ${epk.attributes.synopsis}`}</p>}
      <p>{` id# ${epk_id}`}</p>
      {/* <HeaderDisplay /> */}
    </div>
  )
}


export default PressPage;