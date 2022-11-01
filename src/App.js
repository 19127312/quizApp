import AuthPage from './Component/AuthPage/AuthPage';
import MainPage from './Component/MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from './Component/PrivateRoutes';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
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
        <Route path="login" element={<AuthPage mode="login" />} />
        <Route path="register" element={<AuthPage mode="register" />} />
        <Route element={<PrivateRoutes />} >
          <Route path="/" element={<MainPage />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
