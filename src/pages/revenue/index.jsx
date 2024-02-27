import { DatePicker } from "antd";
import { useState } from "react";
import locale from "antd/es/date-picker/locale/vi_VN";
import dayjs from "dayjs";

const TIME_MENU = [
  {
    value: "Tuần",
    type: "week",
  },
  { value: "Tháng", type: "month" },
  { value: "Năm", type: "year" },
];

const Revenue = () => {
  const [activeFilter, setActiveFilter] = useState("month");
  const [openDatePicker, setOpenDatePicker] = useState(false);
  console.log(`${new Date()}/${new Date().getFullYear()}`);
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
    if (month < 10)
      return `0${month}/${year}`;
    return `${month}/${year}`;
  };

  return (
    <div className="bg-[#F4F7FE] h-full">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div className="flex gap-8">
            <p className="text-xl text-main font-semibold">Doanh thu</p>
            <div className="flex gap-4 bg-white rounded-2xl">
              {TIME_MENU.map(({ value, type }) => (
                <div
                  className={`rounded-2xl px-4 py-[6px] cursor-pointer ${
                    activeFilter === type ? "bg-[#D1E9FF]" : "bg-transparent"
                  }`}
                  onClick={() => handleChangeFilterType(type)}
                >
                  <p className="text-sm text-black font-medium">{value}</p>
                </div>
              ))}
            </div>
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
  );
};

export default Revenue;
