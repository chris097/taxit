import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '@/components/Header';

// Mock next/router module
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Header component', () => {
  it('renders without errors', () => {
    render(<Header />);
    // Check if the component renders without errors
    expect(screen.getByRole('header')).toBeInTheDocument();
  });

  it('navigates to the correct links when clicked', () => {
    const { push } = require('next/router').useRouter();

    render(<Header />);

    // Simulate clicking on the links
    const individualsLink = screen.getByText('For Individuals');
    const businessesLink = screen.getByText('For Businesses');

    userEvent.click(individualsLink);
    expect(push).toHaveBeenCalledWith('/');

    userEvent.click(businessesLink);
    expect(push).toHaveBeenCalledWith('/pages/business');
  });
});