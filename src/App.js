import AuthPage from './Component/AuthPage/AuthPage';
import MainPage from './Component/MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from './Component/PrivateRoutes';
function App() {

  return (
    <Routes>

      <Route path="login" element={<AuthPage mode="login" />} />
      <Route path="register" element={<AuthPage mode="register" />} />
      <Route element={<PrivateRoutes />} >
        <Route path="/" element={<MainPage />} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes >
    // <div>
    //   <AuthPage />
    //   {/* <MainPage /> */}
    // </div>
  );
}

export default App;
