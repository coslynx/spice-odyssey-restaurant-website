import { haversineDistance } from 'haversine-distance';

export const getDistance = (lat1, lon1, lat2, lon2) => {
  try {
    const distance = haversineDistance({ latitude: lat1, longitude: lon1 }, { latitude: lat2, longitude: lon2 });
    return distance;
  } catch (error) {
    console.error('Error calculating distance:', error);
    return null;
  }
};