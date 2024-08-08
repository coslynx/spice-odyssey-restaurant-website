import axios from 'axios';
import { prisma } from '../prisma/client';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getDishes = async () => {
  try {
    const response = await prisma.dish.findMany({
      include: {
        category: true,
      },
    });
    return response;
  } catch (error) {
    console.error('Error fetching dishes:', error);
    throw new Error('Failed to fetch dishes');
  }
};

export const createReservation = async (reservationData) => {
  try {
    const response = await prisma.reservation.create({
      data: reservationData,
    });
    return response;
  } catch (error) {
    console.error('Error creating reservation:', error);
    throw new Error('Failed to create reservation');
  }
};

export const sendMessage = async (messageData) => {
  try {
    const response = await api.post('/api/messages', messageData);
    return response;
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error('Failed to send message');
  }
};

export default api;