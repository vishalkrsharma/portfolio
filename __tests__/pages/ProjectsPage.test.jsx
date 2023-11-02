import { render, screen } from '@testing-library/react';
import ProjectsPage from '@/app/projects/page';

describe('ProjectsPage', () => {
  it('renders ProjectsPage', () => {
    render(<ProjectsPage />);

    const projectsPage = screen.getByTestId('projectspage');

    expect(projectsPage).toBeInTheDocument();
  });

  it('renders ProjectsPage Header', () => {
    render(<ProjectsPage />);

    const header = screen.getByRole('heading');

    expect(header).toBeInTheDocument();
  });
});
