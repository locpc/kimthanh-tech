import { Button, Input, Modal, Select, message } from "antd";
import { useEffect, useState } from "react";
import { api } from "../../provider/api";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/auth";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const AddApp = () => {
  const navigate = useNavigate();
  const [appID, setAppID] = useState("");
  const [appName, setAppName] = useState("");
  const [packageName, setPackageName] = useState("");
  const [vps, setVps] = useState("");
  const [status, setStatus] = useState(1);
  const [rank, setRank] = useState("A");
  const { user } = useAuth();
  const { getItem, removeItem } = useLocalStorage();
  const role = getItem("role");

  const onCancel = () => {
    navigate("/revenue");
  };

  const onAddApp = async () => {
    if (!appID) {
      alert("The app ID field is required.");
      return;
    }
    if (!appName) {
      alert("The app name field is required.");
      return;
    }
    if (!packageName) {
      alert("The package name field is required.");
      return;
    }
    if (!vps) {
      alert("The vps ID field is required.");
      return;
    }
    if (!status) {
      alert("The status field is required.");
      return;
    }
    if (!rank) {
      alert("The rank field is required.");
      return;
    }
    try {
      const payload = {
        app_id: appID,
        app_name: appName,
        package_name: packageName,
        vps_ip: vps,
        status,
        rank,
      };
      const res = await api.post(`${API_URL}/app/new`, payload);
      if (res && res.data) {
        alert("Add app successfully");
        navigate("/revenue");
      } else {
        alert("Add app faild");
      }
    } catch (error) {
      alert(error?.response?.data?.app_id || "Add app faild");
    }
  };

  useEffect(() => {
    if (user?.role !== 1 && Number(role) !== 1) {
      // message.warning("Bạn không có quyền truy cập");
      navigate("/revenue");
      return;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, user?.role]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-[#F4F7FE]">
      <div className="shadow-3xl bg-white rounded-2xl p-6 2xl:p-8">
        <p className="w-[280px] md:w-[410px] text-4xl text-primary font-bold">
          Add app
        </p>
        <div className="mt-4">
          <p className="mb-2 text-base">App ID</p>
          <Input
            value={appID}
            style={{ width: "100%" }}
            onChange={(e) => setAppID(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <p className="mb-2 text-base">App Name</p>
          <Input
            value={appName}
            style={{ width: "100%" }}
            onChange={(e) => setAppName(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <p className="mb-2 text-base">Package Name</p>
          <Input
            value={packageName}
            style={{ width: "100%" }}
            onChange={(e) => setPackageName(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <p className="mb-2 text-base">VPS ID</p>
          <Input
            value={vps}
            style={{ width: "100%" }}
            onChange={(e) => setVps(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <p className="mb-2 text-base">Rank</p>
          <Select
            defaultValue={rank}
            style={{ width: "100%" }}
            onChange={(value) => setRank(value)}
            options={[
              { value: "A", label: "A" },
              { value: "B", label: "B" },
              { value: "C", label: "C" },
              { value: "D", label: "D" },
            ]}
          />
        </div>
        <div className="mt-4">
          <p className="mb-2 text-base">Status</p>
          <Select
            defaultValue={status}
            style={{ width: "100%" }}
            onChange={(value) => setStatus(value)}
            options={[
              { value: 0, label: "Deactive" },
              { value: 1, label: "Active" },
            ]}
          />
        </div>
        <div className="flex gap-4">
          <Button
            onClick={onCancel}
            className="mt-8 mb-2 w-full h-12 bg-white rounded-2xl text-sm text-black font-bold"
          >
            Cancel
          </Button>
          <Button
            onClick={onAddApp}
            className="mt-8 mb-2 w-full h-12 bg-main rounded-2xl text-sm text-white font-bold"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddApp;
