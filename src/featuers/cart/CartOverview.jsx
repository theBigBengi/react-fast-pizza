import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  if (!totalQuantity) return null;

  return (
    <div
      className='flex items-center justify-between px-4 py-6
     bg-slate-800 text-slate-200 text-sm uppercase md:py-10 md:px-6 md:text-base'
    >
      <p className=' text-slate-300 font-semibold space-x-4 sm:space-x-6'>
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
