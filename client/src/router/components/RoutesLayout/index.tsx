import { routesArr } from "../../routes";
import { Routes, Route } from 'react-router-dom'

const RoutesLayout = () => {
    return (
        <Routes>
            {routesArr.map(({ path, Component }) =>
                <Route path={path} element={<Component />} key={path} />)
            }
        </Routes>
    );
};

export default RoutesLayout;