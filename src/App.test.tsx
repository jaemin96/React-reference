import { render, screen } from '@testing-library/react';
import App from './App';

import rootReducer from './redux/modules';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

const store = createStore(rootReducer);

test('renders learn react link', async () => {
  await act(async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
  });
  const linkElement = screen.getByText('hello');

  expect(linkElement).toBeInTheDocument();
});
