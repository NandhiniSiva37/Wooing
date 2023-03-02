import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Counter from '../pages/Counter';
import NotFound from '../pages/NotFound';

function MainRoutes() {
  return (
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="counter" element={<Counter />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default MainRoutes;
