/*
Создайте компонент, который использует SWR для получения данных о комментариях 
с API https://jsonplaceholder.typicode.com/comments.
Отобразите список комментариев с именами авторов и текстами комментариев. 
Добавьте функциональность для автоматического обновления данных каждые 5 секунд.
*/

import { List, Typography, Spin } from 'antd';
import { CommentListContainer } from '../CommentList/index.styles';
import { useCommentList } from './useCommentList';

const { Title } = Typography;

export function CommentList () {
  const { comments, isLoading } = useCommentList ();

  if (isLoading) {
    return <Spin tip="Идет загрузка ..." />;
  }

  return (
    <CommentListContainer>
      <Title level={3}>Список комментариев</Title>
      <List
        dataSource={comments}
        renderItem={(comment) => (
          <List.Item>
            <List.Item.Meta
              title={comment.name}
              description={comment.body}
            />
          </List.Item>
        )}
      />
    </CommentListContainer>
  );
};
