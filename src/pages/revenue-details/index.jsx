import { DatePicker, Select } from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import locale from "antd/es/date-picker/locale/vi_VN";
import "./styles.css";

const TIME_MENU = [
  {
    label: "Tuần",
    value: "week",
  },
  { label: "Tháng", value: "month" },
  { label: "Năm", value: "year" },
];

const RevenueDetails = () => {
  const [activeFilter, setActiveFilter] = useState("month");
  const [openDatePicker, setOpenDatePicker] = useState(false);

  const handleChangeFilterType = (type) => {
    setActiveFilter(type);
  };
  const handleChangeFilter = () => {
    setOpenDatePicker(!openDatePicker);
  };
  const onChangeTime = (date, dateString) => {};
  const defaultTime = () => {
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    if (month < 10) return `0${month}/${year}`;
    return `${month}/${year}`;
  };

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
                  defaultValue={dayjs(defaultTime(), "MM/YYYY")}
                  onChange={onChangeTime}
                  picker={activeFilter}
                  suffixIcon={<img src="/imgs/selected-time.svg" alt="time" />}
                  className="bg-[#D1E9FF] text-sm text-main font-medium border-none rounded-2xl px-4 py-[6px]"
                  locale={locale}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 bg-white p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="text-center">
              <p className="text-3xl text-main font-bold">40.531</p>
              <p className="text-2xl text-[#A3AED0]">Doanh thu</p>
            </div>
            <div className="text-center">
              <p className="text-3xl text-main font-bold">10.531</p>
              <p className="text-2xl text-[#A3AED0]">Chi phí</p>
            </div>
            <div className="text-center">
              <p className="text-3xl text-main font-bold">40.531</p>
              <p className="text-2xl text-[#A3AED0]">Lợi nhuận</p>
            </div>
            <div className="text-center">
              <p className="text-3xl text-main font-bold">10.531%</p>
              <p className="text-2xl text-[#A3AED0]">Tỷ lệ lợi nhuận</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueDetails;
