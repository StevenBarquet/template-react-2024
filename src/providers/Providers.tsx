// ---Dependencies
import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AntdProv } from './AntdProv/AntdProv';

interface Props {
  children: ReactNode;
}

/**
 * Providers Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export function Providers({ children }: Props) {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <BrowserRouter>
      <AntdProv>{children}</AntdProv>
    </BrowserRouter>
  );
}
