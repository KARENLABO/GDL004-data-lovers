export const todosLosPersonajes = (data) => {
  const personajes = [];

  data.forEach((element) => {
    personajes.push({
      image: element.image,
      name: element.name,
      actor: element.actor,
    });
  });
  return personajes;
};

export const hombres = (data) => data.filter((personaje) => personaje.gender === 'male');

export const mujeres = (data) => data.filter((personaje) => personaje.gender === 'female');

export const filtroAlumnosGry = (data) => data.filter((personaje) => personaje.house === 'Gryffindor');
export const filtroAlumnosSly = (data) => data.filter((personaje) => personaje.house === 'Slytherin');
export const filtroAlumnosHuf = (data) => data.filter((personaje) => personaje.house === 'Hufflepuff');
export const filtroAlumnosRav = (data) => data.filter((personaje) => personaje.house === 'Ravenclaw');

export const ordenarPorNombre = (data) => data.sort((a, b) => a.name.localeCompare(b.name));
