import { Caixa, CaixaTexto } from "./styles";

function index(){
  return(
   
        <Caixa>
        <img src="/assets/n42ogaQn32o.png" />
          <CaixaTexto>
            <p className="descricao">Caneca de cerâmica rústica</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="228" height="1" viewBox="0 0 228 1" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M228 0.99998L8.74228e-08 1L0 0L228 -1.99324e-05L228 0.99998Z" fill="#DCE2E6"/></svg>
            <p className="preco">R$ 40,00</p>
          </CaixaTexto>
        </Caixa>
    
  )
};
export default index;

