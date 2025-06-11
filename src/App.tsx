import { RegistrationForm } from './components/RegistrationForm';
import { PostList } from './components/PostList';
import { UserList } from './components/UserList';
import { CommentList } from './components/CommentList';
import { UserCard } from './components/UserCard';

import clientPhoto from './img/client-foto.png';
import clientLogo from './img/client-logo.png';
import clientBarcode from './img/client-barcode.png';

const user = {
  id: '123456789',
  firstName: 'Олег',
  lastName: 'Петров',
  middleName: 'Владимирович',
  accountNumber: '40817810099910004321',
  accountType: 'Текущий',
  balance: 15234.97,
  currency: 'RUB',
  accountStatus: 'Активен',
  phone: '+7 (912) 345-67-89',
  email: 'petrov@example.com'
};

export function App() {
  return (
    <div>
      <UserCard
        photo={clientPhoto}
        logo={clientLogo}
        barcode={clientBarcode}
        id={user.id}
        firstName={user.firstName}
        lastName={user.lastName}
        middleName={user.middleName}
        accountNumber={user.accountNumber}
        accountType={user.accountType}
        balance={user.balance}
        currency={user.currency}
        accountStatus={user.accountStatus}
        phone={user.phone}
        email={user.email}
      />
      <CommentList />
      <UserList />
      <PostList />
      <RegistrationForm />
    </div>
  );
}
