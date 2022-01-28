import React, {useContext} from "react";

export const UserContext = React.createContext();

const UserProvider = ({children}) => {
    const [userDetails, dispatch] = useContext(userReducer,initialUserDetails);

    return (
        <UserContext.Provider value={{userDetails,dispatch}} >
            {children}
        </UserContext.Provider>
    )
}