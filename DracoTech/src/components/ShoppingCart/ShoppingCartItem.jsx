import QuantityBox from "./QuantityBox";

const ShoppingCartItem = ({image, alt, name, price, quantity, subtotal}) => {
  return (
    <>
      <tr className="shopping-cart-row">
        <td><img src={image} alt={alt} /></td>
        <td>{name}</td>
        <td>₡ {price}</td>
        <td className="lg:w-28">
          <QuantityBox quantity={quantity}/>
        </td>
        <td>₡ {subtotal}</td>
        <td className="lg:w-14">
          <button>
            <img src="/src/images/trash.png" alt="" className="w-6"/>
          </button>
        </td>
      </tr>
    </>
  );
}

export default ShoppingCartItem;