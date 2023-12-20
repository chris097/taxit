import 'react-intersection-observer';
import Business from "@/app/pages/business/page";
import { render, screen } from "@testing-library/react";

beforeAll(() => {
  (global as any).IntersectionObserver = jest.fn(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});


test("render busienss page", () => {
    render(<Business />);

    expect(screen.getByText(/for individuals/i)).toBeInTheDocument();
    expect(screen.getByText(/for businesses/i)).toBeInTheDocument();
    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getByText(/manage payroll, compliance & HR in real time/i)).toBeInTheDocument();
    expect(screen.getByText(/make income tax remittances to the state internal revenue service for your employees./i)).toBeInTheDocument();
});