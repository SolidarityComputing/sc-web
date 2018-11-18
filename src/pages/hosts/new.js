import { FaLinux, FaMemory, FaMicrochip } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Link from 'umi/link';
import { Steps, Tooltip, Tag } from 'antd';

const Step = Steps.Step;

class Hosts extends React.Component {
  state = {
    addModalVisible: false,
    cmd: 'curl -sSL https://get.daocloud.io/daomonit/install.sh | sh -s 11530511dbc6aa1d56f711d71af9f41ff2c57083 ',
  };

  showMadal = () => {
    this.setState({ addModalVisible: true });
  };

  handleOk = () => {
    this.setState({ addModalVisible: false });
  };

  render() {
    return (
      <div>
        <h3>添加主机</h3>

        <Steps direction="vertical" current={-1} size='small'>
          <Step title="准备" description="找一台具有足够空闲资源的Linux主机"/>
          <Step
            title="安装"
            description={
              <div>
                在主机上打开终端并执行下面的命令
                <br/>
                <Tooltip title='点击复制'>
                  <CopyToClipboard text={this.state.cmd}>
                    <Tag style={{ fontSize: 14, color: '#666' }}>{this.state.cmd}</Tag>
                  </CopyToClipboard>
                </Tooltip>
              </div>
            }
          />
          <Step title="验证" description={<div>到<Link to='/hosts'>主机</Link>页面查看主机是否接入</div>}/>
        </Steps>
      </div>
    );
  }
}

export default Hosts;
