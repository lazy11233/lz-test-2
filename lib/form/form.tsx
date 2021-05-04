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
      <table>
        <tbody>
          {props.fields.map((field, index) => (
            <tr key={index} className={sc('row')}>
              <td style={{width: props.labelWidth}}>
                <span className={sc('label')}>{field.label}</span>
              </td>
              <td>
                <Input
                  type={field.input.type}
                  name={field.name}
                  onChange={handleFormChange.bind(null, field.name)}
                />
              </td>
              <div>{props.errors && props.errors[field.name]}</div>
            </tr>
          ))}
        </tbody>
      </table>
      <div>{props.buttons}</div>
    </form>
  );
};

export default Form;
