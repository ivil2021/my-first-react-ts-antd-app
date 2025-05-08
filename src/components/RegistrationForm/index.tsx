/*
Создайте приложение с использованием Ant Design, которое содержит форму регистрации.
Включите поля для имени, email и пароля, используя компоненты Input, Form и Button из Ant Design.
Добавьте валидацию для полей, чтобы убедиться, что все обязательные поля заполнены.
*/

import { FormContainer, TextError } from './index.styles';
import { useRegistrationForm } from "./useRegistrationForm";

export function RegistrationForm() {
  const { form } = useRegistrationForm({});

  console.log('submitted data: ', form);
  

  return (
    <div>
      <FormContainer>
        <div>
          <h3>Форма регистрации</h3>
        </div>

        <div>
          <label htmlFor="name">Имя: </label>
          <input
            name="name"
            value={form.values.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors.name && form.touched.name && (
            <TextError>
              <div>{form.errors.name}</div>
            </TextError>
          )}
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            value={form.values.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            disabled={!form.values.name || Boolean(form.errors.name)}
          />
          {form.errors.email && form.touched.email && (
            <TextError>
              <div>{form.errors.email}</div>
            </TextError>
          )}
        </div>

        <div>
          <label htmlFor="password">Пароль: </label>
          <input
            name="password"
            value={form.values.password}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            type="password"
            disabled={!form.values.email || Boolean(form.errors.email)}
          />
          {form.errors.password && form.touched.password && (
            <TextError>
              <div>{form.errors.password}</div>
            </TextError>
          )}
        </div>

        <button type="submit" disabled={form.isValid}>Зарегистрироваться</button>
      </FormContainer>
    </div>
  );
}
