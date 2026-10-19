import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export interface Role {
//   id: number;
//   name: string;
// }

export interface User {
  name: string;
  age: number;
  role: string;
}

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk<User[]>(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/users');

      if (!response.ok) {
        return rejectWithValue(`Request failed: ${response.status}`);
      }

      return (await response.json()) as User[];
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Failed to fetch users',
      );
    }
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Add regular reducers here if needed.
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as string) ?? action.error.message ?? 'Request failed';
      });
  },
});

export default usersSlice.reducer;
