import { Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { routes } from '@config/routes';
import { ApiErrorDto, useLoginMutation } from '@store/api';
import { Button } from '@components/Button';
import { PasswordField } from '@components/PasswordField';
import { AuthContainer } from '@modules/auth/components/AuthContainer';
import { LoginFormData, loginSchema } from '@modules/auth/schemas/loginSchema';

export const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const [login, { isLoading: isAuthenticating }] = useLoginMutation();

  const handleError = useCallback(
    (error: FetchBaseQueryError) => {
      switch ((error.data as ApiErrorDto).code) {
        case 'entity-not-found':
          return setError('email', { message: 'User not found' });
        default:
          return setError('password', { message: 'Unauthorized' });
      }
    },
    [setError],
  );

  const handleLogin = useCallback(
    (data: LoginFormData) => {
      login({ loginRequestDto: data })
        .unwrap()
        .then(() => navigate(routes.newGuide()))
        .catch(handleError);
    },
    [handleError, login, navigate],
  );

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <AuthContainer title="Login">
        <Stack spacing={2}>
          <TextField
            label="Email"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register('email')}
          />
          <PasswordField
            label="Password"
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register('password')}
          />
        </Stack>

        <Stack spacing={2}>
          <Button
            size="large"
            variant="contained"
            type="submit"
            loading={isAuthenticating}
          >
            Log in
          </Button>
        </Stack>

        {/* <Divider>OR</Divider> */}

        {/* <Stack spacing={2}>
          <Button variant="outlined" size="large">
            Continue with Google
          </Button>
          <Button variant="outlined" size="large">
            Continue with Facebook
          </Button>
        </Stack> */}
      </AuthContainer>
    </form>
  );
};
