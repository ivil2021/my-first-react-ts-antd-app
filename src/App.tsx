import { RegistrationForm } from './components/RegistrationForm';
import { PostList } from './components/PostList';
import { UserList } from './components/UserList';

export function App() {
  return (
    <div>
      <UserList />
      <PostList />
      <RegistrationForm />
    </div>
  );
}
