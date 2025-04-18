import { Menu } from 'antd';
import { Link } from 'umi';
import styles from './index.less';

const MainMenu = ({ menuData }) => {
  // 定义每个一级菜单项对应的二级菜单数据
  const subMenus = {
    trade: [
      // "买币" 对应的二级菜单 (示例数据)
      { key: 'spot', name: '币币交易', path: '/trade/spot' },
      { key: 'otc', name: '法币交易', path: '/trade/otc' },
    ],
    market: [
      // "行情" 对应的二级菜单 (示例数据)
      { key: 'overview', name: '行情总览', path: '/market/overview' },
      { key: 'kline', name: 'K线图', path: '/market/kline' },
    ],
    exchange: [
      // "交易" 对应的二级菜单 (示例数据)
      { key: 'basic', name: '基础交易', path: '/exchange/basic' },
      { key: 'pro', name: '专业交易', path: '/exchange/pro' },
    ],
    contract: [
      // "合约" 对应的二级菜单 (根据截图数据)
      {
        key: 'perpetual',
        name: '永续合约',
        description: '多种USDT或数字货币结算的永续合约',
      },
      {
        key: 'delivery',
        name: '交割合约',
        description: '无资金费用，按周、季度结算的交割合约',
      },
      {
        key: 'simulation',
        name: '合约模拟交易',
        description: '零风险学习合约交易',
      },
      {
        key: 'copy',
        name: '合约跟单',
        description: '跟随优秀交易员，赚取更多收益',
      },
    ],
    follow: [
      // "跟单" 对应的二级菜单 (示例数据)
      { key: 'traders', name: '交易员列表', path: '/follow/traders' },
      { key: 'myorders', name: '我的跟单', path: '/follow/myorders' },
    ],
    finance: [
      // "理财" 对应的二级菜单 (示例数据)
      { key: 'earn', name: '币生币', path: '/finance/earn' },
      { key: 'loan', name: '借贷', path: '/finance/loan' },
    ],
    more: [
      // "更多" 对应的二级菜单 (沿用之前的)
      {
        key: 'invite',
        name: '好友邀请',
        description: '邀请好友，赚取收益',
      },
      {
        key: 'welfare',
        name: '福利中心',
        description: '轻松完成任务，领取惊喜福利',
      },
      {
        key: 'payment',
        name: '支付',
        description: '数字货币收付款',
      },
      {
        key: 'live',
        name: '直播',
        description: '最新行情分析放送',
      },
      {
        key: 'vip',
        name: 'VIP服务',
        description: '成为会员享受更高交易折扣',
      },
      {
        key: 'startup',
        name: 'Startup',
        description: '发掘潜力新币，寻找优质项目',
      },
      {
        key: 'academy',
        name: 'Hotcoin学院',
        description: '在学院中学习与成长',
      },
      {
        key: 'nft',
        name: 'NFT',
        description: '探索IGO和NFT交易市场',
      },
      {
        key: 'research',
        name: '研究院',
        description: '市场热点和行业洞察',
      },
      {
        key: 'support',
        name: '帮助中心',
        description: '查找常见问题说明',
      },
      {
        key: 'announcement',
        name: '公告中心',
        description: 'Hotcoin最新动态',
      },
    ],
  };
  const menuItems = menuData.map((item) => {
    const subMenuData = subMenus[item.key];
    if (subMenuData && subMenuData.length > 0) {
      const subMenuItems = subMenuData.map((subItem) => ({
        key: subItem.key,
        label: subItem.label,
      }));
      return {
        key: item.key,
        label: (
          <a href="#" onClick={(e) => e.preventDefault()} className={styles.primaryMenuItem}>
            {item.name}
          </a>
        ),
        children: subMenuItems,
      };
    } else {
      return {
        key: item.key,
        label: <Link to={item.path}>{item.name}</Link>,
      };
    }
  });
  return <Menu mode="horizontal" items={menuItems} />;
};

export default MainMenu;
