import { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';
import Loader from '../Loader';

import { useFetching } from '../../../hooks/useFetching';

import { fetchProfileRefreshToken } from '../../api/fetchProfileRefreshToken';

import { useAppDispatch } from '../../../hooks/useAppDispatch';

const Layout = () => {

    const dispatch = useAppDispatch();

    const [isRefresh, setIsRefresh] = useState<boolean>(false);

    const [getProfileRefreshToken, isGetProfileRefreshTokenLoading] = useFetching(async () => {
        await fetchProfileRefreshToken(dispatch, setIsRefresh);
    })

    useEffect(() => {
        localStorage.getItem('jwt') ? getProfileRefreshToken() : setIsRefresh(true);
    }, [])

    return isGetProfileRefreshTokenLoading || !isRefresh ? <Loader /> : <Outlet />
};

export default Layout;