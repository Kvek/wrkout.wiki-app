import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeType } from 'shared/Store/slices/app-slice';
import { AppDispatch, RootState } from 'shared/Store/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const dark = {
  Background: {
    colors: {
      default: '#000',
    },
  },
  Buttons: {
    colors: {
      active: '#fff',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
    },
  },
  Divider: {
    colors: {
      divider: 'rgba(255, 255, 255, 0.12)',
    },
  },
  Typography: {
    colors: {
      disabled: 'rgba(255, 255, 255, 0.5)',
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
};

const light = {
  Background: {
    colors: {
      default: '#fff',
    },
  },
  Buttons: {
    colors: {
      active: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
    },
  },
  Divider: {
    colors: {
      divider: 'rgba(0, 0, 0, 0.12)',
    },
  },
  Typography: {
    colors: {
      disabled: 'rgba(0, 0, 0, 0.38)',
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
  },
};

const defaults = {
  borderRadius: '4px',
};

export type ThemeShapeType = typeof defaults & typeof dark;

export const useTheme = (mode: ThemeType): ThemeShapeType[] => {
  const theme = mode === 'dark' ? dark : light;

  return [{ ...theme, ...defaults }];
};
