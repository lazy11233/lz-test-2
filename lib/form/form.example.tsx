import React, { Fragment, useState } from 'react';
import Form, { FormValue } from './form';
import Validator from './validate';

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
        buttons={
          <Fragment>
            <button type="submit">提交</button>
            <button type="reset">取消</button>
          </Fragment>
        }
        onChange={setFormData}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default FormExample;
