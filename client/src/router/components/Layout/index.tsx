import { Outlet } from 'react-router-dom';

const Layout = () => {
    return false ? <div>Loading</div> : <Outlet />
};

export default Layout;