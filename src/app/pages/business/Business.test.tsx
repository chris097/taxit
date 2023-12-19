import React from 'react';
import { render, screen } from '@testing-library/react';
import Business from './page';

describe('Business component', () => {
  it('renders without errors', () => {
    render(<Business />);
    // Add more specific assertions if needed based on your component structure
    expect(screen.getByText('Manage payroll, compliance & HR in real time')).toBeInTheDocument();
    // expect(screen.getByText('Mocked Footer')).toBeInTheDocument();
    // expect(screen.getByText('Mocked Card')).toBeInTheDocument();
    // expect(screen.getByText('Mocked TabComponent')).toBeInTheDocument();
  });
});