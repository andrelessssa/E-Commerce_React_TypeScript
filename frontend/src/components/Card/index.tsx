import { Caixa, CaixaTexto, ProductList } from "./styles";
import { Products } from "../../service/db";


interface Products {
  image_url: string;
  name: string;
  description: string;
  category: string;
}
function index( )   {
  return(
    <ProductList>
    {Products.map((product, index) => (
      <div key={index} className="product-card">
        <Caixa>
          <img src={product.image_url} alt={product.name} />
          <CaixaTexto>
            <p className="descricao">{product.name}</p>
            <p className="preco">{product.category}</p>
          </CaixaTexto>
        </Caixa>
      </div>
    ))}
  </ProductList>
    
  )
};
export default index;

