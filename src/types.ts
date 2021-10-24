export interface ThisIsUser {
  id: number;
  type: string;
  attributes: UserData;
}

export interface UserData {
  email: string;
  first_name: string;
  last_name: string;
}

export interface EPKData {
  data: FilmEPK
  included: Award[] | Press[]
  // this must be any any because it holds press, film_fam, awards, and images
  // unless we can do | (or operator)
}

export interface FilmEPK {
  id: string | number;
  type: string;
  attributes: Attributes;
}

export interface Attributes {
  user_id: number;
  movie_title: string;
  genre: string;
  country: string;
  release_year: number;
  run_time: number;
  language: string;
  budget: number;
  website: string;
  production_company: string;
  distribution: string;
  awards: Award[];
  presses: Press[];
  synopsis: string;
  movie_poster_url: string;
  trailer: string;
  tag_line: string;
  log_line: string;
}

export interface Press {
  id: number;
  film_epk_id: number;
  name_of_publication: string;
  description: string;
  link: string;
}

export interface Award {
  id: number;
  film_epk_id: number;
  name: string;
  year: string;
  award_type: string;
}

export interface Image {
  id: number;
  film_epk_id: number;
  description: string;
  link: string;
}