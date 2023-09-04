import Header from "./Header";
import CartOverview from "../featuers/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]'>
      {isLoading && <Loader />}

      <Header />

      <div className='overflow-scroll'>
        <main className='max-w-2xl mx-auto'>
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}
