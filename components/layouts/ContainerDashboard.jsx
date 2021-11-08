import Head from "next/head";
import navigationList from "~/constants/navigationList";
import { siteName } from "~/constants/siteDetails";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

import styles from "./layout.module.css";
import Logo from "../elements/common/Logo";
import useCollapseDrawer from "~/hooks/useCollapseDrawer";
const { Header, Sider, Content } = Layout;

const ContainerDashBoard = ({ view, children, title, ...props }) => {
  const router = useRouter();

  const { isCollapse, handleToggleCollapse } = useCollapseDrawer();

  const handelChangePath = (path) => {
    router.push(path);
  };

  return (
    <>
      <Head>
        <title>{title || siteName + " | " + process.env.title}</title>
      </Head>
      <Layout className={styles.dashboardLayout}>
        <Sider
          trigger={null}
          collapsible
          collapsed={isCollapse}
          collapsedWidth={0}
          width={280}
          className={styles.sider}
        >
          <div className={styles.logo}>
            <Logo />
          </div>
          <Menu
            theme="dark"
            className="dashboard-navigation"
            mode="inline"
            defaultSelectedKeys={["1"]}
          >
            {navigationList.map((single) => {
              return (
                <Menu.Item
                  className={
                    router.pathname === single.path
                      ? "ant-menu-item-active ant-menu-item-selected"
                      : ""
                  }
                  onClick={() => {
                    handelChangePath(single.path);
                  }}
                  key={single.name}
                  icon={single.icon}
                >
                  {single.name}
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="client-dashboard__header">
            {isCollapse ? (
              <MenuUnfoldOutlined className={styles.collapseIcon} onClick={handleToggleCollapse} />
            ) : (
              <MenuFoldOutlined className={styles.collapseIcon} onClick={handleToggleCollapse} />
            )}
          </Header>
          <Content className="site-layout-background">
            {view == "full" ? (
              <main>{children}</main>
            ) : (
              <div id="mainContent">
                <main>{children}</main>
              </div>
            )}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default ContainerDashBoard;
