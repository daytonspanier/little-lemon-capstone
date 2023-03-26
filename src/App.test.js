import { render, screen } from '@testing-library/react';
import App from './App';
import HeroSection from './components/HeroSection';
import ReservationForm from './components/ReservationsForm';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("Check homepage for Hero Render", () => {
  render(
    <Router>
      <HeroSection />
    </Router>
  );
  const heroElement = screen.getByText("Little Lemon");
  expect(heroElement).toBeInTheDocument();
});

