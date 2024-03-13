import { DatePicker, Select, Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import locale from "antd/es/date-picker/locale/vi_VN";
import "./styles.css";
import { api } from "../../provider/api";
import { API_URL } from "../../config";
import { useNavigate, useParams } from "react-router-dom";

const TIME_MENU = [
  {
    label: "Tất cả",
    value: "all",
  },
  {
    label: "Tuần",
    value: "week",
  },
  { label: "Tháng", value: "month" },
  { label: "Năm", value: "year" },
];

const defaultValue = () => {
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  if (month < 10) return `${year}-0${month}`;
  return `${year}-${month}`;
};

const RevenueDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("month");
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(defaultValue());
  const ref = useRef(null);

  const handleChangeFilterType = (type) => {
    setActiveFilter(type);
    setTimeout(() => {
      if (ref.current.nativeElement.innerHTML) {
        const getTempValue =
          ref?.current?.nativeElement?.innerHTML?.split("value=")[1];
        const value = getTempValue.split('"');
        setValue(value[1]);
      }
    }, 300);
  };
  const handleChangeFilter = () => {
    setOpenDatePicker(!openDatePicker);
  };
  const onChangeTime = (date, dateString) => {
    setValue(dateString);
  };
  const defaultTime = () => {
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    if (month < 10) return `0${month}/${year}`;
    return `${month}/${year}`;
  };
  const checkData = () => {
    if (data?.cost === 0 && data?.revenue === 0) return true;
    return false;
  };

  useEffect(() => {
    (async () => {
      if (params?.revenueId) {
        setLoading(true);
        try {
          const res = await api.get(
            `${API_URL}/report/detail/${params?.revenueId}?filter_type=${activeFilter}&&value=${value}`
          );
          if (res && res?.data?.data) {
            setData(res?.data?.data);
          } else {
            setData([]);
          }
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      } else {
        navigate("revenue");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter, params?.revenueId, value]);

  return (
    <div className="bg-[#F4F7FE] h-full">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 justify-between py-4">
          <div className="flex gap-8">
            <div className="flex gap-2 items-center">
              <div className="w-3 h-3 rounded-md bg-[#00ED34]" />
              <p className="text-base text-[#A3AED0] font-bold">221</p>
              <p className="text-lg text-main font-bold">
                File Recovery - Photo Recovery
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="hidden lg:flex gap-4 py-[2px] bg-white rounded-2xl">
              {TIME_MENU.map(({ value, label }) => (
                <div
                  key={value}
                  className={`rounded-2xl px-4 py-[6px] cursor-pointer ${
                    activeFilter === value ? "bg-[#D1E9FF]" : "bg-transparent"
                  }`}
                  onClick={() => handleChangeFilterType(value)}
                >
                  <p className="text-sm text-black font-medium">{label}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <div className="block lg:hidden">
                <Select
                  defaultValue="month"
                  style={{ width: 120 }}
                  onChange={handleChangeFilterType}
                  options={TIME_MENU}
                  className="bg-[#D1E9FF] text-sm text-main font-medium border-none rounded-2xl px-2 lg:px-4 py-[6px]"
                  suffixIcon={<img src="/imgs/selected-time.svg" alt="time" />}
                />
              </div>
              <div onClick={handleChangeFilter}>
                <DatePicker
                  ref={ref}
                  defaultValue={dayjs(defaultTime(), "MM/YYYY")}
                  onChange={onChangeTime}
                  picker={activeFilter}
                  suffixIcon={<img src="/imgs/selected-time.svg" alt="time" />}
                  className="bg-[#D1E9FF] text-sm text-main font-medium border-none rounded-2xl px-4 py-[6px]"
                  locale={locale}
                  disabled={activeFilter === "all"}
                />
              </div>
            </div>
          </div>
        </div>
        {loading ? (
          <div className="mt-10 flex justify-center items-center">
            <Spin />
          </div>
        ) : checkData() ? (
          <p>Không có dữ liệu</p>
        ) : (
          <div className="mt-3 bg-white p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              <div className="text-center">
                <p className="text-3xl text-main font-bold">{data?.revenue}</p>
                <p className="text-2xl text-[#A3AED0]">Doanh thu</p>
              </div>
              <div className="text-center">
                <p className="text-3xl text-main font-bold">10.531</p>
                <p className="text-2xl text-[#A3AED0]">{data?.cost}</p>
              </div>
              <div className="text-center">
                <p className="text-3xl text-main font-bold">{data?.profit}</p>
                <p className="text-2xl text-[#A3AED0]">Lợi nhuận</p>
              </div>
              <div className="text-center">
                <p className="text-3xl text-main font-bold">
                  {data?.profit_rate}%
                </p>
                <p className="text-2xl text-[#A3AED0]">Tỷ lệ lợi nhuận</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RevenueDetails;
