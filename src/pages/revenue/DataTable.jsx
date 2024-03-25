import { useNavigate } from "react-router-dom";
import "./styles.css";
import React from "react";
import { Tooltip } from "antd";

const DataTable = ({ data }) => {
  const navigate = useNavigate();

  const onHandleDetails = (app_id) => {
    navigate(`/revenue/${app_id}`);
  };

  const groupedByRank = data?.list_app?.reduce((acc, app) => {
    const rank = app.app_info.rank;
    if (!acc[rank]) {
      acc[rank] = [];
    }
    acc[rank].push(app);
    return acc;
  }, {});

  const sortedGroupedByRank = {};
  Object.keys(groupedByRank || {})
    .sort()
    .forEach((key) => {
      sortedGroupedByRank[key] = groupedByRank[key];
    });

  const colorToRank = (item) => {
    switch (item) {
      case "A":
        return "bg-[#13EC00]";
      case "B":
        return "bg-[#FFE500]";
      case "C":
        return "bg-[#FFA800]";
      default:
        return "bg-[#FF4D00]";
    }
  };

  return (
    <div className="mt-4 rounded-lg overflow-x-auto">
      {data?.list_app?.length > 0 ? (
        <div
          id="table-scroll"
          className="custom-table"
          style={{ width: "100%", background: "white" }}
        >
          <table id="main-table" className="main-table w-full">
            <thead>
              <tr>
                <th className="w-32 md:w-72">App</th>
                <th className="w-5"></th>
                <th>Sum</th>
                {Object.keys(
                  data?.total?.sum_date_report ||
                    data?.total?.sum_month_report ||
                    []
                ).map((value) => (
                  <th key={Math.random()} className="custom-th">{value}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="sticky-row-1">
                <td rowSpan={4} className="sticky text-center">
                  <p className="text-main text-sm font-semibold">
                    {data?.total?.total_app} App
                  </p>
                  <div className="flex flex-col md:flex-row justify-center md:gap-4 items-center">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded bg-[#00ED34]" />
                      <p className="text-sm">Active</p>
                      <p className="text-main text-sm font-semibold">
                        {data?.total?.active}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded bg-[#EA0000]" />
                      <p className="text-sm">Deactive</p>
                      <p className="text-main text-sm font-semibold">
                        {data?.total?.deactive}
                      </p>
                    </div>
                  </div>
                </td>
                <td>S</td>
                <td>
                  {data?.total?.sum?.cost === "0"
                    ? "-"
                    : data?.total?.sum?.cost}
                </td>
                {Object.values(
                  data?.total?.sum_date_report ||
                    data?.total?.sum_month_report ||
                    {}
                ).map((value) => (
                  <td key={Math.random()}>
                    {value?.cost === "0" ? "-" : value?.cost}
                  </td>
                ))}
              </tr>
              <tr className="sticky-row-2">
                <td>R</td>
                <td>
                  {data?.total?.sum?.revenue === "0"
                    ? "-"
                    : data?.total?.sum?.revenue}
                </td>
                {Object.values(
                  data?.total?.sum_date_report ||
                    data?.total?.sum_month_report ||
                    {}
                ).map((value) => (
                  <td key={Math.random()}>
                    {value?.revenue === "0" ? "-" : value?.revenue}
                  </td>
                ))}
              </tr>
              <tr className="sticky-row-3">
                <td>P</td>
                <td
                  style={{
                    background: data?.total?.sum?.profit?.includes("-")
                      ? "#FF0000"
                      : data?.total?.sum?.profit === "0"
                      ? "#FFFA8C"
                      : "#88F077",
                    fontWeight: "bold",
                    color: data?.total?.sum?.profit?.includes("-")
                      ? "white"
                      : "#435071",
                  }}
                >
                  {data?.total?.sum?.profit === "0"
                    ? "-"
                    : data?.total?.sum?.profit}
                </td>
                {Object.values(
                  data?.total?.sum_date_report ||
                    data?.total?.sum_month_report ||
                    {}
                ).map((value) => (
                  <td
                    style={{
                      background: value?.profit?.includes("-")
                        ? "#FF0000"
                        : value?.profit === "0"
                        ? "#FFFA8C"
                        : "#88F077",
                      fontWeight: "bold",
                      color: value?.profit?.includes("-") ? "white" : "#435071",
                    }}
                    key={Math.random()}
                  >
                    {value?.profit === "0" ? "-" : value?.profit}
                  </td>
                ))}
              </tr>
              <tr className="sticky-row-4">
                <td>%</td>
                <td
                  style={{
                    background: data?.total?.sum?.profit_rate?.includes("-")
                      ? "#FF0000"
                      : data?.total?.sum?.profit_rate === "0"
                      ? "#FFFA8C"
                      : "#88F077",
                    fontWeight: "bold",
                    color: data?.total?.sum?.profit_rate?.includes("-")
                      ? "white"
                      : "#435071",
                  }}
                >
                  {data?.total?.sum?.profit_rate === "0"
                    ? "-"
                    : `${data?.total?.sum?.profit_rate}%`}
                </td>
                {Object.values(
                  data?.total?.sum_date_report ||
                    data?.total?.sum_month_report ||
                    {}
                ).map((value) => (
                  <td
                    style={{
                      background: value?.profit_rate?.includes("-")
                        ? "#FF0000"
                        : value?.profit_rate === "0"
                        ? "#FFFA8C"
                        : "#88F077",
                      fontWeight: "bold",
                      color: value?.profit_rate?.includes("-")
                        ? "white"
                        : "#435071",
                    }}
                    key={Math.random()}
                  >
                    {value?.profit_rate === "0"
                      ? "-"
                      : `${value?.profit_rate}%`}
                  </td>
                ))}
              </tr>
              <tr className="h-[5px] custom-split">
                <td colSpan="100"></td>
              </tr>
              {Object.entries(sortedGroupedByRank || {}).map(([key, value]) => (
                <React.Fragment key={Math.random()}>
                  <tr className="rank">
                    <td colSpan="100">
                      <div
                        className={`custom-sticky mt-1 text-xs text-black font-semibold ${colorToRank(
                          key
                        )} w-fit px-5 py-1 rounded-tr-2xl`}
                      >
                        {`Rank ${key}`}
                      </div>
                    </td>
                  </tr>
                  {value?.map((item, index) => (
                    <React.Fragment key={item.app_id}>
                      <tr className="custom-tr">
                        <td colSpan="100">
                          <div className="flex md:hidden px-2 gap-1 items-center">
                            <div
                              className={`w-2 h-2 rounded ${
                                item?.app_info?.status === 1
                                  ? "bg-[#00ED34]"
                                  : "bg-[#EA0000]"
                              }`}
                            />
                            <p className="text-xs text-[#A3AED0] font-bold text-left ">
                              {item?.app_info?.store_id}
                            </p>
                            <p className="text-sm text-main font-bold text-left">
                              {item?.app_info?.app_name}
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr className="sticky-left">
                        <td
                          rowSpan={4}
                          className="sticky text-center px-1 cursor-pointer hover:!bg-[#ebe9e9]"
                          onClick={() =>
                            onHandleDetails(item?.app_info?.id)
                          }
                        >
                          <div className="hidden md:flex gap-1 items-center">
                            <div
                              className={`w-2 h-2 rounded ${
                                item?.app_info?.status === 1
                                  ? "bg-[#00ED34]"
                                  : "bg-[#EA0000]"
                              }`}
                            />
                            <Tooltip title={item?.app_info?.store_id}>
                              <p className="text-xs text-[#A3AED0] font-bold text-left w-[10%] overflow-hidden truncate">
                                {item?.app_info?.store_id}
                              </p>
                            </Tooltip>
                            <Tooltip title={item?.app_info?.app_name}>
                              <p className="text-sm text-main font-bold w-[90%] text-left overflow-hidden truncate">
                                {item?.app_info?.app_name}
                              </p>
                            </Tooltip>
                          </div>
                          <div className="grid md:grid-cols-2">
                            <div className="flex gap-1">
                              <p>Doanh thu:</p>
                              <p className="text-main font-bold">
                                {item?.sum_revenue}
                              </p>
                            </div>
                            <div className="flex gap-1">
                              <p>Lợi nhuận:</p>
                              <p className="text-main font-bold">
                                {item?.sum_profit}
                              </p>
                            </div>
                            <div className="flex gap-1">
                              <p>Chi phí:</p>
                              <p className="text-main font-bold">
                                {item?.sum_cost}
                              </p>
                            </div>
                            <div className="flex gap-1">
                              <p>Tỷ lệ LN:</p>
                              <p className="text-main font-bold">
                                {item?.sum_profit_rate}%
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>S</td>
                        <td>{item?.sum_cost === "0" ? "-" : item?.sum_cost}</td>
                        {Object.values(item?.date_report || {}).map((value) => (
                          <td key={Math.random()}>
                            {value?.cost === "0" ? "-" : value?.cost}
                          </td>
                        ))}
                      </tr>
                      <tr className="sticky-left-1">
                        <td>R</td>
                        <td>
                          {item?.sum_revenue === "0"
                            ? "-"
                            : item?.sum_revenue}
                        </td>
                        {Object.values(item?.date_report || {}).map((value) => (
                          <td key={Math.random()}>
                            {value?.revenue === "0" ? "-" : value?.revenue}
                          </td>
                        ))}
                      </tr>
                      <tr className="sticky-left-1">
                        <td>P</td>
                        <td
                          style={{
                            background: item?.sum_profit?.includes("-")
                              ? "#FF0000"
                              : item?.sum_profit === "0"
                              ? "#FFFA8C"
                              : "#88F077",
                            fontWeight: "bold",
                            color: item?.sum_profit?.includes("-")
                              ? "white"
                              : "#435071",
                          }}
                        >
                          {item?.sum_profit === "0" ? "-" : item?.sum_profit}
                        </td>
                        {Object.values(item?.date_report || {}).map((value) => (
                          <td
                            style={{
                              background: value?.profit?.includes("-")
                                ? "#FF0000"
                                : value?.profit === "0"
                                ? "#FFFA8C"
                                : "#88F077",
                              fontWeight: "bold",
                              color: value?.profit?.includes("-")
                                ? "white"
                                : "#435071",
                            }}
                            key={Math.random()}
                          >
                            {value?.profit === "0" ? "-" : value?.profit}
                          </td>
                        ))}
                      </tr>
                      <tr className="sticky-left-1">
                        <td>%</td>
                        <td
                          style={{
                            background: item?.sum_profit_rate?.includes("-")
                              ? "#FF0000"
                              : item?.sum_profit_rate === "0"
                              ? "#FFFA8C"
                              : "#88F077",
                            fontWeight: "bold",
                            color: item?.sum_profit_rate?.includes("-")
                              ? "white"
                              : "#435071",
                          }}
                        >
                          {item?.sum_profit_rate === "0"
                            ? "-"
                            : `${item?.sum_profit_rate}%`}
                        </td>
                        {Object.values(item?.date_report || {}).map((value) => (
                          <td
                            style={{
                              background: value?.profit_rate?.includes("-")
                                ? "#FF0000"
                                : value?.profit_rate === "0"
                                ? "#FFFA8C"
                                : "#88F077",
                              fontWeight: "bold",
                              color: value?.profit_rate?.includes("-")
                                ? "white"
                                : "#435071",
                            }}
                            key={Math.random()}
                          >
                            {value?.profit_rate === "0"
                              ? "-"
                              : `${value?.profit_rate}%`}
                          </td>
                        ))}
                      </tr>
                      <tr className={`custom-last-app ${index === value?.length - 1 ? "none" : ""}`}>
                        <td colSpan="100"></td>
                      </tr>
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Không có dữ liệu</p>
      )}
    </div>
  );
};

export default DataTable;
