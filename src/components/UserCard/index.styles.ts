import styled from '@emotion/styled';

export const UserCardContainer = styled.div`
  display: flex;
  jusify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 75vw;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 10px;
  padding: 30px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid black;
  background-color: lightblue;

  @media (max-width: 602px) {
    flex-direction: column;
  }
`;

export const UserCardPhotoLogo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
