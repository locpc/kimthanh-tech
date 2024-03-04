import { useNavigate } from "react-router-dom";
import "./styles.css";
import { useEffect } from "react";

const DataTable = () => {
  const navigate = useNavigate();

  const onHandleDetails = () => {
    navigate("/revenue/1");
  };

  return (
    <div className="mt-4 border border-[#C5C5C5] rounded-lg overflow-x-auto">
      <table
        className="custom-table"
        style={{ width: "100%", background: "white" }}
      >
        <tr>
          <th>App</th>
          <th className="w-5"></th>
          <th>Sum</th>
          <th>01/02</th>
          <th>02/02</th>
          <th>03/02</th>
          <th>04/02</th>
          <th>05/02</th>
          <th>06/02</th>
          <th>07/02</th>
          <th>08/02</th>
          <th>09/02</th>
          <th>10/02</th>
        </tr>
        <tr>
          <td rowSpan={4} className="text-center w-72">
            <p className="text-main text-sm font-semibold">19 App</p>
            <div className="flex justify-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded bg-[#00ED34]" />
                <p className="text-sm">Active</p>
                <p className="text-main text-sm font-semibold">15</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded bg-[#EA0000]" />
                <p className="text-sm">Deactive</p>
                <p className="text-main text-sm font-semibold">4</p>
              </div>
            </div>
          </td>
          <td>S</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>R</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>P</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#FFFA8C" }}>-</td>
          <td style={{ background: "#FFFA8C" }}>-</td>
          <td style={{ background: "#FFFA8C" }}>-</td>
          <td style={{ background: "#FFFA8C" }}>-</td>
        </tr>
        <tr>
          <td>%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#FFFA8C", fontWeight: "bold" }}>-</td>
          <td style={{ background: "#FFFA8C", fontWeight: "bold" }}>-</td>
          <td style={{ background: "#FFFA8C", fontWeight: "bold" }}>-</td>
          <td style={{ background: "#FFFA8C", fontWeight: "bold" }}>-</td>
        </tr>
        <tr>
          <div className="mt-1 text-xs text-black font-semibold bg-[#FAFF00] w-fit px-5 py-1 rounded-tr-2xl">
            Rank A
          </div>
        </tr>
        <tr>
          <td
            rowSpan={4}
            className="text-center px-1 cursor-pointer"
            onClick={onHandleDetails}
          >
            <div className="flex gap-1 items-center">
              <div className="w-2 h-2 rounded bg-[#00ED34]" />
              <p className="text-xs text-[#A3AED0] font-bold">221</p>
              <p className="text-sm text-main font-bold">
                File Recovery - Photo Recovery
              </p>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex gap-1">
                <p>Doanh thu:</p>
                <p className="text-main font-bold">40.531</p>
              </div>
              <div className="flex gap-1">
                <p>Lợi nhuận:</p>
                <p className="text-main font-bold">40.531</p>
              </div>
              <div className="flex gap-1">
                <p>Chi phí:</p>
                <p className="text-main font-bold">10.531</p>
              </div>
              <div className="flex gap-1">
                <p>Tỷ lệ LN:</p>
                <p className="text-main font-bold">10.531%</p>
              </div>
            </div>
          </td>
          <td>S</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>R</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>P</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td
            style={{
              background: "#FF0000",
              color: "white",
              fontWeight: "bold",
            }}
          >
            -7,097
          </td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#FFFA8C", fontWeight: "bold" }}>-</td>
          <td style={{ background: "#FFFA8C", fontWeight: "bold" }}>-</td>
          <td style={{ background: "#FFFA8C", fontWeight: "bold" }}>-</td>
          <td style={{ background: "#FFFA8C", fontWeight: "bold" }}>-</td>
        </tr>
        <tr>
          <td>%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#FF0000", color: "white" }}>-20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#FFFA8C", fontWeight: "bold" }}>-</td>
          <td style={{ background: "#FFFA8C", fontWeight: "bold" }}>-</td>
          <td style={{ background: "#FFFA8C", fontWeight: "bold" }}>-</td>
          <td style={{ background: "#FFFA8C", fontWeight: "bold" }}>-</td>
        </tr>
        <tr className="h-1"></tr>
        <tr>
          <td
            rowSpan={4}
            className="text-center px-1 cursor-pointer"
            onClick={onHandleDetails}
          >
            <div className="flex gap-1 items-center">
              <div className="w-2 h-2 rounded bg-[#00ED34]" />
              <p className="text-xs text-[#A3AED0] font-bold">221</p>
              <p className="text-sm text-main font-bold">
                Talk To Dogs - Dog Translator
              </p>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex gap-1">
                <p>Doanh thu:</p>
                <p className="text-main font-bold">40.531</p>
              </div>
              <div className="flex gap-1">
                <p>Lợi nhuận:</p>
                <p className="text-main font-bold">40.531</p>
              </div>
              <div className="flex gap-1">
                <p>Chi phí:</p>
                <p className="text-main font-bold">10.531</p>
              </div>
              <div className="flex gap-1">
                <p>Tỷ lệ LN:</p>
                <p className="text-main font-bold">10.531%</p>
              </div>
            </div>
          </td>
          <td>S</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>R</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>P</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td
            style={{
              background: "#FF0000",
              color: "white",
              fontWeight: "bold",
            }}
          >
            -7,097
          </td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#FFFA8C", fontWeight: "bold" }}>-</td>
          <td style={{ background: "#FFFA8C", fontWeight: "bold" }}>-</td>
          <td style={{ background: "#FFFA8C", fontWeight: "bold" }}>-</td>
          <td style={{ background: "#FFFA8C", fontWeight: "bold" }}>-</td>
        </tr>
        <tr>
          <td>%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td
            style={{
              background: "#FF0000",
              color: "white",
              fontWeight: "bold",
            }}
          >
            -20.56%
          </td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#FFFA8C" }}>-</td>
          <td style={{ background: "#FFFA8C" }}>-</td>
          <td style={{ background: "#FFFA8C" }}>-</td>
          <td style={{ background: "#FFFA8C" }}>-</td>
        </tr>
        <tr>
          <div className="mt-1 text-xs text-black font-semibold bg-[#FFA800] w-fit px-5 py-1 rounded-tr-2xl">
            Rank B
          </div>
        </tr>
        <tr>
          <td
            rowSpan={4}
            className="text-center px-1 cursor-pointer"
            onClick={onHandleDetails}
          >
            <div className="flex gap-1 items-center">
              <div className="w-2 h-2 rounded bg-[#00ED34]" />
              <p className="text-xs text-[#A3AED0] font-bold">221</p>
              <p className="text-sm text-main font-bold">
                AR Drawing Sketch Paint
              </p>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex gap-1">
                <p>Doanh thu:</p>
                <p className="text-main font-bold">40.531</p>
              </div>
              <div className="flex gap-1">
                <p>Lợi nhuận:</p>
                <p className="text-main font-bold">40.531</p>
              </div>
              <div className="flex gap-1">
                <p>Chi phí:</p>
                <p className="text-main font-bold">10.531</p>
              </div>
              <div className="flex gap-1">
                <p>Tỷ lệ LN:</p>
                <p className="text-main font-bold">10.531%</p>
              </div>
            </div>
          </td>
          <td>S</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>R</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>P</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td
            style={{
              background: "#FF0000",
              color: "white",
              fontWeight: "bold",
            }}
          >
            -7,097
          </td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#FFFA8C" }}>-</td>
          <td style={{ background: "#FFFA8C" }}>-</td>
          <td style={{ background: "#FFFA8C" }}>-</td>
          <td style={{ background: "#FFFA8C" }}>-</td>
        </tr>
        <tr>
          <td>%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td
            style={{
              background: "#FF0000",
              color: "white",
              fontWeight: "bold",
            }}
          >
            -20.56%
          </td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#FFFA8C", fontWeight: "bold" }}>-</td>
          <td style={{ background: "#FFFA8C", fontWeight: "bold" }}>-</td>
          <td style={{ background: "#FFFA8C", fontWeight: "bold" }}>-</td>
          <td style={{ background: "#FFFA8C", fontWeight: "bold" }}>-</td>
        </tr>
        <tr className="h-1"></tr>
        <tr>
          <td
            rowSpan={4}
            className="text-center px-1 cursor-pointer"
            onClick={onHandleDetails}
          >
            <div className="flex gap-1 items-center">
              <div className="w-2 h-2 rounded bg-[#00ED34]" />
              <p className="text-xs text-[#A3AED0] font-bold">221</p>
              <p className="text-sm text-main font-bold">
                Wifi Password: Wifi Master Key
              </p>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex gap-1">
                <p>Doanh thu:</p>
                <p className="text-main font-bold">40.531</p>
              </div>
              <div className="flex gap-1">
                <p>Lợi nhuận:</p>
                <p className="text-main font-bold">40.531</p>
              </div>
              <div className="flex gap-1">
                <p>Chi phí:</p>
                <p className="text-main font-bold">10.531</p>
              </div>
              <div className="flex gap-1">
                <p>Tỷ lệ LN:</p>
                <p className="text-main font-bold">10.531%</p>
              </div>
            </div>
          </td>
          <td>S</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>27,424</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>R</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>7,097</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>P</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td
            style={{
              background: "#FF0000",
              color: "white",
              fontWeight: "bold",
            }}
          >
            -7,097
          </td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>7,097</td>
          <td style={{ background: "#FFFA8C" }}>-</td>
          <td style={{ background: "#FFFA8C" }}>-</td>
          <td style={{ background: "#FFFA8C" }}>-</td>
          <td style={{ background: "#FFFA8C" }}>-</td>
        </tr>
        <tr>
          <td>%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td
            style={{
              background: "#FF0000",
              color: "white",
              fontWeight: "bold",
            }}
          >
            -20.56%
          </td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#88F077", fontWeight: "bold" }}>20.56%</td>
          <td style={{ background: "#FFFA8C" }}>-</td>
          <td style={{ background: "#FFFA8C" }}>-</td>
          <td style={{ background: "#FFFA8C" }}>-</td>
          <td style={{ background: "#FFFA8C" }}>-</td>
        </tr>
      </table>
    </div>
  );
};

export default DataTable;
