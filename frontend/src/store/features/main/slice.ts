import { createSlice } from '@reduxjs/toolkit'


type MainSliceType = {
    documents: {
        [key: string]: any 
    }
}


const initialState: MainSliceType = {
    documents: {}
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        
    },
})

// Action creators are generated for each case reducer function
// export const { addStudent, addBook, removeBook } = mainSlice.actions

// export const getAllStudents = (state: RootState) => state.main.students;
// export const getStudentById = (state: RootState) => (id) => state.main.students[id] || null;

export default mainSlice.reducer