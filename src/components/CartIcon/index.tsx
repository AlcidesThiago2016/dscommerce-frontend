import "./styles.css"
import cartIcon from '../../assets/Cart.svg';
import { useContext } from "react";
import { ContextCartCount } from "../../utils/context-cart";

export default function CartIcon() {

    const { contextCartCount } = useContext(ContextCartCount);

  return (
    <>
      <img src={cartIcon} alt="Carrinho de Compras" />
      {
        contextCartCount > 0 &&
        <div className="dsc-cart-count">{contextCartCount}</div>
      }
    
    </>
  );
}
