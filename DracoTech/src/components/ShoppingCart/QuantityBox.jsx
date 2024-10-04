const QuantityBox = ({quantity}) => {
  return (
    <>
    <div className="quantity-box h-12 w-20 grid grid-cols-4 border-2 border-Footer_color rounded">
      <button className="quantity-box quantity-box-left col-span-1 content-center text-center text-lg border-r-2 border-Footer_color">-</button>
      <div className="quantity-box quantity-box-center col-span-2 content-center text-center">{quantity}</div>
      <button className="quantity-box quantity-box-right col-span-1 content-center text-center text-xl border-l-2 border-Footer_color">+</button>
    </div>
    </>
  );
}

export default QuantityBox;