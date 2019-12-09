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

export const ordenarPorNombre = (data) => data.sort((a, b) => a.name.localeCompare(b.name));