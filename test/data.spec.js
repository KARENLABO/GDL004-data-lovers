// importamos la función `example`
import { todosLosPersonajes } from '../src/data';

describe('todosLosPersonajes', () => {
  it('xxx', () => {
    // organizar arrange
    const input = [
      {
        name: 'Harry Potter',
        species: 'human',
        gender: 'male',
        house: 'Gryffindor',
        dateOfBirth: '31-07-1980',
        yearOfBirth: 1980,
        ancestry: 'half-blood',
        eyeColour: 'green',
        hairColour: 'black',
        wand: {
          wood: 'holly',
          core: 'phoenix feather',
          length: 11,
        },
        patronus: 'stag',
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: 'Daniel Radcliffe',
        alive: true,
        image: 'http://hp-api.herokuapp.com/images/harry.jpg',
      },
      {
        name: 'Hermione Granger',
        species: 'human',
        gender: 'female',
        house: 'Gryffindor',
        dateOfBirth: '19-09-1979',
        yearOfBirth: 1979,
        ancestry: 'muggleborn',
        eyeColour: 'brown',
        hairColour: 'brown',
        wand: {
          wood: 'vine',
          core: 'dragon heartstring',
          length: '',
        },
        patronus: 'otter',
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: 'Emma Watson',
        alive: true,
        image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
      },
    ];

    const expectedResults = [
      {
        name: 'Harry Potter',
        actor: 'Daniel Radcliffe',
        image: 'http://hp-api.herokuapp.com/images/harry.jpg',
      },
      {
        name: 'Hermione Granger',
        actor: 'Emma Watson',
        image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
      },
    ];

    // actuar    act
    const results = todosLosPersonajes(input);
    // afirmar   assert
    expect(results).toEqual(expectedResults);
  });
});

describe('ordenarPorNombre', () => {
  it('debería ordenar objetos en array por nombre', () => {
    // organizar arrange
    // actuar    act
    // afirmar   assert
  });
});
// organizar arrange
// actuar    act
// afirmar   assert
