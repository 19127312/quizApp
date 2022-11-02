
import MainPage from './Component/MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from './Component/PrivateRoutes';
import SingupPage from "./Component/AuthPage/SignupPage"
import LoginPage from './Component/AuthPage/LoginPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

function App() {

  return (
    // <Routes>

    // </Routes >
    // <div>
    //   <AuthPage />
    //   {/* <MainPage /> */}
    // </div>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<SingupPage />} />
        <Route element={<PrivateRoutes />} >
          <Route path="/" element={<MainPage />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
