
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/auth/Login.page';
import { AppRoutes } from './routes/app.routes';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<AppRoutes />} />
    </Routes>
  );
}

export default App;