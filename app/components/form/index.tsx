import TextInput from 'components/TextInput';
import React from 'react';
import {Controller, ControllerProps} from 'react-hook-form';

function inController(Component: any) {
  return function ({control, rules, name, ...props}: ControllerProps) {
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

export const TextField = inController(TextInput);
