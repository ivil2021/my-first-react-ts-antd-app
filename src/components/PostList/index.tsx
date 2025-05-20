/*
Создайте компонент, который загружает посты с API
https://jsonplaceholder.typicode.com/posts с использованием Axios.
Добавьте возможность обновления списка постов с помощью кнопки "Обновить".
Реализуйте обработку состояний загрузки и ошибок.
*/

import { Button, List, Typography, Spin } from 'antd';
import { PostListContainer } from './index.styles';
import { getAllPosts } from '../../api/post';
import useSWR from 'swr';

const { Title } = Typography;

export function PostList () {
  const { data: posts, isValidating: isLoading } = useSWR(
    'posts',
    async () =>
      getAllPosts(),
  );

  if (isLoading) {
    return <Spin tip="Идет загрузка ..." />;
  }

  return (    
    <PostListContainer>
      <Title level={3}>Список постов</Title>
      <Button type="primary" onClick={getAllPosts} loading={isLoading}>
        Обновить
      </Button>

      <List
        dataSource={posts}
        renderItem={(post) => (
          <List.Item>
            <List.Item.Meta
              title={post.title}
              description={post.body}
            />
          </List.Item>
        )}
      />
    </PostListContainer>
  );
};
