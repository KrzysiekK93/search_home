export const LOAD_ADVERTS_PENDING = "LOAD_ADVERTS_PENDING";
export const LOAD_ADVERTS_SUCCESS = "LOAD_ADVERTS_SUCCESS";
export const LOAD_ADVERTS_ERROR = "LOAD_ADVERTS_SUERROR";

export interface LoadAdvertPending {
    type: typeof LOAD_ADVERTS_PENDING
}

export interface LoadAdvertSuccess {
    type: typeof LOAD_ADVERTS_SUCCESS
    adverts: IAdvertDatas
}

export interface LoadAdvertError {
    type: typeof LOAD_ADVERTS_ERROR
    error: any
}

/* Advert interface types */
export interface IAdvertDatas {
    adverts: Array<IAdvertData>
}

export interface IAdvertData {
    title: string,
    description: string,
    id: number,
    location: ILocation
}

export interface ILocation {
    city: string, 
    street?: string,
    post_code: number
}

/************************/
/************************/

