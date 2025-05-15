/*
Создайте компонент, который использует Axios для получения данных о пользователях с API
https://jsonplaceholder.typicode.com/users.
Отобразите список пользователей с их именами и email.
Обработайте ошибки, чтобы в случае неудачного запроса выводилось сообщение об ошибке.
*/

import { useEffect, useState } from 'react';
import { List, Typography, Spin, Alert } from 'antd';
import { UserListContainer } from '../UserList/index.styles';
import axios from 'axios';

const { Title } = Typography;

interface IUser {
  id: number;
  name: string;
  email: string;
}

export function UserList () {
  const [users, setUsers] = useState<IUser[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getAllUsers () {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (err) {
        setError('Не удалось загрузить данные пользователей');
      } finally {
        setLoading(false);
      }
    };

    getAllUsers();
  }, []);

  if (error) {
    return <Alert message={error} type="error" />;
  }

  if (loading) {
    return <Spin tip="Идет загрузка ..." />;
  }

  return (
    <UserListContainer>
      <Title level={3}>Список пользователей</Title>
      <List
        dataSource={users}
        renderItem={(user) => (
          <List.Item>
            <List.Item.Meta
              title={user.name}
              description={user.email}
            />
          </List.Item>
        )}
      />
    </UserListContainer>
  );
};
