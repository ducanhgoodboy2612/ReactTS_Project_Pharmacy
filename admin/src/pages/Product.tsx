import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Flex, Table } from "antd";
import { ProductSearch, ProductGetById } from "../services/product.services";
import { ColumnsType, TableProps } from "antd/es/table";
import { TableParams } from "../models/config.model";
import { useNavigate } from 'react-router-dom';
import ProductType from "../models/product.model";
import { searchTermState } from "../constant/recoil";
import { useRecoilState } from "recoil";

import UserModel from "../components/UserModel";
import ProductModel from "../components/Product/ProductModel";
import ProductDelete from "../components/Product/ProductDelete";
import moment from "moment";

const Product: React.FC = () => {
    const [prodid, setProid] = useState(0);
    const [isOpenModel, setIsOpenModel] = useState(false);
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [data, setData] = useState<ProductType[]>();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);
    const [tableParams, setTableParams] = useState<TableParams>({
        pagination: {
            current: 1,
            pageSize: 5,
        },
    });

    const fetchData = async () => {
        setLoading(true);
        let results = await ProductSearch({
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

    const columns: ColumnsType<ProductType> = [
        {
            title: "ID",
            dataIndex: "product_Id",
        },
        {
            title: "Hình Ảnh",
            dataIndex: "picture",
            render: (_, record) => <img src={record.picture} alt="Product" style={{ maxWidth: "110px", maxHeight: "100px" }} />,
        },
        {
            title: "Tên Sản Phẩm",
            dataIndex: "product_Name",
        },
        {
            title: "Đơn Vị",
            dataIndex: "unit",
        },
        {
            title: "Đơn Giá",
            dataIndex: "unit_Price",
            width: "100px",
        },
        {
            title: "SL",
            dataIndex: "quantity_In_Stock",
            width: "100px",
        },
        
        {
            title: "Trạng Thái",
            dataIndex: "status",
        },
        {
            title: "Mô Tả",
            dataIndex: "description",
        },
        // {
        //     title: "Ngày Tạo",
        //     dataIndex: "CreatedDay",
        //     render: (_, record) => (<span>{moment(record.CreatedDay).format("DD-MM-YYYY")}</span>)
        // },
        {
            title: "Hành động",
            width: "120px",
            render: (_, record) => (
                <Flex justify="center" >
                    <Button
                        onClick={() => {
                            setIsOpenModel(true);
                            setProid(record.product_Id);
                        }}
                    >
                        Sửa
                    </Button>
                    <Button style={{ marginLeft: '5px' }}
                        onClick={() => {
                            setIsOpenDelete(true);
                            setProid(record.product_Id);

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

        setSearchTerm(e.target.find.value);
        navigate('/admin/product/search');
    };

    return (
        <>
            <Flex justify="space-between" align="center">
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item>Quản lý sản phẩm</Breadcrumb.Item>
                </Breadcrumb>
                <Button type="primary" onClick={() => {
                    setIsOpenModel(true);
                    setProid(0);
                }}>
                    Thêm mới
                </Button>
            </Flex>

            <div style={{ width: "100%", height: '100px' }}>
                <div>
                    <form onSubmit={handleSearch}>
                        <input
                            
                            type="text"
                            name="find"
                            placeholder="Tìm kiếm sp ..."
                            style={{height: '40px', lineHeight: '40px', marginLeft: '30px', width: '240px'}}
                        />
                        <button  type="submit" style={{ height: '40px', backgroundColor: '#4096FF', color: 'white'}}>
                            <i className="fas fa-search" /> Search
                        </button>
                    </form>
                </div>
            </div>

            <Table
                columns={columns}
                rowKey={(record) => record.product_Id}
                dataSource={data}
                pagination={tableParams.pagination}
                loading={loading}
                onChange={handleTableChange}
            />
            {isOpenModel ? (
                <ProductModel fetchData={fetchData} handleCancel={handleCancelModel} prodid={prodid} />
            ) : (
                <></>
            )}
            {isOpenDelete ? (
                <>
                    
                    <ProductDelete fetchData={fetchData} handleCancelDelete={handleCancelDelete} prodid={prodid} />
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default Product;
