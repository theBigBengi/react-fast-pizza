import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className='py-3 sm:flex sm:justify-between sm:items-center'>
      <p className='mb-1'>
        {quantity}&times; {name}
      </p>
      <div className='flex justify-between items-center sm:gap-6'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>
        <Button type='small'>delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
