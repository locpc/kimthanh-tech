import { Button } from "antd";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const HEADER_MENU = [
  { url: "/", value: "Dashboard" },
  { url: "/revenue", value: "Doanh thu" },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getItem } = useLocalStorage();
  const handleLogOut = () => {
    navigate("/sign-in");
  };

  useEffect(() => {
    const token = getItem("token");
    console.log(token);
    if (!token) {
      navigate("/sign-in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-screen">
      <div className="w-full shadow-header">
        <div className="flex items-center justify-between container">
          <div className="flex gap-8 items-center">
            <Link to="/">
              <img src="/imgs/logo.svg" alt="logo" />
            </Link>
            {HEADER_MENU.map(({ url, value }) => (
              <Link to={url} key={url}>
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
          <div className="flex gap-8 items-center">
            <Button
              type="primary"
              className="flex gap-1 bg-main hover:bg-main rounded-2xl text-sm text-white"
            >
              <img src="/imgs/add-app-icon.svg" alt="icon" />
              Add app
            </Button>
            <div className="flex gap-2 items-center">
              <img src="/imgs/avatar.png" width={40} height={40} alt="avatar" />
              <div>
                <p className="text-sm text-[#525252] font-bold">Anh Nguyen</p>
                <p
                  className="text-sm text-[#A3AED0] cursor-pointer"
                  onClick={handleLogOut}
                >
                  Log out
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
