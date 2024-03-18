import { Input, Modal, Select, message } from "antd";
import { useState } from "react";
import "./styles.css";
import { api } from "../../provider/api";
import { API_URL } from "../../config";

const EditModal = ({ openEdit, handleCancel, item, setCheckSuceess }) => {
  const [name, setName] = useState(item?.name || "");
  const [status, setStatus] = useState(item?.stauts || 0);
  const [rank, setRank] = useState(item?.rank || "A");

  const handleEdit = async () => {
    if (item?.app_id) {
      try {
        const payload = {
          name,
          status,
          rank,
        };
        const res = await api.post(
          `${API_URL}/app/update/${item?.app_id}`,
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
        <p className="mb-2 text-base">Name</p>
        <Input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <p className="mb-2 text-base">Status</p>
        <Select
          defaultValue={status}
          style={{ width: 120 }}
          onChange={(value) => setStatus(value)}
          options={[
            { value: 0, label: "Deactive" },
            { value: 1, label: "Active" },
          ]}
        />
      </div>
      <div className="mt-4">
        <p className="mb-2 text-base">Rank</p>
        <Select
          defaultValue={rank}
          style={{ width: 120 }}
          onChange={(value) => setRank(value)}
          options={[
            { value: "A", label: "A" },
            { value: "B", label: "B" },
            { value: "C", label: "C" },
            { value: "D", label: "D" },
          ]}
        />
      </div>
    </Modal>
  );
};

export default EditModal;
