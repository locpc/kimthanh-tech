import { Input, Modal, Select, message } from "antd";
import { useState } from "react";
import "./styles.css";
import { api } from "../../provider/api";
import { API_URL } from "../../config";

const EditModal = ({ openEdit, handleCancel, item, setCheckSuceess }) => {
  // const [name, setName] = useState(item?.name || "");
  const [appID, setAppID] = useState(item?.app_id || "");
  const [appName, setAppName] = useState(item?.app_name || "");
  const [packageName, setPackageName] = useState(item?.package_name || "");
  const [vps, setVps] = useState(item?.vps_ip || "");
  const [status, setStatus] = useState(item?.status);
  const [rank, setRank] = useState(item?.rank || "A");
  const [orderNum, setOrderNum] = useState(item?.order_num);

  const handleEdit = async () => {
    if (item?.id) {
      try {
        const payload = {
          app_id: appID,
          app_name: appName,
          package_name: packageName,
          vps_ip: vps,
          status,
          rank,
          order_num: orderNum
        };
        const res = await api.post(
          `${API_URL}/app/update/${item?.id}`,
          payload
        );
        if (res && res?.data) {
          message.success("Chỉnh sửa thành công");
          setCheckSuceess(new Date().getTime());
          handleCancel();
        }
      } catch (error) {
        message.error(error?.message || error);
      }
    } else {
      message.error("Ứng dụng không tồn tại");
    }
  };

  return (
    <Modal
      title="Chỉnh sửa"
      open={openEdit}
      onOk={handleEdit}
      onCancel={handleCancel}
    >
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
      <div className="mt-4">
        <p className="mb-2 text-base">Order</p>
        <Input
          value={orderNum}
          type="number"
          style={{ width: "100%" }}
          onChange={(e) => setOrderNum(e.target.value)}
        />
      </div>
    </Modal>
  );
};

export default EditModal;
