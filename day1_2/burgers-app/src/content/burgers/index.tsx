import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {PageWrapper} from "../../common/page-wrapper";
import {Burger} from "../../common/types";
import {fetchBurgers} from "../../services/fetch-burgers";

export const Burgers = () => {
    const [burgers, setBurgers] = useState<Burger[] | null>(null);

    useEffect(() => {
        fetchBurgers()
            .then(data => {
                setBurgers(data);
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
                                <TableCell>
                                    <Link to={`/burgers/${burger.id}`}>{burger.name}</Link>
                                </TableCell>
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