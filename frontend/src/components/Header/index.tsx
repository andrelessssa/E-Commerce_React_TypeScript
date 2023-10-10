import { TopHeader, Notifica, Geral, Caixa, Circulo } from "./styles";

export default function index() {
  return (
    <TopHeader>
      <a href="/">capputeeno</a>
  
      <Geral>
        <Caixa>
          <input
            type="search"
            placeholder="Procurando por algo específico?"
          ></input>
          <i className="fa fa-search"> </i>
        </Caixa>

        <Notifica>
          <img src="/assets/carrinho.svg" />
          <Circulo>
            <p>2</p>
          </Circulo>
        </Notifica>
        
      </Geral>
    </TopHeader>
  );
}
