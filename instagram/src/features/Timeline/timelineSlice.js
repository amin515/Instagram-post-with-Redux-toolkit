// create post slice
import { createSlice } from "@reduxjs/toolkit";
import { createPost, fetchPost } from "./timelineApi";
export const postSlice = createSlice({
  name: "timeline",
  initialState: {
    posts: [],
    status: "idle" /*loading | success | failed*/,
    error: null,
    message: null,
  },
  reducers: {},
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
  },
});

// state decleard

export const getAllPosts = (state) => state.timeline.posts
export const {} = postSlice.actions;
export default postSlice.reducer;
