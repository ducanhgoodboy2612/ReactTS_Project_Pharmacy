import React, {  useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Layout, Menu, theme, Image, Flex } from "antd";
import { Link, Outlet } from "react-router-dom";
// import logo from "../assets/images/utehy.jpg";
import logo from "../assets/images/logo3.png";
import InfoUser from "./InfoUer";
import { HOME_PATH, USER_PATH, AD_PRODUCT_PATH, AD_EMP_PATH, AD_INVOICE_PATH, PRODUCT_REPORT } from "../urls";
const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to={HOME_PATH} style={{ color: "black" }}>Dashboard</Link>, "1", <FileOutlined />),
  // getItem(
  //   <Link to={HOME_PATH}>Quản lý danh mục</Link>,
  //   "2",
  //   <PieChartOutlined />
  // ),
  // getItem(
  //   <Link to={HOME_PATH}>Quản lý sản phẩm</Link>,
  //   "3",
  //   <DesktopOutlined />
  // ),
  getItem(
    <Link to={HOME_PATH} style={{ color: "black" }}>Quản lý</Link>,
    "sub1",
    <UserOutlined />,
    [
      getItem(<Link to={AD_PRODUCT_PATH}>Danh mục</Link>, "4"),
      getItem(<Link to={AD_PRODUCT_PATH}>Sản phẩm</Link>, "5"),
      getItem(<Link to={AD_EMP_PATH}>Nhân viên</Link>, "6"),
      getItem(<Link to={AD_INVOICE_PATH}>Hóa đơn bán</Link>, "7"),
    ]
  ),
  getItem(
    <Link to={HOME_PATH} style={{ color: "black" }}>Thông kê báo cáo</Link>,
    "sub2",
    <TeamOutlined />,
    [
      getItem(<Link to={PRODUCT_REPORT}>Sản phẩm bán chạy</Link>, "7"),
      getItem(<Link to={HOME_PATH}>Sản phẩm có nhiều lượt xem</Link>, "8"),
    ]
  ),
  getItem(
    <Link to={USER_PATH}>Quản lý người dùng</Link>,
    "9",
    <FileOutlined />
  ),
];

interface Props {
  children?: React.ReactNode;
}

export default function AppLayout({ children }: Props): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        className="custom-menu"
        style={{ background: "#9AD0C2" }}

        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" style={{ textAlign: "center" }}>
          <Image
            style={{
              width: collapsed ? "50px" : "100px",
              height: collapsed ? "40px" : "90px",
              borderRadius: "50%",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            src={logo}
            preview={false}
          ></Image>
        </div>
        <Menu
          // theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          style={{ background: "#9AD0C2" }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "white" }}>
          <Flex justify="space-between" align="center">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />

            
            
            <InfoUser />
          </Flex>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Outlet />
          {children}
        </Content>
        
      </Layout>
    </Layout>
  );
};
