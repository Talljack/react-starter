import React from 'react';

export interface ColorModeContextValue {
  toggleColorMode: () => void;
}

export const ColorModeContext = React.createContext<ColorModeContextValue>({ toggleColorMode: () => {} });
