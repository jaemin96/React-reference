import { ReactElement, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import FirebasePage from './pages/firebase';

const Home = lazy(() => import('./pages/home'));
const TestPage = lazy(() => import('./pages/test'));
const ErrorPage = lazy(() => import('./pages/error-page'));

const Router = (): ReactElement => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/firebase" element={<FirebasePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
