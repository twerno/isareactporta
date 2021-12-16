import {useState, useEffect} from 'react';
import {PageWrapper} from "../../common/page-wrapper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

interface BurgersResponse {
    [id: string]: {
        name: string;
        ingredients: string;
        price: number;
    }
}

interface Burger {
    id: string;
    name: string;
    ingredients: string;
    price: number;
}

export const Burgers = () => {
    const [burgers, setBurgers] = useState<Burger[] | null>(null);

    useEffect(() => {
        fetch('https://rest-api-b6410.firebaseio.com/burgers.json')
            .then(r => r.json())
            .then((data) => {
                const transformedData = Object.keys(data).map(key => ({id: key, ...data[key]}));
                setBurgers(transformedData);
            })
    }, []);

    return (
        <PageWrapper title="Burgers">
            <Table sx={{maxWidth: '75%'}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Ingredients</TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {burgers?.map(burger => {
                        return (
                            <TableRow key={burger.id}>
                                <TableCell>{burger.name}</TableCell>
                                <TableCell align="right">{burger.ingredients}</TableCell>
                                <TableCell align="right">{burger.price}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </PageWrapper>
    )
}