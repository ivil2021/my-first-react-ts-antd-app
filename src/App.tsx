import { RegistrationForm } from './components/RegistrationForm';
import { PostList } from './components/PostList';
import { UserList } from './components/UserList';
import { CommentList } from './components/CommentList';

export function App() {
  return (
    <div>
      <CommentList />
      <UserList />
      <PostList />
      <RegistrationForm />
    </div>
  );
}
