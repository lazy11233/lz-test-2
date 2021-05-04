import React, { Fragment, useState } from 'react';
import Form from './form';

const FormExample: React.FunctionComponent = () => {
  const [formData] = useState({
    username: '',
    password: '',
  });
  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ]);
  return (
    <div>
      formExample
      <Form
        value={formData}
        fields={fields}
        buttons={
          <Fragment>
            <button type="submit">提交</button>
            <button>取消</button>
          </Fragment>
        }
        onSubmit={() => {}}
      />
    </div>
  );
};

export default FormExample;
