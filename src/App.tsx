import { RegistrationForm } from './components/RegistrationForm';
import { UserList } from './components/UserList';
import { PostList } from './components/PostList';

export function App() {
  return (
    <div>
      <PostList />
      <UserList />
      <RegistrationForm />
    </div>
  );
}
