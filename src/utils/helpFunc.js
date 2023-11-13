export const normalizeName = (word) => {
  if(!word) {
    return '-'
  }
  return word[0].toUpperCase() + word.slice(1);
};

const colorsType = {
  bug: "#b1c12e",
  dark: "#4f3a2d",
  dragon: "#755edf",
  electric: "#fcbc17",
  fairy: "#f4b1f4",
  fighting: "#bb2f27",
  fire: "#e73b0c",
  flying: "#a3b3f7",
  ghost: "#6060b2",
  grass: "#74c236",
  ground: "#d3b357",
  ice: "#a3e7fd",
  normal: "#c8c4bc",
  poison: "#934594",
  psychic: "#ed4882",
  rock: "#b9a156",
  steel: "#b5b5c3",
  water: "#3295f6",
  shadow: "#3f4171",
  unknown: "#3c3837",
};

export const styleColor = (typeName) => {
  return {
    bgcolor: colorsType[typeName],
    borderRadius: "10px",
    padding: "4px",
  };
};
