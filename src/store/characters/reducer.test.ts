import charactersReducer,{ addCharacter, Character, Characters } from "./reducer"



describe('character reducer', () => {
  const initialState: Characters = {
    list: [],
    status:'idle'
  }
  const rick: Character = {
    id:	1,
    name:	"Rick Sanchez",
    status:	"Alive",
    species: "Human",
    type:	"",
    gender:	"Male",
    origin:	{
      name:	"Earth (C-137)",
      url:	"https://rickandmortyapi.com/api/location/1"
    },
    location:{
      name:	"Citadel of Ricks",
      url:	"https://rickandmortyapi.com/api/location/3"
    },	
    image:	"https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
    ],	
    url:	"https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  }

  test('should handle initial state', () => {
    const state = charactersReducer(undefined,{type: 'unknown'})

    expect(state).toEqual({
      list:[],
      status:'idle'
    })
  })

  test('should handle new Character', () => {
    const actual = charactersReducer(initialState, addCharacter(rick))

    expect(actual.list[0].name).toBe('Rick Sanchez')
  })
})