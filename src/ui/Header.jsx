import { Link } from "react-router-dom";
import SearchOrder from "../featuers/order/SearchOrder";
import Username from "../featuers/user/Username";

export default function Header() {
  return (
    <header className='flex items-center justify-between  bg-gradient-to-r from-purple-600 to-violet-500 uppercase border-b border-violet-200 px-4 py-4 sm:px-6 '>
      <Link to='/' className='tracking-widest font-semibold w-10 md:w-16'>
        <img src='/pizzalogopng.png' alt='image' />
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
