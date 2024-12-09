import React from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

// Dummy components for each screen
const Dashboard = () => <div>Dashboard Screen</div>;
const Client = () => <div>Client Screen</div>;
const ServiceProvider = () => <div>Service Provider Screen</div>;
const Settings = () => <div>Settings Screen</div>;
const Logout = () => <div>Logout Screen</div>;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const items = [
    { key: '1', icon: <VideoCameraOutlined />, label: 'Dashboard', path: '/' },
    { key: '2', icon: <UserOutlined />, label: 'Client', path: '/client' },
    { key: '3', icon: <UploadOutlined />, label: 'Service Provider', path: '/service-provider' },
    { key: '4', icon: <UserOutlined />, label: 'Settings', path: '/settings' },
    { key: '5', icon: <LogoutOutlined />, label: 'Logout', path: '/logout' },
  ];

  return (
    <Layout>
      <Sider
        style={{
          height: '100vh',
        }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        {/* Menu with click navigation */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: item.label,
            onClick: () => navigate(item.path),
          }))}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/client" element={<Client />} />
              <Route path="/service-provider" element={<ServiceProvider />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
