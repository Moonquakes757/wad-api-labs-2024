export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=21a43fd5490c151e42fbca2cf14ef964&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };