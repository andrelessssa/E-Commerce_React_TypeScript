import styled from "styled-components";

export const Caixa = styled.div`
    
    margin-top: 34px;
    margin-left: 160px;
    
    ul{
        display: flex;
        gap: 40px;
    }
    ul li{
        color: #737380;
        text-align: center;
        font-family: Saira;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;   
        line-height: 22px;
        text-transform: uppercase;
        gap: 39px;
        list-style: none;

    }
`;
export const Gr = styled.div`
    color: var(--textos-dark-inputs-icons, #41414D);
    text-align: center;
    font-family: Saira;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px; 
    text-transform: uppercase;
    border-bottom: 2px solid #FFA585;   

`;