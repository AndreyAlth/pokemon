const toggleFavorite = (id) => {
  console.log("toggle favorite llamado");

  let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId != id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavotire = (id) => {

  if (typeof window === 'undefined') return false

  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  return favorites.includes(id);
};

export default {
  toggleFavorite,
  existInFavotire,
};
