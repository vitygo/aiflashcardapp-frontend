import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from '../supabaseClient'

// Перевірка активної сесії
export const checkSession = createAsyncThunk('auth/checkSession', async () => {
  const { data } = await supabase.auth.getSession()
  return data.session
})

// Логін
export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }, { rejectWithValue }) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return rejectWithValue(error.message)
    return data.session
  }
)

// Реєстрація
export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({ email, password }, { rejectWithValue }) => {
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) return rejectWithValue(error.message)
    return data.session
  }
)

// Вихід
export const signOut = createAsyncThunk('auth/signOut', async () => {
  await supabase.auth.signOut()
  return null
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    session: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkSession.fulfilled, (state, action) => {
        state.session = action.payload
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false
        state.session = action.payload
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.session = action.payload
      })
      .addCase(signOut.fulfilled, (state) => {
        state.session = null
      })
  },
})

export default authSlice.reducer
