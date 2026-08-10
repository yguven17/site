import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Data
import { githubUsername } from "../data";
import snapshot from "../github-snapshot.json";

/* The snapshot is baked in at build time (scripts/fetch-github.js), so the page
   renders without waiting on the GitHub API. The live fetch below only
   refreshes it; when it fails - most often the 60-requests-per-hour
   unauthenticated rate limit - we keep the snapshot and show nothing broken. */
const initialState = {
  isLoading: !snapshot.user,
  error: "",
  data: snapshot.user || {},
};

export const url = `https://api.github.com/users/${githubUsername}`;

export const fetchGitHubInfo = createAsyncThunk(
  "home/fetchGitHubInfo",
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

export const homeSlice = createSlice({
  name: "home",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGitHubInfo.pending, (state) => {
        // Only block the UI when there is nothing to show yet.
        state.isLoading = !state.data.name;
        state.error = "";
      })
      .addCase(fetchGitHubInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.data = action.payload;
      })
      .addCase(fetchGitHubInfo.rejected, (state, action) => {
        state.isLoading = false;
        // A failed refresh is not an error if the snapshot already covers us.
        state.error = state.data.name ? "" : action.payload;
      });
  },
});

export const selectIsLoading = (state) => state.home.isLoading;
export const selectError = (state) => state.home.error;
export const selectData = (state) => state.home.data;

export default homeSlice.reducer;
