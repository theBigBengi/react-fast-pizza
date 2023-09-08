import { useSelector } from "react-redux";
import CreateUser from "../featuers/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className='my-10  px-4 text-center '>
      <h1 className='text-2xl font-semibold mb-8 md:text-3xl capitalize'>
        The best pizza.
        <br />
        <span className='text-violet-500 '>
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {!username ? (
        <CreateUser />
      ) : (
        <Button to='/menu' type='primary'>
          continue oredering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
