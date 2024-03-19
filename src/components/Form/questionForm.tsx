import { Button, TextField } from '@mui/material';
import { ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface QuestionFormInput {
  title: string;
  name: string;
  email: string;
  tel: string;
}

const QuestionForm = (): ReactElement => {
  const { register, handleSubmit } = useForm<QuestionFormInput>();

  const onSubmit: SubmitHandler<QuestionFormInput> = (data) => {
    console.log(data);

    fetch('http://localhost:8080/question/create', {
      method: 'post',
      body: JSON.stringify({ ...data }),
    });
  };

  return (
    <div className="QFormWrapper">
      <form className="QForm" onSubmit={handleSubmit(onSubmit)}>
        <TextField id="question-form-title" label="문의 제목" {...register('title', { required: true })} />
        <TextField id="question-form-name" label="작성자" {...register('name', { required: true })} />
        <TextField id="question-form-tel" label="연락처" {...register('tel', { required: true })} />
        <TextField id="question-form-email" label="이메일" {...register('email', { required: true })} />
        <Button type="submit">OK</Button>
      </form>
    </div>
  );
};

export default QuestionForm;
