import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import { fetchCharacters } from "../store/reducers/reducer";
import { store } from "../utils/store";
import { mockResult } from "./mock";

describe("1 - API Response of Rick And Morty", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("Should use fetch to call API Rick And Morty", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResult),
      })
    );
    store.dispatch(fetchCharacters());
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character?page=1');
  });
});
