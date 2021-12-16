export const removeBurger = async (burgerId: string): Promise<void> => {
    const response = await fetch(`https://rest-api-b6410.firebaseio.com/burgers/${burgerId}.json`, {
        method: 'DELETE',
    });
    return response.json();
}
