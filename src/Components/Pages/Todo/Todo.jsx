import { useState } from "react";
import { CgMathPlus } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";

const Todo = () => {

    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);

    const HandleAddItem = () => {

        if (!inputData) {

        } else {
            setItems([...items, inputData])
            console.log(items);
        }

        setInputData("");
    }

    const handleDeleteItem = (id) => {
        const updatedItems = items.filter((item, indx) => indx !== id)
        console.log(updatedItems)
        setItems(updatedItems)
    }

    return (
        <div className="min-h-screen flex justify-center items-center">

            <div className="main-div ">
                <div className="child-div clear-left space-y-2">
                    <h1 className="text-xl text-warning font-medium text-center mb-3">Add Your List Here</h1>

                    <div className="addItem relative">
                        <input value={inputData} onChange={(e) => setInputData(e.target.value)} type="text" className="w-[300px] text-xl p-2 outline outline-warning rounded" placeholder="Add Items..." name="" id="" />
                        <CgMathPlus onClick={HandleAddItem} className="addIcon absolute text-2xl font-bold top-2.5 right-2 cursor-pointer" />
                    </div>

                    <div className="showItems bg-purple-500 rounded  ">

                        {
                            items.map((item, indx) => {
                                return (
                                    <div key={indx} className="eachItems relative">
                                        <h3 className="px-2 py-2 text-xl font-semibold text-white">{item}</h3>
                                        <CgCloseO onClick={() => handleDeleteItem(indx)} className="itemTrash absolute top-3.5 right-2 text-xl cursor-pointer" />
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Todo;