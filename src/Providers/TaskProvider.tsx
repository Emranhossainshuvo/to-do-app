import { createContext, useState } from "react";

export const TaskContext = createContext(null)


const TaskProvier = ({ children }) => {


    const [openForm, setOpenForm] = useState(false);

    const authData = {
        openForm,
        setOpenForm
    }

    return (
        <TaskContext.Provider value={authData}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvier;