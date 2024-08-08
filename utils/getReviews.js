import axios from 'axios';

const yelpApiKey = process.env.YELP_API_KEY;

export const getReviews = async (restaurantId) => {
  try {
    const response = await axios.get(
      `https://api.yelp.com/v3/businesses/${restaurantId}/reviews`,
      {
        headers: {
          Authorization: `Bearer ${yelpApiKey}`,
        },
      }
    );

    return response.data.reviews;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
};