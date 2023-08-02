import { IRootState } from "../store"
import { useSelector, TypedUseSelectorHook } from 'react-redux';


export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector