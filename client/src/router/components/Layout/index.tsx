import { Outlet } from 'react-router-dom';

const Layout = () => {
    return true ? <div>Loading</div> : <Outlet />
};

export default Layout;