import React, { Fragment, useState } from 'react';
import Form, { FormValue } from './form';
import Validator from './validate';
import Button from '../button/button';

const checkUserName = (
  username: string,
  success: () => void,
  fail: () => void
) => {
  const exceedNames = ['frank', 'jack', 'alice', 'bob '];
  setTimeout(() => {
    if (exceedNames.includes(username)) {
      success();
    } else {
      fail();
    }
  }, 3000);
};

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: '',
  });
  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' }},
    { name: 'password', label: '密码', input: { type: 'password' } },
  ]);
  const [errors, setErrors] = useState({});
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      { key: 'username', required: true, message: '用户名不能为空' },
      { key: 'username', min: 3, max: 10, message: '用户名长度为3~10位' },
      { key: 'username', pattern: /^[A-Za-z0-9]+$/, message: '只能输入数字和英文字母' },
      {
        key: 'username',
        validate: (username: string) => {
          return new Promise<void>((resolve, reject) => {
            checkUserName(username, resolve, reject);
          });
        },
        message: '用户名唯一'
      },
      { key: 'password', required: true, message: '密码不能为空' },
    ];
    Validator(formData, rules, (errors) => {
      setErrors(errors)
    });
  };

  return (
    <div>
      formExample
      <Form
        value={formData}
        fields={fields}
        errors={errors}
        labelWidth={100}
        buttons={
          <Fragment>
            <Button type="submit" level="important">
              提交
            </Button>
            <Button type="reset" level="dangerous">
              取消
            </Button>
            <Button>普通</Button>
          </Fragment>
        }
        onChange={setFormData}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default FormExample;
