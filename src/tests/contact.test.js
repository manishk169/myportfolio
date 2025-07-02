// tests/Contact.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../pages/Contact';

test('renders and submits the contact form', () => {
  render(<Contact />);
  fireEvent.change(screen.getByPlaceholderText(/name/i), {
    target: { value: 'Manish' }
  });
  fireEvent.change(screen.getByPlaceholderText(/email/i), {
    target: { value: 'manish@example.com' }
  });
  fireEvent.change(screen.getByPlaceholderText(/message/i), {
    target: { value: 'Hello!' }
  });
  fireEvent.click(screen.getByText(/send message/i));
  // You can assert more behavior if form submits to backend or updates state
});
