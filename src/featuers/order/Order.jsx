// Test ID: IIDSAT

import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";
import Button from "../../ui/Button";

function Order() {
  const order = useLoaderData();

  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
  }, [fetcher]);

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className='px-4 py-6 space-y-6'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex items-center gap-2'>
          <h2 className='text-xl font-semibold'>Order #{id}</h2>
          <Button
            type='secondary'
            onClick={() => {
              navigator.clipboard.writeText(id);
            }}
          >
            copy
          </Button>
        </div>

        <div className='space-x-2'>
          {priority && (
            <span
              className='bg-red-500  text-xs uppercase px-3 py-1 
            text-red-50 tracking-wide font-semibold'
            >
              Priority
            </span>
          )}
          <span
            className='bg-green-500  text-xs uppercase px-3 py-1 
            text-green-50 tracking-wide font-semibold'
          >
            {status} order
          </span>
        </div>
      </div>

      <div
        className='flex flex-wrap items-center justify-between 
        gap-2 bg-slate-200 py-5 px-6'
      >
        <p className='font-medium'>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className='text-slate-500 text-xs'>
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className='divide-y divide-slate-200 border-b'>
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.pizzaId)
                ?.ingredients ?? []
            }
            isLoadingIngredients={fetcher.state === "loading"}
          />
        ))}
      </ul>

      <div className='space-y-2 bg-slate-200 px-6 py-6'>
        <p className='text-sm font-medium text-slate-600'>
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className='text-sm font-medium text-slate-600'>
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className='font-bold'>
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>

      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
