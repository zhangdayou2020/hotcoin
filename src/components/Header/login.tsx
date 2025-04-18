
import {  Button } from 'antd';
import { SearchOutlined, DownloadOutlined, BulbOutlined } from '@ant-design/icons';
import styles from './index.less';

const HeaderRight = () => {
  return (
    <div className={styles.headerRight}>
      {/* 搜索图标 */}
      <div className={styles.icon}>
        <SearchOutlined />
      </div>

      {/* 登录按钮 */}
      <div className={styles.textButton}>
        登录
      </div>

      {/* 注册按钮 */}
      <Button type="primary" className={styles.registerButton}>
        注册
      </Button>

      {/* 下载图标 */}
      <div className={styles.icon}>
        <DownloadOutlined />
      </div>

      {/* 夜间模式切换 */}
      <div className={styles.icon}>
        <BulbOutlined />
      </div>
    </div>
  );
};

export default HeaderRight;