import React, { useState, useEffect } from 'react';
import { Button, Menu, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { DesktopOutlined, LineChartOutlined, CoffeeOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/pnyx_logo.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="medium" />
        <h1 className="logo"><Link to="/">Pnyx</Link></h1>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
      </div>
      {activeMenu && (
      <Menu theme="dark">
        <Menu.Item icon={<DesktopOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptos</Link>
        </Menu.Item>
        <Menu.Item icon={<LineChartOutlined />}>
          <Link to="/exchanges">Top Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<CoffeeOutlined />}>
          <Link to="/news">Latest News</Link>
        </Menu.Item>
      </Menu>
      )}
    </div>
  );
};

export default Navbar;
