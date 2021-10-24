import ImageCard from "./ImageCard"
import { Image } from '../../types';

const ImagesDisplay = () => {
  
const images: Image[] = [
    { 
      id: 1,
      film_epk_id: 133,
      link: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fstatic1.squarespace.com%2Fstatic%2F594ea6feccf210e3df36ce8d%2Ft%2F5b484d9488251b39eb13687b%2F1531465151647%2FNina%2BBrissey%2Band%2BRobert%2BCraighead%2BAmazing%2BGrace%2B.jpg%3Fformat%3D1500w&imgrefurl=https%3A%2F%2Fwww.amazinggraceshortfilm.com%2F&tbnid=OuIyoX_bIdVXTM&vet=12ahUKEwivpry00OPzAhWbFM0KHZlGCCYQMygEegUIARCTAQ..i&docid=D2gHVCqz45TAGM&w=1500&h=1080&q=amazing%20grace%20nina%20brissey&ved=2ahUKEwivpry00OPzAhWbFM0KHZlGCCYQMygEegUIARCTAQ',
      description: 'Behind the scenes - Robert Craighead and Nina Brissey',
    },
    {
      id: 11,
      film_epk_id: 133,
      link: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F594ea6feccf210e3df36ce8d%2F1612312930526-N689B8LTHP14PS2VJMNN%2FKatherine%252525252BKampo%252525252BCrawford%25252525252C%252525252Bwomen%252525252Bin%252525252Bfilm%25252525252C%252525252BAmazing%252525252BGrace&imgrefurl=https%3A%2F%2Fwww.amazinggraceshortfilm.com%2F&tbnid=x5hDWtUTZjk26M&vet=12ahUKEwivpry00OPzAhWbFM0KHZlGCCYQMyg6egQIARAz..i&docid=D2gHVCqz45TAGM&w=2295&h=1530&q=amazing%20grace%20nina%20brissey&ved=2ahUKEwivpry00OPzAhWbFM0KHZlGCCYQMyg6egQIARAz',
      description: 'Katherine Kampko',
    },
    {
      id: 14,
      film_epk_id: 133,
      link: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMTZkZjAzY2UtNmRkZS00YmJmLWEwY2EtM2UyMGVlYjJlYjExXkEyXkFqcGdeQXVyMjIyOTk4ODY%40._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt7183842%2F&tbnid=Jrt1O9EQO2W49M&vet=12ahUKEwivpry00OPzAhWbFM0KHZlGCCYQMyg_egQIARA-..i&docid=GnHOnNjAbsJj7M&w=5040&h=3360&q=amazing%20grace%20nina%20brissey&ved=2ahUKEwivpry00OPzAhWbFM0KHZlGCCYQMyg_egQIARA-',
      description: 'Robert Craighead',
    }
  ]

  const imageCards = images.map(image => {
    return <ImageCard key={image.id} image={image} />
  })

  return (
    <div>
      {imageCards}
    </div>
  )
}

export default ImagesDisplay
