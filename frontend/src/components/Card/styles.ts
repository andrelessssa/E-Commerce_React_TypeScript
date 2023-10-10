import styled  from "styled-components";

export const Caixa = styled.section`
    margin-top: 80px;
    margin-left: 160px;
    
    
    img{
        width: 256px;
        height: 300px;
        flex-shrink: 0;
        border-radius: 4px 4px 0px 0px;
        

    }   
`;
export const CaixaTexto = styled.div`
    width: 256px;
    height: 78px;
    flex-shrink: 0;
    border-radius: 0px 0px 4px 4px;
    background: rgba(255, 255, 255, 0.40);
    backdrop-filter: blur(10px);
    margin-left: 12px;

    .descricao{
        width: 232px;
        color: #41414D;
        font-family: Saira;
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: 150%; 
    }
    .preco{
        display: flex;
        width: 232px;
        height: 21px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        color: #09090A;
        font-family: Saira;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%;
    } 
    
`;
