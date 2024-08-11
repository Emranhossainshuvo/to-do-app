import ToDoCard from "./ToDoCard";

const ToDoContents = () => {
    return (
        <>
            {/* this div will hold everything in this component */}
            <div>
                <div className="bg-[#ecedee]">
                    <li className="marker:text-[#5030e5] text-center mb-5">To do <span className="bg-[#e0e0e0] px-2 py-1  rounded-[50px]">3</span></li>
                    <hr className="h-1 bg-[#5030e5]" />
                    <ToDoCard badge={'red'} description={'Brainstorming brings team members diverse experience into play.'} title={'Brainstorming'} deadline={'12/5/24'} />
                </div>
            </div>
        </>
    );
};

export default ToDoContents;