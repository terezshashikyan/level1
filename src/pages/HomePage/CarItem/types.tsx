export interface ICar {
    id: number,
    src: string,
    name: string,
    soldOut: boolean,
    price: string,
};

export type ICarItemComponent = {
    car: ICar;
}

