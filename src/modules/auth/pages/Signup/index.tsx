import { Divider, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useNavigate } from 'react-router-dom';
import { routes } from '@config/routes';
import { ApiErrorDto, useSignupMutation } from '@store/api';
import { Link } from '@components/Link';
import { Button } from '@components/Button';
import { PasswordField } from '@components/PasswordField';
import {
  SignupFormData,
  signupSchema,
} from '@modules/auth/schemas/signupSchema';
import { AuthContainer } from '@modules/auth/components/AuthContainer';

export const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const [signup, { isLoading: isAuthenticating }] = useSignupMutation();

  const handleError = useCallback(
    (error: FetchBaseQueryError) => {
      switch ((error.data as ApiErrorDto).code) {
        case 'email-not-unique':
          return setError('email', { message: 'Email already exists' });
        default:
          return setError('password', { message: 'Unauthorized' });
      }
    },
    [setError],
  );

  const handleSignup = useCallback(
    (data: SignupFormData) => {
      signup({ signupRequestDto: data })
        .unwrap()
        .then(() => navigate(routes.home()))
        .catch(handleError);
    },
    [handleError, navigate, signup],
  );

  return (
    <form onSubmit={handleSubmit(handleSignup)}>
      <AuthContainer title="Signup">
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
            Sign up
          </Button>
          <Typography variant="body1" textAlign="center">
            Already have an account? <Link to="/login">Log in</Link>
          </Typography>
        </Stack>

        <Divider>OR</Divider>

        <Stack spacing={2}>
          <Button variant="outlined" size="large">
            Continue with Google
          </Button>
          <Button variant="outlined" size="large">
            Continue with Facebook
          </Button>
        </Stack>
      </AuthContainer>
    </form>
  );
};
