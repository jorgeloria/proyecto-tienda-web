import { useCart } from "../../hooks/useCart";

const ShoppingCartItem = ({ id, image, alt, name, price, quantity, subtotal}) => {
  const { removeFromCart, addToCart, removeOneFromCart } = useCart();
  const product = {
    id,
    name,
    price,
    name,
    quantity: 1,
  };
  return (
    <>
      <tr className="shopping-cart-row">
        <td>
          <img src={image} alt={alt} />
        </td>
        <td>{name}</td>
        <td>₡ {price}</td>
        <td className="lg:w-28">
          <div className="quantity-box h-12 w-20 grid grid-cols-4 border-2 border-Footer_color rounded">
            <button className="quantity-box quantity-box-left col-span-1 content-center text-center text-lg border-r-2 border-Footer_color"
            onClick={() => removeOneFromCart(product)}>
              -
            </button>
            <div className="quantity-box quantity-box-center col-span-2 content-center text-center">
              {quantity}
            </div>
            <button className="quantity-box quantity-box-right col-span-1 content-center text-center text-xl border-l-2 border-Footer_color"
            onClick={() => addToCart(product)}>
              +
            </button>
          </div>
        </td>
        <td>₡ {subtotal}</td>
        <td className="lg:w-14">
          <button onClick={() => removeFromCart(product)}>
            <img src="/src/images/trash.png" alt="" className="w-6" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ShoppingCartItem;
