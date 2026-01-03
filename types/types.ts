export interface User {
  _id: string;
  username: string;
  name: string;
  lastName: string;
  position: string;
  createdAt: string;
  updatedAt: string;
}

export interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: string;
  img: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  isVisible: boolean;
}
interface CoverImage {
  alternativeText: string | null;
  caption: string | null;
  createdAt: string;
  documentId: string;
  ext: string;
  formats: {
    thumbnail: {
      ext: string;
      hash: string;
      height: number;
      mime: string;
      name: string;
      path: null;
      size: number;
      sizeInBytes: number;
      url: string;
      width: number;
    };
  };
  hash: string;
  height: number;
  id: number;
  mime: string;
  name: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: null;
  publishedAt: string;
  size: number;
  updatedAt: string;
  url: string;
  width: number;
}
export interface Activity {
  address: string;
  artists: [];
  cover_image: CoverImage;
  createdAt: string;
  description: string;
  documentId: string;
  duration: string;
  event_name: string;
  event_type: null;
  gallery: null;
  id: number;
  is_free: boolean;
  price: number;
  publishedAt: string;
  slug: null;
  start_date: string;
  updatedAt: string;
}

export interface Category {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface InitialDataType{
  events: [] | null;
  categories: [] |  null;
  menus:[] |  null;
  metadata: {
      source: string;
      cacheHit: boolean;
      fetchedAt: string;
      error: any;
  };
}

export interface ApiError {
  message: string;
  statusCode: number;
  data?: any;
}

export interface NetworkError {
  message: string;
  code?: string;
}

export type AppError = Error | ApiError | NetworkError | string | unknown;
