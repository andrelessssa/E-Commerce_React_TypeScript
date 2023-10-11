import styled  from "styled-components";

export const Caixa = styled.section`
    margin: 20px;
   
    
    
    img{
        width: 256px;
        height: 300px;
        flex-shrink: 0;
        border-radius: 4px 4px 0px 0px;
        object-fit: cover;

    }   
`;
export const CaixaTexto = styled.div`
    width: 256px;
    height: 78px;
    flex-shrink: 0;
    border-radius: 0px 0px 4px 4px;
    background: rgba(255, 255, 255, 0.40);
    backdrop-filter: blur(10px);
    padding-left: 12px;
    padding-top: 8px;
    margin-top: -6px;
    

    .descricao{
        width: 220px;
        height: 18px;
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
        height: 20px;
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
export const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    margin-top: 60px;
`;