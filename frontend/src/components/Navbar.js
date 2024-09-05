import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeuser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(removeuser())
    navigate("/");
   
  }

  return (
    <div className=" border shadow-xl w-full">
      <nav className="flex py-3 justify-between  mx-auto items-center container">
        <Link to={"/"}>
          {" "}
          <h1 className="cursor-pointer text-[30px] font-extrabold">
            myCrypto<span className="text-blue-700">Tracker</span>
          </h1>
        </Link>
        {user === "logged in" && (
          <navItem className=" flex gap-5 font-semibold text-[20px]">
            <Link to={"/top10"}>
              {" "}
              <p className="cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-blue-600">Top10</p>
            </Link>
            <Link to={"/trending"}>
              {" "}
              <p className="cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-blue-600">Trending</p>
            </Link>
            <Link to={"/watchlist"}>
              {" "}
              <p className="cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-blue-600">Watchlist</p>
            </Link>
          </navItem>
        )}
        <div className="flex gap-4">
          {user === "logged in" ? (
            <button
              onClick={handleLogout}
              className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 bg-blue-600 text-white hover:text-white hover:bg-blue-900 px-4 py-2 rounded-lg shadow-lg"
            >
              Log out
            </button>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 bg-blue-600 text-white hover:text-white hover:bg-blue-900 px-4 py-2 rounded-lg shadow-lg">
                  Login
                </button>
              </Link>
              <Link to={"/signin"}>
                <button className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 bg-blue-600 text-white hover:text-white hover:bg-blue-900 px-4 py-2 rounded-lg shadow-lg">
                  Signin
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
