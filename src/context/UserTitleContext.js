import { createContext } from "react"

const UserTitleContext = createContext({
    userTitle: {
        username: '',
        title: '',
    },
    setUserTitle: () => {
        
    },
});

export default UserTitleContext;