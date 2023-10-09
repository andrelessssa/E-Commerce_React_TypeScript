import styled from "styled-components";

export const TopHeader = styled.div`
    background: #FFFFFF;
    width: 100vw;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    a{
        font-family: 'Saira Stencil One', cursive;
        font-size: 40px;
        margin-left: 160px;
    }
    input{
        width: 206px;
        height: 22px;
        text-align: center;
        font-family: Saira;
        font-size: 13px;
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
`;
export const Circulo = styled.div`
        width: 22px;
        height: 22px;
        flex-shrink: 0;
        background:  #DE3838;
        border-radius: 12px;
        justify-content: center;
        display: flex;
        margin-top: 23px;
    
        
    
    p{
        color: #FFFFFF;
       
        text-align: center;
        font-family: Saira;
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px;
    }
`;










