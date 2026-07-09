import styled from 'styled-components/macro';

export const Container = styled.div`
  min-height: 100vh;
  position: relative;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 150;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const IconButton = styled.button`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.08);
  color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.14);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const TwoColumnGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1200px;
  margin: 30px auto auto;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    grid-template-columns: 1fr 4fr;
    margin-top: 30px;
  }
`;

export const Side = styled.div`
  display: grid;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    align-content: baseline;
  }
`;

export const Main = styled.main``;

export const MainHeader = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: end;
  padding: 0 15px;
`;
