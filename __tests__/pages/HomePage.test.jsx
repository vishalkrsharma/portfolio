import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('HomePage', () => {
  it('renders HomePage', () => {
    render(<HomePage />);

    const homepage = screen.getByTestId('homepage');

    expect(homepage).toBeInTheDocument();
  });
});
