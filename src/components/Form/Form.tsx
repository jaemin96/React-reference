import React from 'react';
import { useForm, SubmitHandler, FieldValues, FormProvider } from 'react-hook-form';

type FormProps<T extends FieldValues> = {
  onSubmit: SubmitHandler<T>;
  children: React.ReactNode;
};

export const Form = <T extends FieldValues>({ onSubmit, children }: FormProps<T>) => {
  const methods = useForm<T>();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
