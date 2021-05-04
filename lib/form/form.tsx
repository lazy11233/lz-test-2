import React from 'react';

export interface FormValue {
  [key: string]: any;
}

interface Props {
  value: FormValue;
  fields: Array<{
    name: string;
    label: string;
    input: {
      type: string;
    };
  }>;
  buttons: React.ReactFragment;
  onChange: (value: FormValue) => void;
  onSubmit: React.FormEventHandler;
  errors?: {
    [key: string]: string[];
  };
}

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };
  const handleFormChange = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFormData = { ...formData, [key]: e.target.value };
    props.onChange(newFormData);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      {props.fields.map((field, index) => (
        <div key={index}>
          {field.label}
          <input
            type={field.input.type}
            name={field.name}
            onChange={handleFormChange.bind(null, field.name)}
          />
          <div>{props.errors && props.errors[field.name]}</div>
        </div>
      ))}
      <div>{props.buttons}</div>
    </form>
  );
};

export default Form;
