import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Produto from "./pages/Produto";
import Carrinho from "./pages/Carrinho"



export default function AppRouta(){
    return(
        <BrowserRouter>
          <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/produto" element={<Produto/>}></Route>
                <Route path="/carrinho" element={<Carrinho/>}></Route>
                
          </Routes>
        
        </BrowserRouter>
    )
};