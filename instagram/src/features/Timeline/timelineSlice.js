// create post slice
import { createSlice } from "@reduxjs/toolkit";
import { createPost, deletePost, fetchPost } from "./timelineApi";
export const postSlice = createSlice({
  name: "timeline",
  initialState: {
    posts: [],
    status: "idle" /*loading | success | failed*/,
    error: null,
    message: null,
    
  },
  reducers: {
    makeLove : (state, {type, payload}) => {
      state.posts[state.posts.findIndex((data) => data.id === payload)].reactions.love += 1
    },
    makeLike : (state, {type, payload}) => {
      state.posts[state.posts.findIndex((data) => data.id === payload)].reactions.like += 1
    },
    makeDislike : (state, {type, payload}) => {
      state.posts[state.posts.findIndex((data) => data.id === payload)].reactions.dislike += 1
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchPost.pending, (state, { type, payload }) => {
      state.status = "loading";
      state.posts = [];
      state.error = null;
      state.message = "Data loading";
    })
    .addCase(fetchPost.fulfilled, (state, { type, payload }) => {
      state.status = "success";
      state.posts = payload;
      state.error = null;
      state.message = "All posts loaded";
    })
    .addCase(fetchPost.rejected, (state, { type, payload }) => {
      state.status = "failed";
      state.message = "Data load failed";
    })
    .addCase(createPost.pending, (state, { type, payload }) => {
      state.status = "loading";
      state.message = 'waiting for data loading'
    })
    .addCase(createPost.fulfilled, (state, { type, payload }) => {
      state.status = "success";
      state.posts.push(payload);
      state.message = 'data created successful'
    })
    .addCase(createPost.rejected, (state, { type, payload }) => {
      state.status = "failed";
      state.message = 'data created failed'
    })
    .addCase(deletePost.fulfilled, (state, { type, payload }) => {
      state.status = "success";
      state.message = 'data delete successfull';
      state.posts = state.posts.filter((data) => data.id !== payload)
    })
  },
});

// state decleard

export const getAllPosts = (state) => state.timeline.posts
export const {makeLove, makeLike, makeDislike} = postSlice.actions;
export default postSlice.reducer;
