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
  included: Included
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
  release_year: string;
  run_time: string;
  language: string;
  budget: string;
  production_company: string;
  distribution: string;
  synopsis: string;
  movie_poster_url: string;
  trailer: string;
  tag_line: string;
  log_line: string;

  header_image_description: string;
  header_image_url: string;
  contact_name: string;
  contact_number: string;
  contact_email: string;
  company_name: string;
  website: string;

}

export interface Press {
  film_epk_id: number;
  name_of_publication: string;
  description: string;
  link: string;
}

export interface Included {
  id: string;
  type: string;
  attributes: any
  // add film fame once endpoint available
}

export interface Award {
  film_epk_id: number;
  name: string;
  year: string;
  award_type: string;
}

export interface Image {
  film_epk_id: number;
  description: string;
  link: string;
}

export interface Film_Fam {

}