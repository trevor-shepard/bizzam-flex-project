import axios from 'axios';

//Get all boards
export const getBoards = () => {
  return axios.get('/api/boards/');
};

// Fetch all boards by user
export const getUserBoards = id => {
  return axios.get(`/api/boards/user?id=${id}`)
}

//Create a board
export const createBoard = data => {
  return axios.post('/api/boards/', data);
};

//Fetch a board by its id
export const getBoardById = id => {
  return axios.get('/api/boards/', {id: id});
};

export const toggleSquare = (id, position) => {
  return axios.post('/api/boards/square', {id, position})
}

