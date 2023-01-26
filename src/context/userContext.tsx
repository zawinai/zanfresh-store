import { createContext, useContext } from "react";
import { ShopContextProviderProps, initialValues } from "@/types";
import { useFirebase } from "@/hooks/useFirebase";

// export const ShopContext = createContext<initialValues>({user: null,loading: true})

// export const ShopContextProvider = ({ children }: ShopContextProviderProps) => {

//     const authState = useFirebase()

//   return (
//     <ShopContext.Provider value={authState}>
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export const useShop = () => useContext(ShopContext);
