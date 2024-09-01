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
}
