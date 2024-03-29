import { Button } from "antd";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useAuth } from "../../provider/auth";

const HEADER_MENU = [
  { url: "/", value: "Dashboard" },
  { url: "/revenue", value: "Doanh thu" },
];

const Header = () => {
  const location = useLocation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { getItem, removeItem } = useLocalStorage();
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    setHamburger(false);
  }, [location.pathname]);

  const handleLogOut = () => {
    removeItem("token");
    navigate("/sign-in");
  };

  // useEffect(() => {
  //   const token = getItem("token");
  //   console.log(token);
  //   if (!token) {
  //     navigate("/sign-in");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="h-screen">
      <div className="fixed top-0 w-full shadow-header h-16 bg-white z-10">
        <div className="flex items-center justify-between px-5 h-full">
          <div className="flex gap-8 items-center">
            <Link to="/">
              <img src="/imgs/logo.svg" alt="logo" />
            </Link>
            {HEADER_MENU.map(({ url, value }) => (
              <Link to={url} key={url} className="hidden lg:block">
                <p
                  className={`text-sm py-5 px-4 border-b-2 transition-all duration-300 ${
                    (location.pathname.includes(url) && url !== "/") ||
                    location.pathname === url
                      ? "text-main border-main"
                      : "text-[#A3AED0] border-transparent"
                  } hover:text-main hover:border-main font-semibold`}
                >
                  {value}
                </p>
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex gap-8 items-center">
            {(user?.role === 1 || Number(getItem("role")) === 1) && (
              <Button
                type="primary"
                className="flex gap-1 bg-main hover:bg-main rounded-2xl text-sm text-white"
                onClick={() => navigate("/add-app")}
              >
                <img src="/imgs/add-app-icon.svg" alt="icon" />
                Add app
              </Button>
            )}
            <div className="flex gap-2 items-center">
              <img src="/imgs/avatar.png" width={40} height={40} alt="avatar" />
              <div>
                <p
                  className="text-sm text-[#525252] font-bold cursor-pointer"
                  onClick={() => navigate("/change-password")}
                >
                  {user?.user || getItem("user")}
                </p>
                <p
                  className="text-sm text-[#A3AED0] cursor-pointer"
                  onClick={handleLogOut}
                >
                  Log out
                </p>
              </div>
            </div>
          </div>
          <div
            className="block lg:hidden"
            onClick={() => {
              setHamburger(true);
            }}
          >
            <img src="/imgs/menu.svg" alt="logo" />
          </div>
        </div>
        <div
          className={`lg:hidden absolute top-0 z-10 ${
            hamburger ? "right-0" : "-right-[999px]"
          } transition-all duration-700 w-full h-[100vh] bg-white`}
        >
          <div className="border-b border-b-[#BBB2A7]">
            <div className="flex justify-between items-center container px-4 h-16">
              <Link to="/">
                <img src="/imgs/logo.svg" alt="logo" />
              </Link>
              <div
                onClick={() => {
                  setHamburger(false);
                }}
              >
                <img src="/imgs/menu.svg" alt="logo" />
              </div>
            </div>
          </div>
          <div className="mt-20 px-4 py-5">
            {HEADER_MENU.map(({ url, value }) => (
              <div key={value}>
                <Link to={url}>
                  <div className="text-2xl font-medium text-black py-3 border-b border-b-extra-blue">
                    {value}
                  </div>
                </Link>
              </div>
            ))}
            {(user?.role === 1 || Number(getItem("role")) === 1) && (
              <div
                className="text-2xl font-medium text-black py-3 border-b border-b-extra-blue"
                onClick={() => navigate("add-app")}
              >
                Add app
              </div>
            )}
            <div
              className="text-2xl font-medium text-black py-3 border-b border-b-extra-blue"
              onClick={() => navigate("/change-password")}
            >
              Change password
            </div>
            <div
              className="text-2xl font-medium text-black py-3 border-b border-b-extra-blue"
              onClick={handleLogOut}
            >
              Logout
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16 h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
