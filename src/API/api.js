import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
    'https://65365a35bb226bb85dd1f6e0.mockapi.io/contacts';

//get all contacts
const fetchAllContacts = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId: number, thunkAPI) => {
    const response = await userAPI.fetchById(userId)
    return response.data
  }
)

///////////////////////////////////////////////////////////

// export const fetchContacts = createAsyncThunk(
//     'contacts/fetchAll',
//     async (_, { rejectWithValue }) => {
//         try {
//             const response = await axios.get('/contacts');
//             return response.data;
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );

// export const addContact = createAsyncThunk(
//     'contacts/addContact',
//     async (contact, { rejectWithValue }) => {
//         try {
//             const response = await axios.post('/contacts', contact);
//             return response.data;
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );

// export const deleteContact = createAsyncThunk(
//     'tasks/deleteContact',
//     async (taskId, { rejectWithValue }) => {
//         try {
//             const response = await axios.delete(`/contacts/${taskId}`);
//             return response.data;
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );