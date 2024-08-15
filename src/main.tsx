import { StrictMode } from 'react';
import './styles/index.scss';
import { createRoot } from 'react-dom/client';
import './fonts/EurofontExtendedC/eurofontextendedc.otf';
import './fonts/EurofontExtendedC/eurofontextendedc_bold.otf';
import { App } from './App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
