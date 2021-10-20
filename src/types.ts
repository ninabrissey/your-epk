export interface ThisIsUser {
  id: number;
  type: string;
  attributes: UserData
}

export interface UserData {
  email: string;
  first_name: string;
  last_name: string;
}

export interface ThisIsData {
  id: number;
  type: string;
  attributes: Attributes
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
  distribution: string
}

export interface Press {
  name_of_publication: string;
  description: string;
  link: string
}