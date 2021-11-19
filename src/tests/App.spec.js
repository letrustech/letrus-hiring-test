import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import { store } from "../utils/store";

describe('Rick and Morty Aplication', () => {
  it('The route when page renderize should be "/personagens"', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(window.location.pathname).toBe('/personagens');
  });
});