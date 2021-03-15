import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('it should render the heading', () => {
    render(<Main />);
    expect(screen.getByRole('heading', {
      name: /Next Boilerplate/i
    })).toBeInTheDocument()
  });
});
