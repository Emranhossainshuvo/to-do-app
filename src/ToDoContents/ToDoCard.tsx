
const ToDoCard = ({badge, title, description, deadline}) => {
    return (
        <div className="ps-5">
            <div className="flex mb-1 justify-between items-center">
                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">{badge}</span>
                <p className="text-xl font-semibold text-gray-900">...</p>
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-[#918e9d] text-[12px] font-semibold">{description}</p>

            <p><span className="font-semibold text-[#838383]">Deadline:</span> {deadline}</p>
        </div>
    );
};

export default ToDoCard;