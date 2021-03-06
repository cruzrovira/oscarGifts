const getGifts = async ({ keyword = "morty" } = {}) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=es`;
  return await fetch(url)
    .then((request) => request.json())
    .then((request) => {
      const { data } = request;
      const giftsData = data.map((item) => ({
        id: item.id,
        title: item.title,
        url: item.images.downsized_medium.url,
        slug: item.slug,
      }));
      return giftsData;
    });
};

export default getGifts;
