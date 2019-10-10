//Interface type declatarion
export default interface IAdvertDatas {
    data: Array<IAdvertData>
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