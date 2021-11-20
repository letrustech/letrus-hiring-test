import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import { store } from "../utils/store";
import { mockResult, mockResult2 } from "./mock";

describe('2 -Rick and Morty Application', () => {
  afterEach(() => jest.clearAllMocks())

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
  })

  describe('Application', () => {
    it('Should show all cards after fetch the API', async () => {
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockResult2),
        })
      );
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      await waitForElementToBeRemoved(() => screen.getByText('Carregando'));
      expect(fetch).toHaveBeenCalled();
      expect(screen.getAllByTestId('card')).toHaveLength(4);
    });
  })

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
      await waitForElementToBeRemoved(() => screen.getByText('Carregando'));
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
      await waitForElementToBeRemoved(() => screen.getByText('Carregando'));
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
      await waitForElementToBeRemoved(() => screen.getByText('Carregando'));
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
      await waitForElementToBeRemoved(() => screen.getByText('Carregando'));
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
      await waitForElementToBeRemoved(() => screen.getByText('Carregando'));
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
      await waitForElementToBeRemoved(() => screen.getByText('Carregando'));
      expect(screen.getAllByTestId('card-appearances')[0]).toBeInTheDocument();
    });
  })
});