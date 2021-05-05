import { FormValue } from './form';

interface FormRule {
  key: string;
  required?: boolean;
  message: string;
  min?: number;
  max?: number;
  pattern?: RegExp;
  validate?: (value: any) => Promise<void>;
}

type FormRules = Array<FormRule>;

type OneError = {
  message: string;
  promise?: Promise<any>;
};

const isEmpty = (value: any): boolean => {
  return value === '' || value === null || value === undefined;
};

const Validator = (
  formValue: FormValue,
  rules: FormRules,
  callback: (errors: any) => void
): void => {
  let errors: any = {};
  const addError = (key: string, error: OneError) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(error);
  };
  for (let i = 0; i < rules.length; i++) {
    let rule = rules[i];
    const value = formValue[rule.key];
    if (rule.validate) {
      // 自定义校验器
      const promise = rule.validate(value);
      addError(rule.key, { message: rule.message, promise });
    }
    if (rule.required && isEmpty(value)) {
      addError(rule.key, { message: rule.message });
    }
    if (rule.min && !isEmpty(value) && value.length < rule.min) {
      addError(rule.key, { message: rule.message });
    }
    if (rule.max && !isEmpty(value) && value.length > rule.max) {
      addError(rule.key, { message: rule.message });
    }
    if (!isEmpty(value) && rule.pattern && !rule.pattern.test(value)) {
      addError(rule.key, { message: rule.message });
    }
  }
  Promise.all(
    flat(Object.values(errors))
      .filter((item) => item.promise)
      .map((item) => item.promise)
  ).then(
    () => {
      const newErrors: [string, string[]] = Object.keys(errors).map((key) => [
        key,
        errors[key].map((item: OneError) => item.message),
      ]);
      fromEntries(newErrors);
      callback(fromEntries(newErrors));
    },
    () => {
      const newErrors: [string, string[]] = Object.keys(errors).map((key) => [
        key,
        errors[key].map((item: OneError) => item.message),
      ]);
      fromEntries(newErrors);
      callback(fromEntries(newErrors));
    }
  );
};

const flat = (array: Array<any>) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      result.push(...array[i]);
    } else result.push(array[i]);
  }
  return result;
};

const fromEntries = (array: [string, string[]]) => {
  console.log('我是一个兵', array);
  let result: {[key: string]: string[]} = {};
  for (let i = 0; i < array.length; i++) {

    result[array[i][0]] = array[i][1];
  }
  return result;
};

export default Validator;
