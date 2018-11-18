import styles from './index.css';
import { Form, Input, Button, Tabs, List, Tag } from 'antd';
import {FaAlipay} from 'react-icons/fa';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

export default function() {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 4,
      },
    },
  };

  const data = {
    email: 'gd@kfcoding.com'
  }

  return (
    <div>
      <h3>个人中心</h3>
      <Tabs tabPosition='left'>
        <TabPane tab="个人信息" key="1">
          <h3>个人信息</h3>
          <List>
            <List.Item actions={[<a>修改</a>]}>
              <List.Item.Meta title={'邮箱'} description={<div>gd@kfcoding.com <Tag color='red'>未认证</Tag></div>} />
            </List.Item>
            <List.Item actions={[<a>修改</a>]}>
              <List.Item.Meta title={'手机'} description={'15821212122'} />
            </List.Item>
            <List.Item actions={[<a>查看历史</a>]}>
              <List.Item.Meta title={'账户余额'} description={'¥ 3.35'} />
            </List.Item>
            <List.Item actions={[<a>修改</a>]}>
              <List.Item.Meta title={'提现地址'} description={<div><FaAlipay/> 2323123@qq.com</div>} />
            </List.Item>
          </List>
        </TabPane>
        <TabPane tab="密码修改" key="2">
          <h3>密码修改</h3>
          <Form>
            <FormItem
              label="原密码"
              {...formItemLayout}
            >
              <Input type='password'/>
            </FormItem>
            <FormItem
              label="新密码"
              {...formItemLayout}
            >
              <Input type='password'/>
            </FormItem>
            <FormItem
              label="新密码确认"
              {...formItemLayout}
            >
              <Input type='password'/>
            </FormItem>
            <FormItem
              {...tailFormItemLayout}
            >
              <Button type='primary'>提交</Button>
            </FormItem>
          </Form>
        </TabPane>
        <TabPane tab="申请提现" key="3">Content of Tab 3</TabPane>
      </Tabs>

    </div>
  );
}
