import { Caixa, CaixaTexto } from "./styles";
interface Product { image: string, name: string, price: string } 




function index( { image, name, price }: Product ) {
  return(
        <Caixa>
        <img src={image} />
          <CaixaTexto>
            <p className="descricao">{name}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="228" height="1" viewBox="0 0 228 1" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M228 0.99998L8.74228e-08 1L0 0L228 -1.99324e-05L228 0.99998Z" fill="#DCE2E6"/></svg>
            <p className="preco">{price}</p>
          </CaixaTexto>
        </Caixa>
    
  )
};
export default index;

