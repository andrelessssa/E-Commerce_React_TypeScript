import { TopHeader } from "./styles";
import grupo2 from "./Group2.svg";

export default function index() {
  return (
    <TopHeader>
      <a href="/">capputeeno</a>
      

      <div className="geral">
        <div className="Caixa">
          <input
            type="search"
            placeholder="Procurando por algo específico?"
          ></input>
          <i className="fa fa-search"></i>
        </div>

        <div className="notifica">
          <img src={grupo2} />

          <div className="circulo">
            <p>2</p>
          </div>
        </div>
      </div>
    </TopHeader>
  );
}
