import styles from './hosts.css';
import { List, Avatar, Button, Tag, Modal, Steps, Tooltip } from 'antd';
import {FaMicrochip, FaMemory, FaLinux} from 'react-icons/fa';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Link from 'umi/link';

const Step = Steps.Step;

const data = [
  {
    id: 1,
    title: 'host1',
  },
  {
    id: 2,
    title: 'host2',
  },
  {
    id: 3,
    title: 'host3',
  },
];

const PreCode = props => (
  <pre>
    <code {...props} />
  </pre>
)

const Code = ({ theme, ...props } = {}) => (
  <CodeCopy theme={theme} text={props.children}>
    <PreCode {...props} />
  </CodeCopy>
)

class Hosts extends React.Component {
  state = {
    addModalVisible: false,
    cmd: 'curl -Ss http://kfcoding.com/xxx | sh 1238kfjeweio932'
  }

  showMadal = () => {
    this.setState({addModalVisible: true})
  }

  handleOk = () => {
    this.setState({addModalVisible: false})
  }

  render() {
    return (
      <div>
        <h3>我的主机</h3>
        <div style={{textAlign: 'right'}}>
          <Link to='/hosts/new'>
          <Button type="primary" icon="plus">添加主机</Button>
          </Link>
        </div>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item actions={[<a>查看</a>]}>
              <List.Item.Meta
                avatar={<Avatar src={'https://identicon-api.herokuapp.com/' + item.id + '/100?format=png'}/>}
                title={<a href="https://ant.design">{item.title}</a>}
                description={
                  <div>
                    <Tag><FaLinux/></Tag>
                    <Tag><FaMicrochip/> 2</Tag>
                    <Tag><FaMemory/> 4GB</Tag>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Hosts;
