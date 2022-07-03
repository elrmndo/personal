import { render, screen, within } from '@testing-library/react';
import Home from '../../pages/index';

describe('Home', () => {
  describe('Layout', () => {
    it('renders a heading', () => {
      render(<Home />);

      const heading = screen.getByRole('heading', {
        name: /enrique rimando/i,
      });

      expect(heading).toBeInTheDocument();
    });

    it('renders a caption', () => {
      render(<Home />);

      const caption = screen.getByText(
        'Hello, kamusta? Enrique here. I am a Front End Developer with 5+ years of progressive experience'
      );

      expect(caption).toBeInTheDocument();
    });

    it('renders list of skills', () => {
      render(<Home />);

      const list = screen.getByRole('list', {
        name: /skills/i,
      });

      const { getAllByRole } = within(list);
      const items = getAllByRole('listitem');

      const skills = items.map((item) => item.textContent);

      expect(skills).toEqual([
        'TypeScript',
        'React.js',
        'Node.js',
        'Tailwind CSS',
      ]);
    });
  });
});
