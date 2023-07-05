import { createContext,useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    
    const [showTask, setShowTask] = useState(true);
    const handleShowTask = () => {
    setShowTask(!showTask);
  }
    return (
        <DataContext.Provider value={{
            handleShowTask,showTask
        }}>
            {children}
            </DataContext.Provider>
    )
}

export default DataContext;