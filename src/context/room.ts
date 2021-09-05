export enum RoomType {
  All = 'all',
  Single = 'single',
  Double = 'double',
  Family = 'family',
  Presidential = 'presidential',
}

export interface RoomModel {
  id: number;
  name: string;
  slug: string;
  images: string[];
  size: number;
  featured: boolean;
  description: string;
  extras: string[];
  price: number;
  type: RoomType;
  capacity: number;
  breakfast: boolean;
  pets: boolean;
}

export interface FilterData {
  type: RoomType;
  minPrice: number;
  maxPrice: number;
  minSize: string;
  maxSize: string;
  capacity: string;
  price: string;
  breakfast: boolean;
  pets: boolean;
}
