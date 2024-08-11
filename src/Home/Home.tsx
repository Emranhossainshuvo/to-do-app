import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full">
                <div className="w-[16%]">
                <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default Home;