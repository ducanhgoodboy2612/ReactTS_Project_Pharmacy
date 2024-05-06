import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Flex, Table } from "antd";
import { apiSearch } from "../services/user.services";
import UserType from "../models/user.model";
import { ColumnsType, TableProps } from "antd/es/table";
import { TableParams } from "../models/config.model";
import UserModel from "../components/UserModel";
import UserDelete from "../components/UserDelete";
import moment from "moment";

const User: React.FC = () => {
  const [userid, setUserid] = useState("");
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [data, setData] = useState<UserType[]>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 5,
    },
  });

  const fetchData = async () => {
    setLoading(true);
    let results = await apiSearch({
      page: tableParams.pagination?.current,
      pageSize: tableParams.pagination?.pageSize,
    });
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

  const columns: ColumnsType<UserType> = [
    {
      title: "Họ và tên",
      dataIndex: "hoten",
    },
    {
      title: "Ngày sinh",
      dataIndex: "ngaysinh",
      width: "200px",
      render: (_, record) => (<span>{moment(record.ngaysinh).format("DD-MM-YYYY")}</span>)
    },
    {
      title: "Giới tính",
      dataIndex: "gioitinh",
      width: "100px",
    },
    {
      title: "Địa chỉ",
      dataIndex: "diachi",
    },
    {
      title: "Hạnh động",
      width: "120px",
      render: (_, record) => (
        <Flex justify="center" >
          <Button
            onClick={() => {
              setIsOpenModel(true);
              setUserid(record.user_id);
            }}
          >
            Sửa
          </Button>  
          <Button style={{marginLeft:'5px'}}
            onClick={() => {
              setIsOpenDelete(true);
              setUserid(record.user_id);
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
          <Breadcrumb.Item>Quản lý người dùng</Breadcrumb.Item>
        </Breadcrumb>
        <Button type="primary" onClick={() => {
          setIsOpenModel(true);
          setUserid("");
        }}>
          Thêm mới
        </Button>
      </Flex>

      <Table
        columns={columns}
        rowKey={(record) => record.user_id}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
      />
      {isOpenModel ? (
        <UserModel fetchData = {fetchData} handleCancel={handleCancelModel} userid={userid} />
      ) : (
        <></>
      )}
      {isOpenDelete ? (
        <UserDelete  fetchData = {fetchData} handleCancelDelete={handleCancelDelete} userid={userid} />
      ) : (
        <></>
      )}
    </>
  );
};

export default User;
