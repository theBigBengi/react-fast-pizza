import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

/* eslint-disable react/prop-types */
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className='flex gap-4 py-2'>
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "grayscale opacity-70" : ""}`}
      />
      <div className='flex flex-col grow pt-0.5'>
        <p className='font-medium '>{name}</p>
        <p className='text-slate-500 text-sm capitalize'>
          {ingredients.join(", ")}
        </p>
        <div className='mt-auto flex justify-between items-center '>
          {!soldOut ? (
            <p className='text-sm'>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className='text-sm uppercase font-medium text-slate-500'>
              Sold out
            </p>
          )}

          <Button type='small'>add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
