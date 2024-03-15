import { useNavigate } from "react-router-dom";
import "./styles.css";
import React from "react";
import { Tooltip } from "antd";

const DataTable = ({ data }) => {
  const navigate = useNavigate();

  const onHandleDetails = (app_id) => {
    navigate(`/revenue/${app_id}`);
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
                <th className="w-72">App</th>
                <th className="w-5"></th>
                <th>Sum</th>
                {Object.keys(
                  data?.total?.sum_date_report ||
                    data?.total?.sum_month_report ||
                    []
                ).map((value) => (
                  <th key={Math.random()}>{value}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="sticky-row-1">
                <td rowSpan={4} className="sticky text-center">
                  <p className="text-main text-sm font-semibold">
                    {data?.total?.total_app} App
                  </p>
                  <div className="flex justify-center gap-4">
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
                <td>{data?.total?.sum?.cost}</td>
                {Object.values(
                  data?.total?.sum_date_report ||
                    data?.total?.sum_month_report ||
                    {}
                ).map((value) => (
                  <td key={Math.random()}>{value?.cost}</td>
                ))}
              </tr>
              <tr className="sticky-row-2">
                <td>R</td>
                <td>{data?.total?.sum?.revenue}</td>
                {Object.values(
                  data?.total?.sum_date_report ||
                    data?.total?.sum_month_report ||
                    {}
                ).map((value) => (
                  <td key={Math.random()}>{value?.revenue}</td>
                ))}
              </tr>
              <tr className="sticky-row-3">
                <td>P</td>
                <td
                  style={{
                    background:
                      !data?.total?.sum?.profit?.includes("-") &&
                      data?.total?.sum?.profit !== "0"
                        ? "#88F077"
                        : "#FF0000",
                    fontWeight: "bold",
                    color:
                      data?.total?.sum?.profit?.includes("-") ||
                      data?.total?.sum?.profit === "0"
                        ? "white"
                        : "#435071",
                  }}
                >
                  {data?.total?.sum?.profit}
                </td>
                {Object.values(
                  data?.total?.sum_date_report ||
                    data?.total?.sum_month_report ||
                    {}
                ).map((value) => (
                  <td
                    style={{
                      background:
                        !value?.profit?.includes("-") && value?.profit !== "0"
                          ? "#88F077"
                          : "#FF0000",
                      fontWeight: "bold",
                      color:
                        value?.profit?.includes("-") || value?.profit === "0"
                          ? "white"
                          : "#435071",
                    }}
                    key={Math.random()}
                  >
                    {value?.profit}
                  </td>
                ))}
              </tr>
              <tr className="sticky-row-4">
                <td>%</td>
                <td
                  style={{
                    background:
                      !data?.total?.sum?.profit_rate?.includes("-") &&
                      data?.total?.sum?.profit_rate !== "0"
                        ? "#88F077"
                        : "#FF0000",
                    fontWeight: "bold",
                    color:
                      data?.total?.sum?.profit_rate?.includes("-") ||
                      data?.total?.sum?.profit_rate === "0"
                        ? "white"
                        : "#435071",
                  }}
                >
                  {data?.total?.sum?.profit_rate}%
                </td>
                {Object.values(
                  data?.total?.sum_date_report ||
                    data?.total?.sum_month_report ||
                    {}
                ).map((value) => (
                  <td
                    style={{
                      background:
                        !value?.profit_rate?.includes("-") &&
                        value?.profit_rate !== "0"
                          ? "#88F077"
                          : "#FF0000",
                      fontWeight: "bold",
                      color:
                        value?.profit_rate?.includes("-") ||
                        value?.profit_rate === "0"
                          ? "white"
                          : "#435071",
                    }}
                    key={Math.random()}
                  >
                    {value?.profit_rate}%
                  </td>
                ))}
              </tr>
              <tr>
                <div className="custom-sticky mt-1 text-xs text-black font-semibold bg-[#FAFF00] w-fit px-5 py-1 rounded-tr-2xl">
                  Rank A
                </div>
              </tr>
              {data?.list_app?.map((item) => (
                <React.Fragment key={item.app_id}>
                  <tr className="sticky-left">
                    <td
                      rowSpan={4}
                      className="sticky text-center px-1 cursor-pointer hover:!bg-[#ebe9e9]"
                      onClick={() => onHandleDetails(item.app_id)}
                    >
                      <div className="flex gap-1 items-center">
                        <div className="w-2 h-2 rounded bg-[#00ED34]" />
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
                      <div className="grid grid-cols-2">
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
                    <td>{item?.sum_cost}</td>
                    {Object.values(item?.date_report || {}).map((value) => (
                      <td key={Math.random()}>{value?.cost}</td>
                    ))}
                  </tr>
                  <tr className="sticky-left-1">
                    <td>R</td>
                    <td>{item?.sum_revenue}</td>
                    {Object.values(item?.date_report || {}).map((value) => (
                      <td key={Math.random()}>{value?.revenue}</td>
                    ))}
                  </tr>
                  <tr className="sticky-left-1">
                    <td>P</td>
                    <td
                      style={{
                        background:
                          !item?.sum_profit?.includes("-") &&
                          item?.sum_profit !== "0"
                            ? "#88F077"
                            : "#FF0000",
                        fontWeight: "bold",
                        color:
                          item?.sum_profit?.includes("-") ||
                          item?.sum_profit === "0"
                            ? "white"
                            : "#435071",
                      }}
                    >
                      {item?.sum_profit}
                    </td>
                    {Object.values(item?.date_report || {}).map((value) => (
                      <td
                        style={{
                          background:
                            !value?.profit?.includes("-") &&
                            value?.profit !== "0"
                              ? "#88F077"
                              : "#FF0000",
                          fontWeight: "bold",
                          color:
                            value?.profit?.includes("-") ||
                            value?.profit === "0"
                              ? "white"
                              : "#435071",
                        }}
                        key={Math.random()}
                      >
                        {value?.profit}
                      </td>
                    ))}
                  </tr>
                  <tr className="sticky-left-1">
                    <td>%</td>
                    <td
                      style={{
                        background:
                          !item?.sum_profit_rate?.includes("-") &&
                          item?.sum_profit_rate !== "0"
                            ? "#88F077"
                            : "#FF0000",
                        fontWeight: "bold",
                        color:
                          item?.sum_profit_rate?.includes("-") ||
                          item?.sum_profit_rate === "0"
                            ? "white"
                            : "#435071",
                      }}
                    >
                      {item?.sum_profit_rate}%
                    </td>
                    {Object.values(item?.date_report || {}).map((value) => (
                      <td
                        style={{
                          background:
                            !value?.profit_rate?.includes("-") &&
                            value?.profit_rate !== "0"
                              ? "#88F077"
                              : "#FF0000",
                          fontWeight: "bold",
                          color:
                            value?.profit_rate?.includes("-") ||
                            value?.profit_rate === "0"
                              ? "white"
                              : "#435071",
                        }}
                        key={Math.random()}
                      >
                        {value?.profit_rate}%
                      </td>
                    ))}
                  </tr>
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
