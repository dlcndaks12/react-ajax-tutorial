import axios from 'axios';

export const getPost = (postId) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
};

export function getComment(postId) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
};