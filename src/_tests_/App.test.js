/* eslint-disable react/jsx-props-no-spreading */
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import App from '../components/App';
import store from '../reducers/index';

const queryClient = new QueryClient();

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

describe('Testing App with redux', () => {
  it('App.js snapshot testing', () => {
    const app = renderer.create(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <AlertProvider template={AlertTemplate} {...options}>
            <App />
          </AlertProvider>
        </QueryClientProvider>
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
