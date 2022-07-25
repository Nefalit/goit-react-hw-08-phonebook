import { useEffect } from "react";
import {useDispatch} from "react-redux";

import { getCurrent } from "./redux/auth/auth-operations";

import Header from "./components/Header/Header";
import UserRoutes from "./UserRoutes";


function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getCurrent());
  }, [dispatch]);
  
  return (
    <div className="App">
      <Header />
      <UserRoutes />
    </div>
  );
}

export default App;