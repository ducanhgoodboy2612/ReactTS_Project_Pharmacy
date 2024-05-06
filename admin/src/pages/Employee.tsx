import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Flex, Table } from "antd";
import { EmpSearch, EmpGetById } from "../services/emp.services";
import { ColumnsType, TableProps } from "antd/es/table";
import { TableParams } from "../models/config.model";

import EmployeeType from "../models/employee.model";

import EmpModel from "../components/Employee/EmpModel";
import EmpDelete from "../components/Employee/EmpDelete";
import moment from "moment";

const Employee: React.FC = () => {
    const [empid, setEmpid] = useState(0);
    const [isOpenModel, setIsOpenModel] = useState(false);
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [data, setData] = useState<EmployeeType[]>();
    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState<TableParams>({
        pagination: {
            current: 1,
            pageSize: 5,
        },
    });

    const fetchData = async () => {
        setLoading(true);
        let results = await EmpSearch({
            page: tableParams.pagination?.current,
            pageSize: tableParams.pagination?.pageSize,
        });
        // let results = await ProductGetById(2);
        // alert(JSON.stringify(results));
        setData(results.data);
        setLoading(false);
        setTableParams({
            ...tableParams,
            pagination: {
                ...tableParams.pagination,
                total: results.totalItems,
            },
        });
    };

    const columns: ColumnsType<EmployeeType> = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "Họ và Tên",
            dataIndex: "name",
        },
       
        {
            title: "Giới Tính",
            dataIndex: "gender",
            render: (text) => (text === 1 ? 'Nam' : 'Nữ'),
        },
        {
            title: "Năm Sinh",
            dataIndex: "yoB",
            width: "100px",
        },
        {
            title: "Địa Chỉ",
            dataIndex: "address",
        },
        {
            title: "Số Điện Thoại",
            dataIndex: "phone",
        },
        {
            title: "Lương",
            dataIndex: "salary",
            width: "100px",
        },
       
        // {
        //     title: "Ngày Tạo",
        //     dataIndex: "CreatedDay",
        //     render: (_, record) => (<span>{moment(record.CreatedDay).format("DD-MM-YYYY")}</span>)
        // },
        {
            title: "Hạnh động",
            width: "120px",
            render: (_, record) => (
                <Flex justify="center" >
                    <Button
                        onClick={() => {
                            setIsOpenModel(true);
                            setEmpid(record.id);
                        }}
                    >
                        Sửa
                    </Button>
                    <Button style={{ marginLeft: '5px' }}
                        onClick={() => {
                            setIsOpenDelete(true);
                            setEmpid(record.id);

                        }}
                    >
                        Xóa
                    </Button>
                </Flex>
            ),
        },
    ];

    useEffect(() => {
        fetchData();
    }, [JSON.stringify(tableParams)]);

    const handleTableChange: TableProps["onChange"] = (
        pagination,
        filters,
        sorter
    ) => {
        setTableParams({
            pagination,
            filters,
            ...sorter,
        });
        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
            setData([]);
        }
    };

    const handleCancelModel = () => {
        setIsOpenModel(false);
    };

    const handleCancelDelete = () => {
        setIsOpenDelete(false);
    };

    return (
        <>
            <Flex justify="space-between" align="center">
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item>Quản lý nhân viên</Breadcrumb.Item>
                </Breadcrumb>
                <Button type="primary" onClick={() => {
                    setIsOpenModel(true);
                    setEmpid(0);
                }}>
                    Thêm mới
                </Button>
            </Flex>

            <Table
                columns={columns}
                rowKey={(record) => record.id}
                dataSource={data}
                pagination={tableParams.pagination}
                loading={loading}
                onChange={handleTableChange}
            />
            {isOpenModel ? (
                <EmpModel fetchData={fetchData} handleCancel={handleCancelModel} empid={empid} />
            ) : (
                <></>
            )}
            {isOpenDelete ? (
                <>

                    <EmpDelete fetchData={fetchData} handleCancelDelete={handleCancelDelete} empid={empid} />
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default Employee;
