import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, DatePicker, Flex, Table } from "antd";
import { Product_GetTopSales } from "../services/product.services";
import Product_SaleReport_Type from "../models/Product_SaleReport";
import { ColumnsType, TableProps } from "antd/es/table";
import { SorterResult } from "antd/es/table/interface";
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

const Product_Statistics: React.FC = () => {
    const [data, setData] = useState<Product_SaleReport_Type[]>();
    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10,
            total: 0,
        },
        startDate: dayjs().toISOString(),
        endDate: dayjs().toISOString(),
    });

    const fetchData = async () => {
        setLoading(true);
        try {
            const params = {
                ...tableParams,
                page: tableParams.pagination.current,
                pageSize: tableParams.pagination.pageSize, // Thêm trường 'pageSize' vào dữ liệu truyền vào
            };
            const results = await Product_GetTopSales(params);
            setData(results.data);
            setTableParams({
                ...tableParams,
                pagination: {
                    ...tableParams.pagination,
                    total: results.totalItems,
                },
            });
        } catch (error) {
            console.error("Lỗi khi gọi API:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDateChange = (dates: any, dateStrings: [string, string]) => {
        const [start, end] = dates;
        setTableParams({
            ...tableParams,
            startDate: start?.toISOString(),
            endDate: end?.toISOString(),
        });
    };

    const handleTableChange: TableProps<Product_SaleReport_Type>["onChange"] = (
        pagination,
        filters,
        sorter
    ) => {
        if (pagination.current && pagination.pageSize) {
            setTableParams({
                ...tableParams,
                pagination: {
                    ...tableParams.pagination,
                    current: pagination.current!,
                },
            });
        }
    };

    const columns: ColumnsType<Product_SaleReport_Type> = [
        {
            title: "Mã thuốc",
            dataIndex: "product_Id",
        },
        {
            title: "Hình ảnh",
            dataIndex: "picture",
            render: (_, record) => <img src={record.picture} alt="Product" style={{ maxWidth: "110px", maxHeight: "100px" }} />,
        },
        {
            title: "Tên thuốc",
            dataIndex: "product_Name",
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
        },
        {
            title: "Số lượng bán",
            dataIndex: "totalQuantitySold",
        },
    ];

    return (
        <>
            <Flex justify="space-between" align="center">
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item>Thống kê sách bán chạy</Breadcrumb.Item>
                </Breadcrumb>
                <RangePicker onChange={handleDateChange} defaultValue={[dayjs(), dayjs()]} />
                <Button type="primary" onClick={fetchData}>
                    Thống kê
                </Button>
            </Flex>

            <Table
                columns={columns}
                rowKey={(record) => record.product_Id}
                dataSource={data}
                pagination={tableParams.pagination}
                loading={loading}
                onChange={handleTableChange}
            />
        </>
    );
};

export default Product_Statistics;
