export const MyFavouriteDishes = (props) => {
    return <ul>
        {props.dishes.map(dish => {
            return <li key={dish.id}>{dish.name}</li>
        })}
    </ul>
}