import { Link } from "react-router-dom";
import SearchOrder from "../featuers/order/SearchOrder";

export default function Header() {
  return (
    <header>
      <Link to='/'>Fast React Pizza</Link>
      <SearchOrder />
      <p>username</p>
    </header>
  );
}
