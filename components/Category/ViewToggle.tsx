import { FaListUl } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";

interface Props {
    view: "grid" | "list";
    setView: (view: "grid" | "list") => void;
}

export default function ViewToggle({ view, setView }: Props) {
    return (
        <div className='flex items-center gap-x-3 ml-auto'>
            <button
                onClick={() => setView("list")}
                className={`${view === "list" ? "text-primary" : "text-desc"} text-xl text-desc`}>
                <FaListUl />
            </button>
            <button
                onClick={() => setView("grid")}
                className={`${view === "grid" ? "text-primary" : "text-desc"} text-xl text-desc`}>
                <IoGridOutline />
            </button>
        </div>
    );
}