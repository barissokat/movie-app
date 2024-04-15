import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import SearchBar from './components/templates/SearchBar';

test('renders welcome page', () => {
  render(<App />);

  const welcomeMessage = screen.getByText(/SEARCH TO GET STARTED/i);

  expect(welcomeMessage).toBeInTheDocument();
});

test('renders movies based on user input', async () => {
  render(<SearchBar />);

  const searchInput = screen.getByTestId('movie');

  fireEvent.change(searchInput, { target: { value: 'Inception' } });

  const searchButton = screen.getByTestId('searchButton');
  fireEvent.click(searchButton);

  await waitFor(() => {
    const movieCardTitle = screen.getByText(/Inception/i);
    expect(movieCardTitle).toBeInTheDocument();
  });
});