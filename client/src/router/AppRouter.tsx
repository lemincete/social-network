import Layout from './components/Layout';
import RoutesLayout from './components/RoutesLayout';

import { Routes, Route } from 'react-router-dom'

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='*' element={<RoutesLayout />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;