import { CgMathPlus } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";

const Todo = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">

            <div className="main-div ">
                <div className="child-div clear-left space-y-2">
                    <h1 className="text-xl text-warning font-medium text-center mb-3">Add Your List Here</h1>

                    <div className="addItem relative">
                        <input type="text" className="w-[300px] text-xl p-2 outline outline-warning rounded" placeholder="Add Items..." name="" id="" />
                        <CgMathPlus className="addIcon absolute text-2xl font-bold top-2.5 right-2 cursor-pointer" />
                    </div>

                    <div className="showItems bg-purple-500 rounded ">
                        <div className="eachItems relative">
                            <h3 className="px-2 py-2 text-xl font-semibold text-white">Apple</h3>
                            <CgCloseO className="itemTrash absolute top-3.5 right-2 text-xl cursor-pointer" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Todo;