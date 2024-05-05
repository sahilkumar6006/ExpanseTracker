import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: []
  },

  reducers: {
    adduser(state,action) {
      state.data.push(action.payload)
    },

    updateuser(state, action) {
      let temp = state.data
      temp.map((item,index) => {
        if(index == action.payload.index) {
          item.name = action.payload.name
          item.email = action.payload.email
          item.mobile = action.payload.mobile
          item.address = action.payload.address
          
        }
      })
      state.data = temp
    },
    
    deleteuser(state, action) {
      const newData = state.data.filter(( index) => index !== action.payload);
      return {
        ...state,
        data: newData
      };
    }
  },

 
})


export const {adduser, updateuser, deleteuser} = userSlice.actions
export default userSlice.reducer