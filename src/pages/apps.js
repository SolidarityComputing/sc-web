import styles from './apps.css';
import { List, Avatar, Button, Tag, Card, Row, Col } from 'antd';
import {FaMicrochip, FaMemory, FaLinux} from 'react-icons/fa';
import Link from 'umi/link';

const data = [
  {
    id: 1,
    title: 'app1',
    time: new Date().toDateString()
  },
  {
    id: 2,
    title: 'app2',
    time: new Date().toDateString()
  }
];

export default function() {
  return (
    <div>
      <h3>我的应用</h3>
      <div style={{textAlign: 'right'}}>
        <Link to="/apps/new"><Button type="primary" icon="plus">添加应用</Button></Link>
      </div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item actions={[<a>查看</a>, <a>绑定域名</a>, <a>删除</a>]}>
            <List.Item.Meta
              avatar={<Avatar src={'https://identicon-api.herokuapp.com/' + item.id + '/100?format=png'}/>}
              title={<a href="https://ant.design">{item.title}</a>}
              description={
                <div>
                  创建时间：{item.time}
                  运行时间：38h
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
}
