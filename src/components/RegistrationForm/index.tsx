/*
Создайте приложение с использованием Ant Design, которое содержит форму регистрации.
Включите поля для имени, email и пароля, используя компоненты Input, Form и Button из Ant Design.
Добавьте валидацию для полей, чтобы убедиться, что все обязательные поля заполнены.
*/

import { FormContainer, TextError } from './index.styles';
import { useRegistrationForm } from './useRegistrationForm';
import { Form, Input, Button } from 'antd';

export function RegistrationForm() {
  const { form } = useRegistrationForm();

  return (
    <FormContainer>
      <h3>Форма регистрации</h3>
      <Form onFinish={form.handleSubmit} layout="vertical">
        <Form.Item label="Имя" required>
          <Input
            name="name"
            value={form.values.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors.name && form.touched.name && (
            <TextError>{form.errors.name}</TextError>
          )}
        </Form.Item>

        <Form.Item label="Email" required>
          <Input
            name="email"
            value={form.values.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors.email && form.touched.email && (
            <TextError>{form.errors.email}</TextError>
          )}
        </Form.Item>

        <Form.Item label="Пароль" required>
          <Input.Password
            name="password"
            value={form.values.password}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors.password && form.touched.password && (
            <TextError>{form.errors.password}</TextError>
          )}
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>
    </FormContainer>
  );
}
