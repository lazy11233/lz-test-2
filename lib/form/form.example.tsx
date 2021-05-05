import React, { Fragment, useState } from 'react';
import Form, { FormValue } from './form';
import Validator from './validate';
import Button from '../button/button';

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: '',
  });
  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ]);
  const [errors, setErrors] = useState({});
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      { key: 'username', required: true },
      { key: 'username', min: 3, max: 10 },
      { key: 'username', pattern: /^[A-Za-z0-9]+$/ },
      { key: 'password', required: true },
    ];
    const errors = Validator(formData, rules);
    setErrors(errors);
    console.log(errors);
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
            <Button>
              普通
            </Button>
          </Fragment>
        }
        onChange={setFormData}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default FormExample;
