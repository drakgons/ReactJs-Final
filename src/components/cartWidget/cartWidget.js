import { useContext } from "react";
import CartContext from "../cartContext/cartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { unidades } = useContext(CartContext);

  const totalCart = unidades;
  if (totalCart === 0) {
    return (
      <Link to="/cart">
        <img src="https://firebasestorage.googleapis.com/v0/b/cursoreact-9e166.appspot.com/o/icon_commerce.png?alt=media&token=9f652d05-309f-4d8e-b936-8e2be48c2946" alt="Carrito de compras" />
      </Link>
    );
  }

  return (
    <Link to="/cart">
      <img src="https://firebasestorage.googleapis.com/v0/b/cursoreact-9e166.appspot.com/o/icon_commerce.png?alt=media&token=9f652d05-309f-4d8e-b936-8e2be48c2946" alt="Carrito de compras" />
      {totalCart}
    </Link>
  );
};

export default CartWidget;
