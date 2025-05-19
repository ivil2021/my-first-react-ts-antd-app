import * as Yup from "yup";
import { useFormik } from "formik";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Имя должно быть не меньше 3 символов!')
    .max(50, 'Имя слишком длинное!')
    .required('Имя обязательно'),
  email: Yup.string()
    .email('Неверный формат email')
    .required('Email обязателен'),
  password: Yup.string()
    .min(3, 'Пароль слишком короткий!')
    .max(50, 'Пароль слишком длинный!')
    .required('Пароль обязателен')
});

interface IUseRegistrationForm {
  name?: string;
  lastName?: string;
}

export function useRegistrationForm() {
  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: () => {},
    validationSchema,
  });

  return {
    form
  }
}
