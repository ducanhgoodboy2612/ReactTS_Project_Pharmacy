import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Breadcrumb, Button, DatePicker, Flex, Table } from "antd";
// import { ProductSearch, ProductGetById } from "../services/product.services";
import { ColumnsType, TableProps } from "antd/es/table";
import { TableParams } from "../models/config.model";
import { InvoiceSearch } from "../services/invoice.services";
import SalesInvoiceType from "../models/sales_invoice.model";
import InvoiceDetailType from "../models/invoice_detail.model";
import { searchParamsState } from "../constant/recoil";
import UserModel from "../components/UserModel";
import InvoiceModel from "../components/InvoiceModel";
import InvoiceDelete from "../components/InvoiceDelete";
import moment from "moment";
import { useNavigate } from 'react-router-dom';

import dayjs from 'dayjs';

interface SearchParams {
    startDate: string;
    endDate: string;
    phone: string;
}

const { RangePicker } = DatePicker;
const Invoice: React.FC = () => {
    const [invoice_id, setInvoice_id] = useState(0);
    const [isOpenModel, setIsOpenModel] = useState(false);
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [data, setData] = useState<SalesInvoiceType[]>();
    const [searchParams, setSearchParams] = useRecoilState(searchParamsState);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState<TableParams>({
        pagination: {
            current: 1,
            pageSize: 10,
        },
        
    });
    // const [searchParams, setSearchParams] = useState<SearchParams>({
    //     startDate: dayjs().toISOString(),
    //     endDate: dayjs().toISOString(),
    //     phone: '0000'

    // });

    const fetchData = async () => {
        setLoading(true);
        let results = await InvoiceSearch({
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

    const columns: ColumnsType<SalesInvoiceType> = [
        {
            title: "ID",
            dataIndex: "invoiceID",
        },
        {
            title: "Tên Khách Hàng",
            dataIndex: "customerName",
        },
        {
            title: "Số Điện Thoại",
            dataIndex: "phone",
        },
        {
            title: "Địa Chỉ",
            dataIndex: "address",
        },
        {
            title: "Ngày Tạo",
            dataIndex: "createdDate",
            render: (date: Date | null) => (date ? new Date(date).toLocaleDateString() : "-"),
        },
        {
            title: "Trạng Thái",
            dataIndex: "status",
            render: (status: boolean | null) => (status ? "Đã Thanh Toán" : "Chưa Thanh Toán"),
        },
        {
            title: "Hành động",
            width: "120px",
            render: (_, record) => (
                <Flex justify="center" >
                    <Button
                        onClick={() => {
                            setIsOpenModel(true);
                            setInvoice_id(record.invoiceID);
                        }}
                    >
                        Chi tiết
                    </Button>
                    <Button style={{ marginLeft: '5px' }}
                        onClick={() => {
                            setIsOpenDelete(true);
                            setInvoice_id(record.invoiceID);

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

    const handleSearch = (e: any) => {
        e.preventDefault();

        const newSearchParams = { ...searchParams, phone: e.target.find.value };
        setSearchParams(newSearchParams);
        
        navigate('/admin/invoice/search');
    };

    const handleDateChange = (dates: any, dateStrings: [string, string]) => {
        const [start, end] = dates;
        setSearchParams({
            ...searchParams,
            startDate: start?.toISOString(),
            endDate: end?.toISOString(),
        });
    };

    return (
        <>
            <Flex justify="space-between" align="center">
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item>Quản lý hóa đơn</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ width: "60%", height: '100px', paddingTop: 30 }}>
                    <div>
                        <form onSubmit={handleSearch}>
                            <RangePicker onChange={handleDateChange} defaultValue={[dayjs(), dayjs()]} />
                            <input

                                type="text"
                                name="find"
                                placeholder="Tìm kiếm sp ..."
                                style={{ height: '40px', lineHeight: '40px', marginLeft: '30px', width: '240px' }}
                            />


                            <button type="submit" style={{ height: '40px', backgroundColor: '#4096FF', color: 'white' }}>
                                <i className="fas fa-search" /> Search
                            </button>
                        </form>
                    </div>
                </div>
            </Flex>

            <Table
                columns={columns}
                rowKey={(record) => record.invoiceID}
                dataSource={data}
                pagination={tableParams.pagination}
                loading={loading}
                onChange={handleTableChange}
            />
            {isOpenModel ? (
                <InvoiceModel fetchData={fetchData} handleCancel={handleCancelModel} invoice_id={invoice_id} />
            ) : (
                <></>
            )}
            {isOpenDelete ? (
                <>

                    <InvoiceDelete fetchData={fetchData} handleCancelDelete={handleCancelDelete} invoice_id={invoice_id} />
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default Invoice;
