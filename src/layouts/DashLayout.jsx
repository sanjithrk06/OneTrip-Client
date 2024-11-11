import React, { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  AppstoreOutlined,
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
  FileTextOutlined,
  TeamOutlined,
  EnvironmentOutlined,
  SearchOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Avatar, Space, Row, Col, Input } from "antd";

const { Header, Content, Footer, Sider } = Layout;

// Define menu items with routes
const items = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <HomeOutlined />,
    path: "/dashboard",
  },
  {
    key: "places",
    label: "Destinations",
    icon: <EnvironmentOutlined />,
    children: [
      {
        key: "destinations",
        label: "Destination",
        path: "/dashboard/destinations",
      },
    ],
  },
  {
    key: "management",
    label: "Management",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "users",
        label: "Users",
        icon: <UserOutlined />,
        path: "/dashboard/users",
      },
      {
        key: "teams",
        label: "Teams",
        icon: <TeamOutlined />,
        path: "/dashboard/teams",
      },
      {
        key: "reports",
        label: "Reports",
        icon: <FileTextOutlined />,
        children: [
          {
            key: "daily",
            label: "Daily Reports",
            path: "/dashboard/reports/daily",
          },
          {
            key: "weekly",
            label: "Weekly Reports",
            path: "/dashboard/reports/weekly",
          },
        ],
      },
    ],
  },
  {
    key: "settings",
    label: "Settings",
    icon: <SettingOutlined />,
    children: [
      {
        key: "profile",
        label: "Profile Settings",
        path: "/dashboard/settings/profile",
      },
      {
        key: "security",
        label: "Security",
        path: "/dashboard/settings/security",
      },
      {
        key: "preferences",
        label: "Preferences",
        path: "/dashboard/settings/preferences",
      },
    ],
  },
];

// Flatten menu items to easily find paths
const flattenMenuItems = (items) => {
  let flattened = {};

  const flatten = (items) => {
    items.forEach((item) => {
      if (item.path) {
        flattened[item.key] = item.path;
      }
      if (item.children) {
        flatten(item.children);
      }
    });
  };

  flatten(items);
  return flattened;
};

const DashLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Find the current key based on path
  const findKeyByPath = (pathname) => {
    const paths = flattenMenuItems(items);
    return (
      Object.keys(paths).find((key) => paths[key] === pathname) || "dashboard"
    );
  };

  const [current, setCurrent] = useState(findKeyByPath(location.pathname));

  const onClick = (e) => {
    setCurrent(e.key);
    const paths = flattenMenuItems(items);
    if (paths[e.key]) {
      navigate(paths[e.key]);
    }
  };

  return (
    <Layout className="min-h-screen">
      <Sider
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        width="230"
        onBreakpoint={(broken) => {
          console.log("Breakpoint:", broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log("Collapse:", collapsed, type);
        }}
        className="shadow-sm"
      >
        <div className="p-4 text-center">
          <span className="text-2xl font-bold tracking-tight text-primary">
            One Trip
          </span>
        </div>
        <Menu
          theme="light"
          onClick={onClick}
          selectedKeys={[current]}
          defaultOpenKeys={[
            location.pathname.split("/")[2], // Open the current section
          ]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          className="px-4 flex items-center justify-end align-middle"
          style={{
            background: colorBgContainer,
          }}
        >
          <Row align="end">
            <Col span={8}>
              <Input placeholder="Search" prefix={<SearchOutlined />} />
            </Col>
            <Col span={16}>
              <Space
                size="large"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Avatar icon={<UserOutlined />} />
                <LogoutOutlined />
              </Space>
            </Col>
          </Row>
        </Header>
        <Content className="mx-4 my-4">
          <div
            style={{
              padding: 24,
              minHeight: 360,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer className="text-center">
          One Trip ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashLayout;
