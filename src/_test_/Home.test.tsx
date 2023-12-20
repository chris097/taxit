import 'react-intersection-observer';
import { render, screen } from "@testing-library/react";
import Home from '@/app/page';

beforeAll(() => {
  (global as any).IntersectionObserver = jest.fn(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});


test("render Home page", () => {
    render(<Home />);

    expect(screen.getByText(/for individuals/i)).toBeInTheDocument();
    expect(screen.getByText(/for businesses/i)).toBeInTheDocument();
    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getByText(/Paying your bills has never been so easy./i)).toBeInTheDocument();
    expect(screen.getByText(/Providing you with the best online payment experience/i)).toBeInTheDocument();
});