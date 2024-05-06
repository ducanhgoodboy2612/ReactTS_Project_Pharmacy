import { Button, DatePicker, Flex, Form, Input, Modal, Select, Upload, UploadProps } from "antd";
import { useEffect, useState } from "react";
import { apiCreate, apiGetById, apiUpdate } from "../services/user.services";
import { UploadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 5 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const UserModel = (props: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const [form] = Form.useForm();
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleOk = () => {
    form
      .validateFields()
      .then(async (values: any) => {
        const dataPost = {
          ...values,
        };
        if (dataPost.user_id) {
          await apiUpdate(dataPost);
          props.fetchData();
          setIsModalOpen(false);
          props.handleCancel();
          alert("Cập nhật người dùng thành công!");
        } else {
          await apiCreate(dataPost);
          props.fetchData();
          setIsModalOpen(false);
          props.handleCancel();
          alert("Thêm người dùng thành công!");
        }
      })
      .catch(() => {
        alert("Thông tin người dùng chưa đủ!");
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    props.handleCancel();
  };

  const fetchData = async (id: any) => {
    let data = await apiGetById(id);
    form.setFieldsValue(data);
    const date = dayjs(data?.ngaysinh).isValid()
      ? dayjs(data?.ngaysinh)
      : null;
    form.setFieldValue("ngaysinh", date);
  };

  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const upload_props: UploadProps = {
    name: 'file',
    action: 'http://localhost:52872/api/Users/upload',
    headers: {
      authorization: "Bearer " + user.token,
    },
    onChange(info) {
      if (info.file.status === 'done') {
        form.setFieldValue("image_url", info.fileList[0].response.filePath);
      }  
    },
  };

  useEffect(() => {
    form.resetFields();
    if (props.userid !== "") {
      fetchData(props.userid);
    }
    showModal();
  }, []);

  return (
    <>
      <Modal
        title="Thông tin người dùng"
        open={isModalOpen}
        cancelText={"Hủy bỏ"}
        okText={"Lưu lại"}
        width={"60vw"}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(child) => {
          return (
            <>
              <hr
                style={{
                  color: "#F8F3F3",
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              />
              <Flex justify={"flex-end"} align="center" gap={8}>
                {child}
              </Flex>
            </>
          );
        }}
      >
        <Form
          {...formItemLayout}
          form={form}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          style={{ maxWidth: "100%" }}
          scrollToFirstError
        >
          <Form.Item
            style={{ visibility: "hidden" }}
            name="user_id"
            label="Mã người dùng"
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="hoten"
            label="Họ và tên"
            rules={[
              {
                required: true,
                message: "Họ và tên không được để trống!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="gioitinh"
            label="Giới tính"
            rules={[
              { required: true, message: "Giới tính không được để trống!" },
            ]}
          >
            <Select placeholder="Lựa chọn giới tính">
              <Option value="Nam">Nam</Option>
              <Option value="Nữ">Nữ</Option>
              <Option value="Không xác định">Không xác định</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="ngaysinh"
            label="Ngày sinh"
            rules={[
              { required: true, message: "Ngày sinh không được để trống!" },
            ]}
          >
            <DatePicker format={{ format: "DD/MM/YYYY", type: "mask" }} />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "Sai định dạng địa chỉ email!",
              },
              {
                required: true,
                message: "Địa chỉ email không được để trống!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="taikhoan"
            label="Tài khoản"
            rules={[
              {
                required: true,
                message: "Tài khoản không được để trống!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Mật khẩu không được để trống!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Hãy nhập lại mật khẩu!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Mật khẩu nhập lại không khớp!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="diachi" label="Địa chỉ">
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>

          <Form.Item label="Ảnh đại diện" name="image_url">
            <Upload {...upload_props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>

        </Form.Item>
         
        </Form>
      </Modal>
    </>
  );
};
export default UserModel;
