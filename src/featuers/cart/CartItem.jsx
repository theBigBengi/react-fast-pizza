import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item, isLoadingIngredients, ingredients }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className='py-3 sm:flex sm:justify-between sm:items-center'>
      <div className='flex flex-col gap-[1px]'>
        <p className='mb-1'>
          {quantity}&times; {name}
        </p>
        <p className='text-[10px] capitalize italic text-slate-500'>
          {isLoadingIngredients ? "Loading..." : ingredients?.join(", ")}
        </p>
      </div>
      <div className='flex justify-between items-center mt-2 sm:gap-6 sm:mt-0'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
