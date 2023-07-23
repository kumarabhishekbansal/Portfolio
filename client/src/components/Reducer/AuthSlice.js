import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "./AuthService"
let PortfolioUser = JSON.parse(localStorage.getItem("PortfolioUser"));
let token = JSON.parse(localStorage.getItem("token"));

const initialState = {
PortfolioUser: PortfolioUser ? PortfolioUser.data : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
  token:token ? token : null,
};


// getAdmin


export const getAdmin = createAsyncThunk(
  "auth/getAdmin",
  async (thunkAPI) => {
    try {
      console.log("auth slice user , ");
      return await AuthService.getAdmin();
    } catch (error) {
      console.log("error auth  slice : ", error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log("message auth  slice : ", message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);


// register user

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      console.log("auth slice user , ", user);
      return await AuthService.register(user);
    } catch (error) {
      console.log("error auth  slice : ", error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log("message auth  slice : ", message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    console.log("auth servivce login ,",user);
    return await AuthService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log("message auth  slice : ", message);
    return thunkAPI.rejectWithValue(message);
  }
});
// logout user
export const logout = createAsyncThunk(
  "auth/logout",
  async (user, thunkAPI) => {
    try {
      return await AuthService.logout();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);


// send home page

export const sendhomepage = createAsyncThunk(
  "auth/sendhomepage",
  async (user, thunkAPI) => {
    try {
      console.log("auth slice user , ", user);
      return await AuthService.sendhomepage(user);
    } catch (error) {
      console.log("error auth  slice : ", error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log("message auth  slice : ", message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// send about page

export const sendaboutpage = createAsyncThunk(
  "auth/sendaboutpage",
  async (user, thunkAPI) => {
    try {
      console.log("auth slice user , ", user);
      return await AuthService.sendaboutpage(user);
    } catch (error) {
      console.log("error auth  slice : ", error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log("message auth  slice : ", message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// send achievement page

export const sendachievementpage = createAsyncThunk(
  "auth/sendachievementpage",
  async (user, thunkAPI) => {
    try {
      console.log("auth slice user , ", user);
      return await AuthService.sendachievementpage(user);
    } catch (error) {
      console.log("error auth  slice : ", error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log("message auth  slice : ", message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// send footer page

export const sendfooterpage = createAsyncThunk(
  "auth/sendfooterpage",
  async (user, thunkAPI) => {
    try {
      console.log("auth slice user , ", user);
      return await AuthService.sendfooterpage(user);
    } catch (error) {
      console.log("error auth  slice : ", error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log("message auth  slice : ", message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// send project page

export const sendprojectpage = createAsyncThunk(
  "auth/sendprojectpage",
  async (user, thunkAPI) => {
    try {
      console.log("auth slice user , ", user);
      return await AuthService.sendprojectpage(user);
    } catch (error) {
      console.log("error auth  slice : ", error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log("message auth  slice : ", message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// send add project images page

export const sendaddprojectimagepage = createAsyncThunk(
  "auth/sendaddprojectimagepage",
  async (user, thunkAPI) => {
    try {
      console.log("auth slice user , ", user);
      return await AuthService.sendaddprojectimagepage(user);
    } catch (error) {
      console.log("error auth  slice : ", error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log("message auth  slice : ", message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// send service page

export const sendservicepage = createAsyncThunk(
  "auth/sendservicepage",
  async (user, thunkAPI) => {
    try {
      console.log("auth slice user , ", user);
      return await AuthService.sendservicepage(user);
    } catch (error) {
      console.log("error auth  slice : ", error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log("message auth  slice : ", message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// send technology page

export const sendtechnologypage = createAsyncThunk(
  "auth/sendtechnologypage",
  async (user, thunkAPI) => {
    try {
      console.log("auth slice user , ", user);
      return await AuthService.sendtechnologypage(user);
    } catch (error) {
      console.log("error auth  slice : ", error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log("message auth  slice : ", message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// send work expierence page

export const sendworkexppage = createAsyncThunk(
  "auth/sendworkexppage",
  async (user, thunkAPI) => {
    try {
      console.log("auth slice user , ", user);
      return await AuthService.sendworkexppage(user);
    } catch (error) {
      console.log("error auth  slice : ", error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log("message auth  slice : ", message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);



const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.PortfolioUser = action.payload.data;
        console.log("register action payload : ",action.payload);
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.PortfolioUser = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.PortfolioUser = action.payload.data;
        state.token="ThisisPortfolioOfAbhishek$#233]^$32534"
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.PortfolioUser = null;
        
      })
      .addCase(logout.fulfilled, (state) => {
        state.PortfolioUser = null;
      })
      .addCase(sendhomepage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendhomepage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // state.PortfolioUser = action.payload.data;
      })
      .addCase(sendhomepage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        // state.PortfolioUser = null;
      })

      .addCase(sendaboutpage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendaboutpage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // state.PortfolioUser = action.payload.data;
      })
      .addCase(sendaboutpage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        // state.PortfolioUser = null;
      })
      .addCase(sendachievementpage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendachievementpage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // state.PortfolioUser = action.payload.data;
      })
      .addCase(sendachievementpage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        // state.PortfolioUser = null;
      })
      .addCase(sendfooterpage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendfooterpage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // state.PortfolioUser = action.payload.data;
      })
      .addCase(sendfooterpage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        // state.PortfolioUser = null;
      })

      .addCase(sendprojectpage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendprojectpage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // state.PortfolioUser = action.payload.data;
      })
      .addCase(sendprojectpage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        // state.PortfolioUser = null;
      })
      .addCase(sendservicepage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendservicepage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // state.PortfolioUser = action.payload.data;
      })
      .addCase(sendservicepage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        // state.PortfolioUser = null;
      })

      .addCase(sendtechnologypage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendtechnologypage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // state.PortfolioUser = action.payload.data;
      })
      .addCase(sendtechnologypage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        // state.PortfolioUser = null;
      })

      .addCase(sendaddprojectimagepage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendaddprojectimagepage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // state.PortfolioUser = action.payload.data;
      })
      .addCase(sendaddprojectimagepage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        // state.PortfolioUser = null;
      })


      .addCase(sendworkexppage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendworkexppage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // state.PortfolioUser = action.payload.data;
      })
      .addCase(sendworkexppage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        // state.PortfolioUser = null;
      })

      .addCase(getAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.PortfolioUser = action.payload.data;
      })
      .addCase(getAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.PortfolioUser = null;
      })
  },
});

export const { reset } = AuthSlice.actions;
export default AuthSlice.reducer;
