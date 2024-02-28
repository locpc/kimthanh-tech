import { Button } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./styles.css";

const HEADER_MENU = [
  { url: "/", value: "Dashboard" },
  { url: "/revenue", value: "Doanh thu" },
];

const Header = () => {
  const location = useLocation();

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
                <p className="text-sm text-[#A3AED0] cursor-pointer">Log out</p>
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
