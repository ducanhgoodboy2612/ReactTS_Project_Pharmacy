import { Button, DatePicker, Flex, Form, Input, Modal, Select, Upload, UploadProps, InputNumber } from "antd";
import { useEffect, useState } from "react";
import { EmpGetById, EmpCreate, EmpUpdate } from "../../services/emp.services";
import { UploadOutlined } from "@ant-design/icons";
import { ImgUpload } from "../../services/product.services";

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

const EmpModel = (props: any) => {
    const [file, setFile] = useState<File | null>(null);
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
                if (file) {
                   await ImgUpload(file);
                }
                if (dataPost.id) {
                    await EmpUpdate(dataPost);
                    props.fetchData();
                    setIsModalOpen(false);
                    props.handleCancel();
                    alert("Cập nhật thành công!");
                } else {
                    await EmpCreate(dataPost);
                    props.fetchData();
                    setIsModalOpen(false);
                    props.handleCancel();
                    alert("Thêm nhân viên thành công!");
                }
            })
            .catch(() => {
                alert("Thông tin nhân viên chưa đủ!");
            });
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        props.handleCancel();
    };

    const fetchData = async (id: any) => {
        
        let idAsNumber = Number(id);
        // alert("id : "  + idAsNumber);
        // alert("typeof id: " + typeof (idAsNumber));
        let data = await EmpGetById(idAsNumber);
   

        form.setFieldsValue(data);
        // const date = dayjs(data?.ngaysinh).isValid()
        //     ? dayjs(data?.ngaysinh)
        //     : null;
        // form.setFieldValue("ngaysinh", date);
    };

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const upload_props: UploadProps = {
        name: 'file',
        action: 'http://localhost:41624/api/User/upload',
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
        if (props.empid !== "") {
            fetchData(props.empid);
        }
        showModal();
    }, []);

    return (
        <>
            <Modal
                title="Thông tin nhân viên"
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
                        status: 1, // Giá trị mặc định cho trạng thái sản phẩm
                        // createdDay: moment(), 
                    }}
                    style={{ maxWidth: "100%" }}
                    scrollToFirstError
                >
                    <Form.Item
                        style={{ visibility: "hidden" }}
                        name="id"
                        label="ID"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="name"
                        label="Tên nhân viên"
                        rules={[
                            {
                                required: true,
                                message: "Tên nhân viên không được để trống!",
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="gender"
                        label="Giới tính"
                        rules={[
                            {
                                required: true,
                                message: "Giới tính không được để trống!",
                            },
                        ]}
                    >
                        <Select>
                            <Option value={1}>Nam</Option>
                            <Option value={0}>Nữ</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="yoB"
                        label="Năm sinh"
                        rules={[
                            {
                                required: true,
                                message: "Năm sinh không được để trống!",
                            },
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>

                    <Form.Item
                        name="address"
                        label="Địa chỉ"
                        rules={[
                            {
                                required: true,
                                message: "Địa chỉ không được để trống!",
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Điện thoại"
                        rules={[
                            {
                                required: true,
                                message: "Điện thoại không được để trống!",
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="salary"
                        label="Lương"
                        rules={[
                            {
                                required: true,
                                message: "Lương không được để trống!",
                            },
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>

                    


                    {/* <Form.Item
                        name="createdDay"
                        label="Ngày tạo"
                    >
                        <DatePicker format="DD/MM/YYYY" />
                    </Form.Item> */}
                </Form>

            </Modal>
        </>
    );
};
export default EmpModel;
