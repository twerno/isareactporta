import {Burger} from "../../common/types";

interface BurgersResponse {
    [id: string]: {
        name: string;
        ingredients: string;
        price: number;
    }
}

export const fetchBurgers = async (): Promise<Burger[]> => {
    const response = await fetch('https://rest-api-b6410.firebaseio.com/burgers.json');
    const data: BurgersResponse = await response.json();

    return Object.keys(data).map(key => ({id: key, ...data[key]}));
}
