import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Data
import { githubUsername } from "../data";
import snapshot from "../github-snapshot.json";

/* Same shape as homeSlice: serve the build-time snapshot immediately, treat the
   live call as a background refresh that is allowed to fail. */
const initialState = {
  error: "",
  isLoading: snapshot.repos.length === 0,
  data: snapshot.repos,
};

export const url = `https://api.github.com/users/${githubUsername}/repos?per_page=100`;

export const fetchGitHubReops = createAsyncThunk(
  "allProjects/fetchGitHubReops",
  async (thunkApi, { rejectWithValue }) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          response.status === 403
            ? "GitHub API rate limit reached"
            : `GitHub API returned ${response.status}`
        );
      }
      return await response.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const allProjectsSlice = createSlice({
  name: "allProjects",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGitHubReops.pending, (state) => {
        state.isLoading = state.data.length === 0;
        state.error = "";
      })
      .addCase(fetchGitHubReops.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.data = action.payload;
      })
      .addCase(fetchGitHubReops.rejected, (state, action) => {
        state.isLoading = false;
        state.error = state.data.length ? "" : action.payload;
      });
  },
});

export const selectIsLoading = (state) => state.allProjects.isLoading;
export const selectError = (state) => state.allProjects.error;
export const selectData = (state) => state.allProjects.data;

export default allProjectsSlice.reducer;
