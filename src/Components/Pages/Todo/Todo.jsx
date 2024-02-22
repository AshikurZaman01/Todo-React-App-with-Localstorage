import { useState, useEffect } from "react";
import { CgMathPlus } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";

const Todo = () => {

    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);

    useEffect(() => {
        const storedItems = localStorage.getItem("TodoItems");
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    const handleAddItem = () => {
        if (!inputData) {
            return;
        }

        const updatedItems = [...items, inputData];
        setItems(updatedItems);
        localStorage.setItem("TodoItems", JSON.stringify(updatedItems));

        setInputData("");
    }

    const handleDeleteItem = (id) => {
        const updatedItems = items.filter((_, index) => index !== id);
        setItems(updatedItems);
        localStorage.setItem("TodoItems", JSON.stringify(updatedItems));
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="main-div">
                <div className="child-div clear-left space-y-2">
                    <h1 className="text-xl text-warning font-medium text-center mb-3">Add Your List Here</h1>
                    <div className="addItem relative">
                        <input 
                            value={inputData} 
                            onChange={(e) => setInputData(e.target.value)} 
                            type="text" 
                            className="w-[300px] text-xl p-2 outline outline-warning rounded" 
                            placeholder="Add Items..." 
                            name="" 
                            id="" 
                        />
                        <CgMathPlus 
                            onClick={handleAddItem} 
                            className="addIcon absolute text-2xl font-bold top-2.5 right-2 cursor-pointer" 
                        />
                    </div>
                    <div className="showItems bg-purple-500 rounded">
                        {items.map((item, index) => (
                            <div key={index} className="eachItems relative">
                                <h3 className="px-2 py-2 text-xl font-semibold text-white">{item}</h3>
                                <CgCloseO 
                                    onClick={() => handleDeleteItem(index)} 
                                    className="itemTrash absolute top-3.5 right-2 text-xl cursor-pointer" 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;
