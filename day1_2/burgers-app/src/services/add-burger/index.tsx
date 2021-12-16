import {BurgerData} from "../../common/types";

export const addBurger = async (burgerData: BurgerData): Promise<void> => {
    const response = await fetch('https://rest-api-b6410.firebaseio.com/burgers.json', {
        method: 'POST',
        body: JSON.stringify(burgerData)
    });
    return response.json();
}