import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import { store } from "../utils/store";
import { mockResult } from "./mock";

describe('2 -Rick and Morty Application', () => {
  afterEach(() => jest.clearAllMocks())
  beforeEach(() => {
    // Reference : https://stackoverflow.com/questions/44249985/js-testing-code-that-uses-an-intersectionobserver
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  describe('Route', () => {
    it('The route when page renderize should be "/personagens"', () => {
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockResult),
        })
      );
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      expect(window.location.pathname).toBe('/personagens');
    });
  });

  describe('Card Character Information', () => {
    it('Should have the name of Character', async () => {
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockResult),
        })
      );
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      expect(screen.getAllByTestId('card-name')[0].textContent).toBe('Rick Sanchez');
    });

    it('Should have the status of Character', async () => {
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockResult),
        })
      );
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      expect(screen.getAllByTestId('card-status')[0]).toBeInTheDocument();
    });

    it('Should have the species of Character', async () => {
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockResult),
        })
      );
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      expect(screen.getAllByTestId('card-species')[0].textContent).toBe('Human');
    });

    it('Should have the gender of Character', async () => {
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockResult),
        })
      );
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      expect(screen.getAllByTestId('card-gender')[0].textContent).toBe('Male');
    });

    it('Should have the Text "First 5 appearances:"', async () => {
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockResult),
        })
      );
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      expect(screen.getAllByText('First 5 appearances:')[0]).toBeInTheDocument();
    })

    it('Should have a the First 5 appearances', async () => {
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockResult),
        })
      );
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      expect(screen.getAllByTestId('card-appearances')[0]).toBeInTheDocument();
    });
  })
});