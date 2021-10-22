import EPKCard from "../EPKCard/EPKCard";

interface IFilms {
  allFilms: object[]
}

const EPKContainer = ({ allFilms }: IFilms) => {
  const allTitles: any[] = allFilms.map((film: any) => {
    return (
      <EPKCard title={film.attributes.movie_title} />
    )
  })

  return (
    <div>
      <p>this is the EPK container, woot</p>
      {allTitles}
    </div>
  )
}


export default EPKContainer;