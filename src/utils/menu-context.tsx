import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export const MenuContext = createContext<{
    menu: boolean;
    setMenu: Dispatch<SetStateAction<boolean>>;
    defaultMenuCollapsed: boolean;
}>(undefined);
export default function useMenuContext() {
    return useContext(MenuContext);
}
