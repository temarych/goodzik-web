import { createTheme as createMuiTheme } from '@mui/material';
import { Mode } from '@store/features/theme';
import { darkPalette } from './palettes/darkPalette';
import { lightPalette } from './palettes/lightPalette';

export const createTheme = (mode: Mode) =>
  createMuiTheme({
    palette: { ...(mode === 'dark' ? darkPalette : lightPalette), mode },
    shape: { borderRadius: 8 },
  });
