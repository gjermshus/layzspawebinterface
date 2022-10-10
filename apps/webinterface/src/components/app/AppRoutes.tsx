import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../dashboard/Dashboard';
import { Home } from '../home/Home';

export function AppRoutes() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
    );
}
