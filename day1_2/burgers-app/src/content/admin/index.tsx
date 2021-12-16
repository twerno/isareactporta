import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {PageWrapper} from "../../common/page-wrapper";
import {useEffect, useState} from "react";
import {Burger} from "../../common/types";
import {fetchBurgers} from "../../services/fetch-burgers";
import {AddBurgerForm} from "./add-burger-form";

export const Admin = () => {
    const [burgers, setBurgers] = useState<Burger[] | null>(null);

    useEffect(() => {
        fetchBurgers()
            .then(data => {
                setBurgers(data);
            })
    }, []);

    return (
        <PageWrapper title="Admin">
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
            <AddBurgerForm />
        </PageWrapper>
    )
}