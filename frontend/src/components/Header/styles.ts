import styled from "styled-components";

export const TopHeader = styled.div`
    background: #FFFFFF;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    a{
        font-family: 'Saira Stencil One', cursive;
        font-size: 40px;
        margin-left: 160px;
        color: #5D5D6D;
        font-style: normal;
        font-weight: 400;
        text-decoration: none;

    }
    input{
        width: 208px;
        height: 22px;
        text-align: center;
        font-family: Saira;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; 
        background-color: transparent;
        border: none;       
        
    }
    
    `;
    export const Geral = styled.div`
        display: flex;
        justify-content: center;
        gap: 24px;
        margin-right:169px;
     `;

    export const Caixa = styled.div`
        align-items: center;
        display: flex;
        border-radius: 8px;
        background: #F3F5F6;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        display: inline-flex;
        padding: 9px 16px;
        justify-content: center;
        align-items: center;
        gap: 90px;
        width: 352px;
        height: 42px;
    `;

export const Notifica = styled.div`
        display: flex;
        align-items: center;
        position: relative;
`;
export const Circulo = styled.div`
        width: 19px;
        height: 19px;
        flex-shrink: 0;
        background:  #DE3838;
        border-radius: 12px;
        justify-content: center;
        display: flex;
        position: absolute;
        right: -6px;
        bottom: 0;
        align-items: center;
        
    p{
        color: #FFF;
        text-align: center;
        font-family: Saira;
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px; 
    }
`;










