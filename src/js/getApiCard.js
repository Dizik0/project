const URL_API = 'https://app.ticketmaster.com/discovery/v2/';
const KAY = 'ddYr7gfn6Ox2WdacIvA82Nn8PmmMftns';
const country = 'US';
const getCardApi = async () => {
  const resultRequest = await fetch(
    `${URL_API}events.json?classificationName=music&countryCode=${country}&apikey=${KAY}`,
  );
  return await resultRequest.json();
};

export { getCardApi };
