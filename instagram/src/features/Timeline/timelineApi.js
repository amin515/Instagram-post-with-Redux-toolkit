
// craete fetch api
import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

// fetch post
export const fetchPost = createAsyncThunk('timeline/fetchPost', async() => {
  const response = await axios.get('http://localhost:5050/posts')
  return response.data
})

// create post
export const createPost = createAsyncThunk('timeline/createPost', async(data) => {
  const response = await axios.post('http://localhost:5050/posts', data)
  return response.data
})
// delete post
export const deletePost = createAsyncThunk('timeline/deletePost', async(id) => {
 await axios.delete('http://localhost:5050/posts/' + id, )
  return id
})

