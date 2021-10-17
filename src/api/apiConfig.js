const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "b903c74e3b3d186abf3847f34ca24933",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
