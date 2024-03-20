import { DatePicker, Select, Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import locale from "antd/es/date-picker/locale/vi_VN";
import dayjs from "dayjs";
import DataTable from "./DataTable";
import { api } from "../../provider/api";
import { API_URL } from "../../config";
import { useSearchParams } from "react-router-dom";

const TIME_MENU = [
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

const Revenue = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState(searchParams.get("filter_type") || "month");
  const [openDatePicker, setOpenDatePicker] = useState(true);
  const [value, setValue] = useState(searchParams.get("value") || defaultValue());
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
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

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await api.get(
          `${API_URL}/report?filter_type=${activeFilter}&&value=${value}`
        );
        if (res && res?.data?.data) {
          setData(res?.data?.data);
          setSearchParams({ filter_type: activeFilter, value });
        } else {
          setData([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [activeFilter, value]);

  return (
    <div className="bg-[#F4F7FE] h-full">
      <div className="">
        <div className="flex items-center justify-between py-4 px-5">
          <div className="flex gap-8">
            <p className="text-xl text-main font-semibold">Doanh thu</p>
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
                className="bg-[#D1E9FF] text-sm text-main font-medium border-none rounded-2xl px-2 lg:px-4 py-[6px]"
                locale={locale}
              />
            </div>
          </div>
        </div>
        <div className="px-5">
          {loading ? (
            <div className="mt-10 flex justify-center items-center">
              <Spin />
            </div>
          ) : (
            <DataTable data={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Revenue;
