/*
Создайте компонент, который загружает посты с API
https://jsonplaceholder.typicode.com/posts с использованием Axios.
Добавьте возможность обновления списка постов с помощью кнопки "Обновить".
Реализуйте обработку состояний загрузки и ошибок.
*/

import { useEffect, useState } from 'react';
import { Button, List, Typography, Spin, Alert } from 'antd';
import { PostListContainer } from '../PostList/index.styles';
import axios from 'axios';

const { Title } = Typography;

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function PostList () {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  async function getAllPosts () {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (err) {
      setError('Не удалось загрузить посты');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostListContainer>
      <Title level={3}>Список постов</Title>
      <Button type="primary" onClick={getAllPosts} loading={loading}>
        Обновить
      </Button>
      {loading ? (
        <Spin tip="Идет загрузка ..." />
      ) : error ? (
        <Alert message={error} type="error" />
      ) : (
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
      )}
    </PostListContainer>
  );
};
