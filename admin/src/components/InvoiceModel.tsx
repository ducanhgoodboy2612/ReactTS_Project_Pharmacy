import { Button, DatePicker, Flex, Form, Input, Modal, Select, Upload, UploadProps, InputNumber } from "antd";
import { useEffect, useState } from "react";
import { InvoiceGetById, getInvoiceDetail } from "../services/invoice.services";
import { ProductGetById } from "../services/product.services";
import { UploadOutlined } from "@ant-design/icons";
import { TableParams } from "../models/config.model";
import SalesInvoiceType from "../models/sales_invoice.model";
import { ColumnsType, TableProps } from "antd/es/table";
import InvoiceDetailType from "../models/invoice_detail.model";
import { Breadcrumb, Table } from "antd";
import dayjs from "dayjs";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
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

const InvoiceModel = (props: any) => {
    const [file, setFile] = useState<File | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataDetail, setDataDetail] = useState<InvoiceDetailType[]>();
    const [loading, setLoading] = useState(false);
    const [brands, setBrands] = useState<any[]>([]);
    const [selectedBrand, setSelectedBrand] = useState<string>("");
    const [categories, setCategories] = useState<any[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>(""); // State lưu giá trị được chọn của danh mục
    const [tableParams, setTableParams] = useState<TableParams>({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });
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

    const fetchDetailData = async (id: any) => {
        setLoading(true);
        let idAsNumber = Number(id);
        
        let results = await getInvoiceDetail(idAsNumber);
        //alert(JSON.stringify(results));
        if(results) {

            const detailWithProductNames = await Promise.all(results.map(async (detailItem:any) => {
                const productData = await ProductGetById(detailItem.product_Id);
                return {
                    ...detailItem,
                    product_Name: productData?.product_Name || '', // Set a default value if productData is null
                };
            }));
            //alert(JSON.stringify(detailWithProductNames));
            setDataDetail(detailWithProductNames);
            setTableParams({
                ...tableParams,
                pagination: {
                    ...tableParams.pagination,
                    total: results.totalItems,
                },
            });
        }
        setLoading(false);
        // setTableParams({
        //     ...tableParams,
        //     pagination: {
        //         ...tableParams.pagination,
        //         total: results.totalItems,
        //     },
        // });
    };


    const handleOk = () => {
        form
            .validateFields()
            .then(async (values: any) => {
                const dataPost = {
                    ...values,
                };
                // if (file) {
                //     await ImgUpload(file);
                // }
                if (dataPost.product_Id) {
                    //await ProductUpdate(dataPost);
                    props.fetchData();
                    setIsModalOpen(false);
                    props.handleCancel();
                    alert("Cập nhật thành công!");
                } else {
                    //await ProductCreate(dataPost);
                    props.fetchData();
                    setIsModalOpen(false);
                    props.handleCancel();
                    alert("Thêm sản phẩm thành công!");
                }
            })
            .catch(() => {
                alert("Thông tin sản phẩm chưa đủ!");
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
        let data = await InvoiceGetById(idAsNumber);


        form.setFieldsValue(data);
       
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
                // alert("done");
                // alert(user.token);
                form.setFieldValue("picture", info.fileList[0].response.filePath);
            }
        },
    };

    useEffect(() => {
        form.resetFields();
        if (props.invoice_id !== "") {
            fetchData(props.invoice_id);
            fetchDetailData(props.invoice_id);
        }
        showModal();
    }, []);

    const columns: ColumnsType<InvoiceDetailType> = [
        {
            title: "ID",
            dataIndex: "invoiceID",
        },
        {
            title: "Mã Sản Phẩm",
            dataIndex: "product_Id",
        },
        {
            title: "Tên Sản Phẩm",
            dataIndex: "product_Name",
        },
        {
            title: "Số Lượng",
            dataIndex: "quantity",
        },
        {
            title: "Tổng Giá",
            dataIndex: "total_Price",
        },
        
    ];


    // useEffect(() => {
    //     const fetchCategories = async () => {
    //         try {
    //             const categoriesData = await getMenus();
    //             setCategories(categoriesData);
    //         } catch (error) {
    //             console.error("Error fetching categories:", error);
    //         }
    //     };

    //     fetchCategories();
    // }, []);

    // useEffect(() => {
    //     const fetchBrand = async () => {
    //         try {
    //             const data = await getBrands();
    //             setBrands(data);
    //         } catch (error) {
    //             console.error("Error fetching brands:", error);
    //         }
    //     };

    //     fetchBrand();
    // }, []);

    return (
        <>
            <Modal
                title="Thông tin chi tiết hóa đơn"
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
                        name="invoiceID"
                        label="Mã hóa đơn"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="customerName"
                        label="Tên khách hàng"
                        rules={[
                            {
                                required: true,
                                message: "Tên khách hàng không được để trống!",
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Số điện thoại"
                        rules={[
                            {
                                required: true,
                                message: "Số điện thoại không được để trống!",
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
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
                        name="email"
                        label="Email"
                        rules={[
                            {
                                type: "email",
                                message: "Email không hợp lệ!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="status"
                        label="Trạng thái"
                    >
                        <Select>
                            <Option value={true}>Active</Option>
                            <Option value={false}>Inactive</Option>
                        </Select>
                    </Form.Item>


                    {/* <Form.Item
                        name="createdDay"
                        label="Ngày tạo"
                    >
                        <DatePicker format="DD/MM/YYYY" />
                    </Form.Item> */}
                </Form>

                <Table
                    columns={columns}
                    rowKey={(record) => record.key}
                    dataSource={dataDetail}
                    pagination={tableParams.pagination}
                    loading={loading}
                    style={{ marginLeft: '40px' }}
                    // onChange={handleTableChange}
                />

            </Modal>
        </>
    );
};
export default InvoiceModel;
