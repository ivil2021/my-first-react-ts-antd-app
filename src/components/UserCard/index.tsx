import { UserCardContainer } from './index.styles';
import { UserCardPhotoLogo } from './index.styles';

interface IUserCard {
  photo: string;
  logo: string;
  barcode: string;
  id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  accountNumber: string;
  accountType: string;
  balance: number;
  currency: string;
  accountStatus: string;
  phone: string;
  email: string;
}

export function UserCard ({
  photo,
  logo,
  barcode,
  id,
  firstName,
  lastName,
  middleName,
  accountNumber,
  accountType,
  balance,
  currency,
  accountStatus,
  phone,
  email
}: IUserCard) {

  return (
    <UserCardContainer>
      <UserCardPhotoLogo>
        <img src={photo} alt="something went wrong" />
        <img src={logo} alt="something went wrong" />
        <img src={barcode} alt="something went wrong" />
      </UserCardPhotoLogo>
      <div>
        <p>Id: {id}</p>
        <p>Имя: {firstName}</p>
        <p>Фамилия: {lastName}</p>
        <p>Отчество: {middleName}</p>
        <p>Номер аккаунта: {accountNumber}</p>
        <p>Тип аккаунта: {accountType}</p>
        <p>Баланс: {balance}</p>
        <p>Валюта: {currency}</p>
        <p>Статус аккаунта: {accountStatus}</p>
        <p>Телефон: {phone}</p>
        <p>Email: {email}</p>
      </div>
    </UserCardContainer>
  );
};
