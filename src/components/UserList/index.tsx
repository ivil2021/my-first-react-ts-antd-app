/*
Создайте компонент, который использует Axios для получения данных о пользователях с API
https://jsonplaceholder.typicode.com/users.
Отобразите список пользователей с их именами и email.
Обработайте ошибки, чтобы в случае неудачного запроса выводилось сообщение об ошибке.
*/

import { List, Typography, Spin } from 'antd';
import { UserListContainer } from './index.styles';
import { getAllUsers } from '../../api/user';
import useSWR from 'swr';

const { Title } = Typography;

export function UserList () {
  const { data: users, isValidating: isLoading } = useSWR(
    'users',
    async () =>
      getAllUsers(),
  );

  if (isLoading) {
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
