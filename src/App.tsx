import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useMemo } from 'react';
import { routes } from '@config/routes';
import { selectMode } from '@store/features/theme';
import { MainLayout } from '@components/MainLayout';
import { AuthGuard } from '@components/AuthGuard';
import { Login } from '@modules/auth/pages/Login';
import { AuthLayout } from '@modules/auth/components/AuthLayout';
import NewGuideForm from '@modules/home/components/MainSection/NewGuideForm';
import { useAppSelector } from './store';
import { createTheme } from './theme';
import { TeamPage } from '@modules/team';
import { PartnersPage } from '@modules/partners';

export const App = () => {
  const mode = useAppSelector(selectMode);

  const theme = useMemo(() => createTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path={routes.login()} element={<Login />} />
          </Route>

          <Route element={<AuthGuard />}>
            <Route element={<MainLayout />}>
              <Route path={routes.newGuide()} element={<NewGuideForm />} />
              <Route path={routes.manageCommand()} element={<TeamPage />} />
              <Route path={routes.managePartner()} element={<PartnersPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
