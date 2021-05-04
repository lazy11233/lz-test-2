import { FormValue } from './form';

interface FormRule {
  key: string;
  required?: boolean;
  min?: number;
  max?: number;
  pattern?: RegExp;
}

type FormRules = Array<FormRule>;

interface FormErrors {
  [key: string]: string[];
}

const isEmpty = (value: any): boolean => {
  return value === '' || value === null || value === undefined;
};

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
  let errors: any = {};
  const addError = (key: string, message: string) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(message);
  };
  rules.map((rule) => {
    const value = formValue[rule.key];
    if (rule.required && isEmpty(value)) {
      addError(rule.key, '必填');
    }
    if (rule.min && !isEmpty(value) && value.length < rule.min) {
      addError(rule.key, '太短');
    }
    if (rule.max && !isEmpty(value) && value.length > rule.max) {
      addError(rule.key, '太长');
    }
    if (!isEmpty(value) && rule.pattern && !rule.pattern.test(value)) {
      addError(rule.key, '格式不正确');
    }
  });
  return errors;
};

export default Validator;
