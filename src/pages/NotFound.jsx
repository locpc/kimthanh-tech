import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Trang này không tồn tại"
      extra={
        <Button
          onClick={handleBackHome}
          type="primary"
          className="bg-[#4096ff]"
        >
          Quay lại trang chủ
        </Button>
      }
    />
  );
};

export default NotFound;
