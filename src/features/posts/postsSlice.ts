import { createSlice } from '@reduxjs/toolkit'

export interface Post {
  id: string;
  title: string;
  content: string;
}

// Discuss: What happens when this initial state isn't passed through?
const initialState: Post[] = [
  { id: "1", title: "A Little Prince", content: "Hello!"},
  { id: "2", title: "Animal Farm", content: "Another review"}
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})

export default postsSlice.reducer