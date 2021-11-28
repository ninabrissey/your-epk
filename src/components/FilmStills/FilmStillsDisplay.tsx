import FilmStillsCard from './FilmStillsCard';

const FilmStillsDisplay = ({
  filmStills,
  isEditing,
  epk_id,
  removeFilmMember,
}: any) => {
  const filmsStillCards = filmStills.map((filmStill: any) => {
    return (
      <FilmStillsCard
        key={filmStill.id}
        id={filmStill.id}
        filmStill={filmStill}
        removeFilmMember={removeFilmMember}
        isEditing={isEditing}
      />
    );
  });

  return <div className="stills-display-container">{filmsStillCards}</div>;
};

export default FilmStillsDisplay;
