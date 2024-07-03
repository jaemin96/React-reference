import { render, screen, fireEvent } from '@testing-library/react';
import { TabContainer } from '../TabContainer';
import { TabPanel } from '../TabPanel';

describe('Tab', () => {
  beforeEach(() => {
    render(
      <TabContainer>
        <TabPanel label="tab1">Tab 1 content</TabPanel>
        <TabPanel label="tab2">Tab 2 content</TabPanel>
        <TabPanel label="tab3">Tab 3 content</TabPanel>
      </TabContainer>
    );
  });

  test('render tab component', () => {
    const tabElement = screen.getByTestId('tab');
    expect(tabElement).toBeInTheDocument();
  });

  test('check init status', () => {
    const tabItemElement = screen.getByTestId('tabItem-1');
    expect(tabItemElement).toHaveClass('active');
  });

  test('check tab change', () => {
    const tabItem1 = screen.getByTestId('tabItem-1');
    const tabItem2 = screen.getByTestId('tabItem-2');

    fireEvent.click(tabItem2);
    expect(tabItem2).toHaveClass('active');

    fireEvent.click(tabItem1);
    expect(tabItem1).toHaveClass('active');
  });

  test('snapshot', () => {
    const { asFragment } = render(
      <TabContainer>
        <TabPanel label="tab1">Tab 1 content</TabPanel>
        <TabPanel label="tab2">Tab 2 content</TabPanel>
        <TabPanel label="tab3">Tab 3 content</TabPanel>
      </TabContainer>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

// describe("tab2" , () => {
//     test("not exist children", () => {
//         render(
//             <TabContainer>
//             </TabContainer>
//         );
//         const tabMenuElement = screen.getByRole('tabMenu');
//         expect(tabMenuElement).toBeNull();
//     })
// })
