import styles from './index.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react';

import router from 'umi/router';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class BasicLayout extends React.Component{

  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  route = ({key}) => {
    router.push(key)
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          theme={'light'}
          style={{boxShadow: '2px 0 8px 0 rgba(29,35,41,.05)'}}
          width={256}
          breakpoint="lg"
        >
          <div className={styles.logo}>
            <img src='https://front10.com/landing-page-book/static/logoMainBLACK.13d568a9.png' style={{width: 30}}/> Solidarity Computing
          </div>
          <Menu defaultSelectedKeys={['1']} mode="inline" style={{borderRight: 0}} onClick={this.route}>
            <Menu.Item key="/hosts">
              <Icon type="desktop"/>
              <span>我的主机</span>
            </Menu.Item>
            <Menu.Item key="/apps">
              <Icon type="appstore"/>
              <span>我的应用</span>
            </Menu.Item>
            <Menu.Item key="/settings">
              <Icon type="user"/>
              <span>个人中心</span>
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0, boxShadow: '0 1px 4px rgba(0,21,41,.08)'}}/>
          <Content style={{ margin: '16px 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Solidarity Computing ©2018 Created by KFCoding
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
