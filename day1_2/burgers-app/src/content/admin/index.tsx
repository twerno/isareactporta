import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {PageWrapper} from "../../common/page-wrapper";
import {useEffect, useState} from "react";
import {Burger} from "../../common/types";
import {fetchBurgers as fetchBurgersService} from "../../services/fetch-burgers";
import {AddBurgerForm} from "./add-burger-form";
import {BurgerRow} from "./burger-row";

export const Admin = () => {
    const [burgers, setBurgers] = useState<Burger[] | null>(null);

    const fetchBurgers = async () => {
        const data = await fetchBurgersService();
        setBurgers(data);
    }

    useEffect(() => {
        fetchBurgers();
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
                        return <BurgerRow
                            key={burger.id}
                            burger={burger}
                            onRemove={fetchBurgers}
                        />
                    })}
                </TableBody>
            </Table>
            <AddBurgerForm onAdd={fetchBurgers}/>
        </PageWrapper>
    )
}