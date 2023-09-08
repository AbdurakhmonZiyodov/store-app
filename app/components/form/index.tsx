import TextInput from 'components/TextInput';
import {InputProps} from 'components/TextInput/TextInput';
import React from 'react';
import {
  Control,
  Controller,
  FieldError,
  RegisterOptions,
  Path,
} from 'react-hook-form';
import {LoginFormData} from 'screens/LoginScreen/LoginScreen';

interface FormInputControllerProps<FieldsType extends {}> {
  name: Path<FieldsType>;
  defaultValue?: string;
  rules?: RegisterOptions;
  error?: FieldError;
  control: Control<FieldsType>;
}
function inController<T extends {}>(Component: any) {
  return function ({
    control,
    rules,
    name,
    ...props
  }: FormInputControllerProps<T> & InputProps) {
    return (
      <Controller
        control={control}
        rules={rules}
        name={name}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <Component
            onBlur={onBlur}
            onChange={(v: string) => onChange(v)}
            value={value}
            error={error}
            {...props}
          />
        )}
      />
    );
  };
}

export const TextField = inController<LoginFormData>(TextInput);
