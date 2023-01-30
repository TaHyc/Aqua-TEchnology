import { configureStore } from '@reduxjs/toolkit'
import countTovar from './slices/countTovarSlice'
import filter from './slices/filterSlice' 
import korzina from './slices/korzinaSlice'
import userSlice from './slices/userSlice'



export const store = configureStore({
  reducer: {
    count: countTovar,
    filter,
    korzina,
    user: userSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch