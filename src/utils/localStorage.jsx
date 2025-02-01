export const getFavoritesFromStorage = () => {
  const savedFavorites = localStorage.getItem("favorites");
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

export const saveFavoritesToStorage = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};
