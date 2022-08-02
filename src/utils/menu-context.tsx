import { useContext, createContext } from 'react'

export const MenuContext = createContext<{menu: () => unknown, setMenu: unknown}>(undefined)
export default function useMenuContext() {
  return useContext(MenuContext)
}
