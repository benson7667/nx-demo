import { Provider } from 'react-redux';
import { store } from './store';
import Inner from './inner';

export function Modules() {
  return (
    <Provider store={store}>
      <Inner />
    </Provider>
  );
}
