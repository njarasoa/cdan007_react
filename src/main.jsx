import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import tasksSlice from "./store/taskSlice";
import usersSlice from "./store/userSlice";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    users: usersSlice.reducer,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
