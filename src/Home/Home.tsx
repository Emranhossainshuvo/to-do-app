import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import ToDoContents from "../ToDoContents/ToDoContents";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full flex">
                <div className="w-[16%]">
                    <Sidebar />
                </div>
                <div className="w-full">
                    <ToDoContents />
                </div>
            </div>
        </div>
    );
};

export default Home;