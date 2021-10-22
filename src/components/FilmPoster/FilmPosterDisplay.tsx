interface IFilmPoster {
  filmPoster: string
}

const FilmPosterDisplay = () => {

  return (
    <section>
      <p>I am the film poster display</p>
      <img 
        // src={this will be whatever is passed as props}
        alt=''
      />
    </section>  
  )
}


export default FilmPosterDisplay;