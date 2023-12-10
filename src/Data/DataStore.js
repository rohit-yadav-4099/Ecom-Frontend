import React, { createContext, useState } from "react";
import Home from "../Components/Home";

export const Store = createContext();

function DataStore(props) {
    const [data, setdata] = useState([
        {
            id: 1,
            category: "iphone",
            name: "iphone15",
            image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202309/untitled_design_47-sixteen_nine.jpg?size=948:533",
            text: "iphone 15"
        },
        {
            id: 2,
            category: "iphone",
            name: "iphone14",
            image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202309/untitled_design_47-sixteen_nine.jpg?size=948:533",
            text: "iphone 15"
        }
    ])
    console.log(data)
    return (
        <>
            <Store.Provider value={[data, setdata ]}>
            {props.children}
            </Store.Provider>
        </>
    )
}
export default DataStore;