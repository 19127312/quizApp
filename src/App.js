import AuthPage from './Component/Auth/AuthPage';
import MainPage from './Component/MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from './Component/PrivateRoutes';
function App() {

  return (
    <Routes>

      <Route path="login" element={<AuthPage />} />

      <Route element={<PrivateRoutes />} >
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes >
    // <div>
    //   <AuthPage />
    //   {/* <MainPage /> */}
    // </div>
  );
}

export default App;
