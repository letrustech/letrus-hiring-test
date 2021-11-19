import { fetchCharacters } from "../store/reducers/reducer";
import { store } from "../utils/store";
import { mockResult } from "./mock";

describe("1 - API Response of Rick And Morty", () => {
  it("Should use fetch to call API Rick And Morty", async () => {
    jest.spyOn(global, "fetch").mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResult),
      })
    );
    store.dispatch(fetchCharacters());
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character?page=1');
  });
});
