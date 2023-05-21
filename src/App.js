import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from 'components/sharedLayout/SharedLayout';
import Home from 'pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        {/* <Route element={<About />} />
        <Route element={<Contact />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
