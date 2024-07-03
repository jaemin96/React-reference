import { Toggle } from '../Toggle';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Toggle', () => {
  test('render toggle button', () => {
    render(<Toggle />);
    const toggleElement = screen.getByTestId('toggle');
    expect(toggleElement).toBeInTheDocument();
  });

  test('check init status', () => {
    render(<Toggle />);
    const toggleElement = screen.getByTestId('toggle');
    expect(toggleElement).toHaveClass('toggle--off');
  });

  test('check toggle button status - ON', () => {
    render(<Toggle isToggled={true} />);
    const toggleElement = screen.getByTestId('toggle');
    expect(toggleElement).toHaveClass('toggle--on');
  });

  test('check toggle button status - OFF', () => {
    render(<Toggle isToggled={false} />);
    const toggleElement = screen.getByTestId('toggle');
    expect(toggleElement).toHaveClass('toggle--off');
  });

  test('trans status - Off to On', () => {
    render(<Toggle isToggled={false} />);
    const toggleElement = screen.getByTestId('toggle');
    fireEvent.click(toggleElement);
    expect(toggleElement).toHaveClass('toggle--on');
  });

  test('trans status - On to Off', () => {
    render(<Toggle isToggled={true} />);
    const toggleElement = screen.getByTestId('toggle');
    fireEvent.click(toggleElement);
    expect(toggleElement).toHaveClass('toggle--off');
  });

  test('snapshot', () => {
    const { asFragment } = render(<Toggle data-testid="toggle" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
