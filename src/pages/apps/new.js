import styles from './new.css';
import { Form, Input, Button, Radio } from 'antd';

import {UnControlled as CodeMirror} from 'react-codemirror2';
require('codemirror/mode/yaml/yaml');
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

const FormItem = Form.Item;

const tpl = 'wordpress: \n' +
  '  image: wordpress \n' +
  '  links: \n' +
  '    - db:mysql \n' +
  '  ports: \n' +
  '    - "80" \n' +
  '  restart: always \n' +
  'db: \n' +
  '  image: mysql \n' +
  '  environment: \n' +
  '    - MYSQL_ROOT_PASSWORD=example \n' +
  '  restart: always'

export default function() {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const buttonItemLayout = {
    wrapperCol: { span: 14, offset: 4 },
  }

  return (
    <div>
      <Form layout='horizontal'>
        <FormItem
          label="应用名称"
        >
          <Input placeholder="输入应用名称" />
        </FormItem>
        <FormItem
          label="Docker Compose YML"
        >
          <CodeMirror
            value={tpl}
            className={styles.cm}
            options={{
              mode: 'yaml',
              theme: 'material',
              lineNumbers: true
            }}
            onChange={(editor, data, value) => {
            }}
          />
        </FormItem>
        <FormItem>
          <Button type="primary">创建</Button>
        </FormItem>
      </Form>
    </div>
  );
}
