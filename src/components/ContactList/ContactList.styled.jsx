import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 100%;
  width: 300px;
  margin-top: 30px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-size: 18px;
`;

export const Btn = styled.button`
display: inline-flex;
align-items: center;
justify-content: center;
border-radius: 8px;
width: 50px;
padding: 5px;
cursor: pointer;


&:hover {
  color: #de3d32;
    border-color: #de3d32;
    box-shadow: 0 3px 3px 0px #de3d32;
`;
