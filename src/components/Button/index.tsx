import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material';

export const Button = styled(LoadingButton)`
  text-transform: none;

  &,
  &:hover,
  &:focus,
  &:active {
    box-shadow: none;
  }
`;
