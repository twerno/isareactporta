import {BurgerData} from "../../common/types";

export const editBurger = async (burgerId:string, burgerData: BurgerData): Promise<void> => {
    const response = await fetch(`https://rest-api-b6410.firebaseio.com/burgers/${burgerId}.json`, {
        method: 'PUT',
        body: JSON.stringify(burgerData)
    });
    return response.json();
}