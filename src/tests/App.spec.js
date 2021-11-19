import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import { store } from "../utils/store";
import { mockResult } from "./mock";

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
      expect(screen.getByTestId('card-name').textContent).toBe('Rick Sanchez');
    });

    it('Should have the image of Character', async () => {
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
      expect(screen.getByTestId('card-image').src).toBe('https://rickandmortyapi.com/api/character/avatar/1.jpeg');
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
      expect(screen.getByTestId('card-status').textContent).toBe('Alive');
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
      expect(screen.getByTestId('card-species').textContent).toBe('Human');
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
      expect(screen.getByTestId('card-gender').textContent).toBe('Male');
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
      expect(screen.getByText('First 5 appearances:')).toBeInTheDocument();
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
      expect(screen.getByTestId('card-appearances')).toBeInTheDocument();
    });
  })
});