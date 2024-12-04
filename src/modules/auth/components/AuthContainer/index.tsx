import { styled, Typography } from '@mui/material';
import { ReactNode } from 'react';

export interface AuthContainerProps {
  title: string;
  children: ReactNode;
}

export const AuthContainer = ({ title, children }: AuthContainerProps) => (
  <AuthContainer.Wrapper>
    <Typography variant="h5">{title}</Typography>
    {children}
  </AuthContainer.Wrapper>
);

AuthContainer.Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  padding-left: ${({ theme }) => theme.spacing(3)};
  padding-right: ${({ theme }) => theme.spacing(3)};
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  gap: ${({ theme }) => theme.spacing(5)};
`;
