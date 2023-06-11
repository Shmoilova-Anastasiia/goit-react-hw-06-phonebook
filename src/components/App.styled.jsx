import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  padding: 100px 30px;
  margin: auto;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  max-width: 100%;

  padding: 10px;
  justify-content: center;
  box-shadow: 0 5px 5px 0px #008000;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const Section = styled.section`
  padding: 30px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const TitleH1 = styled.h1`
  margin-bottom: 30px;
  font-size: 36px;
  text-align: center;
  font-weight: bold;
  text-shadow: 0px 1px 0px #fafafa;
`;

export const TitleH2 = styled.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: bold;
`;
