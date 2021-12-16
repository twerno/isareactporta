import {Burger} from "../../common/types";

interface BurgersResponse {
    [id: string]: {
        name: string;
        ingredients: string;
        price: number;
    }
}

export const fetchBurgers = (): Promise<Burger[]> => {
    return fetch('https://rest-api-b6410.firebaseio.com/burgers.json')
        .then(r => r.json())
        .then((data: BurgersResponse) => {
            return Object.keys(data).map(key => ({id: key, ...data[key]}));
        })
}
