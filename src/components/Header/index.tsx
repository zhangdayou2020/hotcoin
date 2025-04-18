import { Layout } from 'antd';
// import Logo from './Logo';
import MainMenu from './mainMenu';
// import UserActions from './UserActions';
// // import SearchInput from './SearchInput';
// // import NotificationCenter from './NotificationCenter';
import styles from './index.less';

const { Header: AntdHeader } = Layout;

const Header = () => {
  // 假设菜单数据
  const menuData = [
    { key: 'trade', name: '买币', path: '/trade' },
    { key: 'market', name: '行情', path: '/market' },
    { key: 'exchange', name: '交易', path: '/exchange' },
    { key: 'contract', name: '合约', path: '/contract' },
    { key: 'follow', name: '跟单', path: '/follow' },
    { key: 'finance', name: '理财', path: '/finance' },
    { key: 'more', name: '更多' },
  ];

  // 假设用户信息
  const userInfo = {
    isLoggedIn: false, // 或者从 Context/状态管理中获取
    username: 'Guest',
  };

  // 处理登录/注册逻辑
  const handleLogin = () => {
    console.log('去登录');
    // ... 实现登录逻辑
  };

  const handleLogout = () => {
    console.log('登出');
    // ... 实现登出逻辑
  };

  return (
    <AntdHeader className={styles.header}>
      <div className={styles.left}>
        <div className={styles.iconHotCoin}>HotCoin</div>
        {/* {/* <Logo title="你的应用名称" logoUrl="/logo.png" /> */}
        <MainMenu menuData={menuData} />
      </div>
      <div className={styles.right}>
        {/* <SearchInput onSearch={handleSearch} /> */}
        {/* <NotificationCenter notifications={notifications} /> */}
        {/* <UserActions userInfo={userInfo} onLogin={handleLogin} onLogout={handleLogout} /> */}
      </div>
    </AntdHeader>
  );
};

export default Header;
