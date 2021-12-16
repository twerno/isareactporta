import {FC} from "react";
import Typography from "@mui/material/Typography";
import styled from 'styled-components';

interface Props {
    title: string;
}

const PageWrapperContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`;

export const PageWrapper: FC<Props> = ({ title, children }) => {
    return <PageWrapperContainer>
            <Typography variant="h5">{title}</Typography>
            {children}
        </PageWrapperContainer>
}