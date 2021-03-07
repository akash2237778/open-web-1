import React from 'react';

import 'antd/dist/antd.css';
import './index.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          GSoc - 2021
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Projects">
          <Menu.ItemGroup title="App Dev">
            <Menu.Item key="setting:1">OPEN Mobile</Menu.Item>
            <Menu.Item key="setting:2">Auto Infirmary</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Web Dev">
            <Menu.Item key="setting:3">OPEN Certification</Menu.Item>
            <Menu.Item key="setting:4">OPEN Blog</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Contact Us
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById('container'));
export default App;