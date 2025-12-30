export interface User{
    _id:string,
    username:string,
    name:string,
    lastName:string,
    position:string,
    createdAt:string,
    updatedAt:string
}

export interface MenuItem {
    _id: string
    name: string
    description: string
    price: string
    img: string
    category:string
    createdAt:string
    updatedAt:string
    isVisible:boolean
  }

  export interface Activity {
    _id: string
    title: string
    description: string
    fecha: string
    ubicacion: string
    img: string
    hours:string
    duration:string
    createdAt:string
    updatedAt:string
  }

  export interface Category {
    _id:string,
    name:string,
    description:string
    createdAt:string
    updatedAt:string
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
  