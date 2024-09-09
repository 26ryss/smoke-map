export type User = {
  id: string;
  display_name: string;
  name: string;
  email: string;
  password: string;
  created_at: Date;
}

export type Area = {
  id: string;
  name: string;
}

export type Store = {
  id: number;
  name: string;
  address: string;
  area_id: string;
  description: string;
  url: string;
  eye_catch_url: string;
  latitude: number;
  longitude: number;
}

export type GeoLocation = {
  latitude: number;
  longitude: number;
  
}

export type VoteData = {
  isAbleToSmoke: number;
  isNotAbleToSmoke: number;
}

export type ReviewData = {
  avg: number;
  count: number;
}

export type Review = {
  id: string;
  store_id: number;
  uid: string;
  score: number;
  comment: string;
}