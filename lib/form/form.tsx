import React from 'react';
import Input from '../input/input';
import './form.scss';
import { scopedClassMaker } from '../../helpers/classes';
const sc = scopedClassMaker('lui-form');
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
  buttons?: React.ReactFragment;
  onChange?: (value: FormValue) => void;
  onSubmit?: React.FormEventHandler;
  errors?: {
    [key: string]: string[];
  };
  labelWidth?: number | string;
}

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit && props.onSubmit(e);
  };
  const handleFormChange = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFormData = { ...formData, [key]: e.target.value };
    props.onChange && props.onChange(newFormData);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      {props.fields.map((field, index) => (
        <div key={index} className={sc('row')}>
          <span
            className={sc('label')}
            style={{
              width: props.labelWidth,
            }}
          >
            {field.label}
          </span>
          <div>
            <Input
              type={field.input.type}
              name={field.name}
              onChange={handleFormChange.bind(null, field.name)}
            />
            <div className={sc('error')}>
              {props.errors &&
                props.errors[field.name] &&
                props.errors[field.name][0]}
            </div>
          </div>
        </div>
      ))}
      <div>{props.buttons}</div>
    </form>
  );
};

export default Form;
