import { Card, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => (
  <AuthLayout.Wrapper>
    <AuthLayout.Container variant="outlined">
      <Outlet />
    </AuthLayout.Container>
  </AuthLayout.Wrapper>
);

AuthLayout.Container = styled(Card)`
  width: 100%;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: 25rem;
    margin: auto;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    border: none;
  }
`;

AuthLayout.Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: ${({ theme }) => theme.spacing(2)};
`;
