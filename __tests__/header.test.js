import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../src/components/Header';
import { I18nProvider } from '../src/i18n';

const renderWithProviders = (ui) => render(
  <BrowserRouter>
    <I18nProvider>
      {ui}
    </I18nProvider>
  </BrowserRouter>
);

test('renders navigation links and language selector', () => {
  renderWithProviders(<Header />);
  expect(screen.getByText('Ahununu Express')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /About Us/i })).toBeInTheDocument();
  expect(screen.getByRole('combobox', { name: /Language/i })).toBeInTheDocument();
}); 