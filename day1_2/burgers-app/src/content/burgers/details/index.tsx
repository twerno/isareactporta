import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import {Burger} from "../../../common/types";
import {PageWrapper} from "../../../common/page-wrapper";
import {fetchBurger} from "../../../services/fetch-burgers";

export const BurgerDetails = () => {
    const [burger, setBurger] = useState<Burger | null>(null);
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            fetchBurger(params.id)
                .then(data => {
                    setBurger(data)
                })
        }
    }, []);

    return <PageWrapper title="Details">
        {burger
            ? <>
                <Avatar src={burger.url} sx={{ width: '200px', height: '200px' }} />
                <Typography variant="h6">{burger.name}</Typography>
                <Typography variant="caption">{burger.ingredients}</Typography>
                <Typography variant="h6">{burger.price}</Typography>
            </>
            : <Typography variant="h6">Such burger does not exists!</Typography>}
    </PageWrapper>
}