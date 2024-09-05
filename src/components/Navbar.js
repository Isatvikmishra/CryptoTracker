import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../store/userSlice";
function Navbar(props) {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(removeUser());
    navigate("/");
  }

  return (
    <div className="w-full border shadow-xl">
      <div className="flex   justify-between mx-auto items-center px-8 py-4 container">
        <Link to={"/"}>
          {" "}
          <h1 className="text-[30px] font-black cursor-pointer">
            logi<span className="text-blue-700">Tracker </span>
          </h1>
        </Link>
        {user === "logged in" && (
          <navitems className="flex font-bold text-[20px] gap-6">
            <Link to={"/top10"}>
              {" "}
              <p className="cursor-pointer  hover:stroke-blue-700 hover:text-white">Top10</p>
            </Link>
            <Link to={"/trending"}>
              <p className="cursor-pointer  hover:stroke-blue-700 hover:text-white">Trending</p>
            </Link>
            <Link to={"/watchlist"}>
              <p className="cursor-pointer  hover:stroke-blue-700 hover:text-white">watchlist</p>
            </Link>
          </navitems>
        )}

        <div className="flex gap-4">
          {user === "logged in" ? (
            <button
              onClick={handleClick}
              className="bg-blue-700 text-white  hover:text-blue-700 hover:bg-white px-4 py-2 rounded-lg shadow-lg"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 bg-blue-600 text-white hover:text-white hover:bg-blue-900 px-4 py-2 rounded-lg shadow-lg">
                  Login
                </button>
              </Link>
              <Link to={"/signin"}>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-blue-600 text-white hover:text-white hover:bg-blue-900 px-4 py-2 rounded-lg shadow-lg">
                  Signup
                </button>{" "}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;