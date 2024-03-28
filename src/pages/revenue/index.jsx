import { DatePicker, Select, Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import locale from "antd/es/date-picker/locale/vi_VN";
import dayjs from "dayjs";
import DataTable from "./DataTable";
import { api } from "../../provider/api";
import { API_URL } from "../../config";
import { useSearchParams } from "react-router-dom";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  weekStart: 1,
});

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
  const [activeFilter, setActiveFilter] = useState(
    searchParams.get("filter_type") || "month"
  );
  const [openDatePicker, setOpenDatePicker] = useState(true);
  const [value, setValue] = useState(
    searchParams.get("value") || defaultValue()
  );
  const [exchangeRate, setExchangeRate] = useState({
    usd_to_vnd: "xx,xxx",
    jpy_to_vnd: "xx,xxx",
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const ref = useRef(null);

  const handleChangeFilterType = (type) => {
    setActiveFilter(type);
    const year = new Date().getFullYear();
    if (type === "week" && (value === defaultValue() || value === year)) {
      defaults(1);
    }
    setTimeout(() => {
      if (ref.current.nativeElement.innerHTML) {
        const getTempValue =
          ref?.current?.nativeElement?.innerHTML?.split("value=")[1];
        const value = getTempValue.split('"');
        setValue(value[1]);
      }
    }, 2000);
  };
  const handleChangeFilter = () => {
    setOpenDatePicker(!openDatePicker);
  };
  const onChangeTime = (date, dateString) => {
    setValue(dateString);
  };

  const getDateFromWeek = (year, week, dayOfWeek) => {
    var januaryFirst = new Date(year, 0, 1);
    var daysOffset = (week - 1) * 7;

    // Calculate the day of the week for January 1st
    var dayOfWeekJanuaryFirst = januaryFirst.getDay();

    // Adjust the offset to handle the case where January 1st is not Monday (0-indexed)
    daysOffset -= (dayOfWeekJanuaryFirst - 1);

    // Set the date to the first day of the target week
    januaryFirst.setDate(januaryFirst.getDate() + daysOffset);

    // Adjust to the specified day of the week
    januaryFirst.setDate(januaryFirst.getDate() + (dayOfWeek - januaryFirst.getDay()));

    return januaryFirst;
}

  const defaults = (check = 0) => {
    if (check === 1) {
      let month = new Date().getMonth() + 1;
      const year = new Date().getFullYear();
      const date = new Date().getDate();
      if (month < 10) month = `0${month}`;
      console.log(`${month}/${date}/${year}`)
      return [`${month}/${date}/${year}`, "week"];
    }
    if (activeFilter === "month") {
      const temp = value.replace("-", "/");
      return [temp, "month"];
    }
    if (activeFilter === "week") {
      const temp = value.split("-");
      return [getDateFromWeek(temp[0],temp[1].slice(0,2),1), "week"];
      // setSearchParams({});
    }
    return [value, "year"];
  };
  console.log("defaults",defaults());

  const checkValue = () => {
    if (
      activeFilter === "week" &&
      (value.includes("st") ||
        value.includes("nd") ||
        value.includes("rd") ||
        value.includes("th"))
    )
      return true;
    if (activeFilter === "month" && value.includes("-") && value.length === 7)
      return true;
    if (activeFilter === "year" && value.length === 4) return true;
    return false;
  };

  useEffect(() => {
    (async () => {
      try {
        if (checkValue()) {
          setLoading(true);
          const res = await api.get(
            `${API_URL}/report?filter_type=${activeFilter}&&value=${value}`
          );
          if (res && res?.data?.data) {
            setData(res?.data?.data);
          } else {
            setData([]);
          }
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
      setSearchParams({ filter_type: activeFilter, value });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter, value]);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(`${API_URL}/settings/get-exchange-rate`);
        if (res && res.data) {
          let usd_to_vnd = "xx,xxx";
          let jpy_to_vnd = "xx,xxx";
          for (const item of res.data?.data) {
            if (item?.key === "usd_to_vnd") {
              usd_to_vnd = item?.value;
            }
            if (item?.key === "jpy_to_vnd") {
              jpy_to_vnd = item?.value;
            }
          }
          setExchangeRate({ usd_to_vnd, jpy_to_vnd });
        }
      } catch (error) {}
    })();
  }, []);

  return (
    <div className="bg-[#F4F7FE] h-full">
      <div className="page">
        <div className="flex items-center justify-between pt-4 pb-2 px-5">
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
                value={activeFilter}
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
                defaultValue={dayjs()}
                onChange={onChangeTime}
                picker={defaults()[1]}
                suffixIcon={<img src="/imgs/selected-time.svg" alt="time" />}
                className="bg-[#D1E9FF] text-sm text-main font-medium border-none rounded-2xl px-2 lg:px-4 py-[6px]"
                // locale={locale}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end px-5">
          <p className="text-xs text-[#939393] font-normal">{`Tỷ giá: USD: ${exchangeRate?.usd_to_vnd} - JPY: ${exchangeRate?.jpy_to_vnd}`}</p>
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
