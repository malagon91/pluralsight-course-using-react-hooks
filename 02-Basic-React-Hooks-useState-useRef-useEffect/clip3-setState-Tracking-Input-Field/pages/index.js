import React, {useState} from "react";

const InputElement = () => { /*useState*/
    //each usestate returns 2 params, the name of the value on state (inputText) and the second is the function to update the state value
    // In the () you need to set the initial state for the state declared in this case is a empty string and a empty array list
    const [inputText,setInputText] = useState("");
    const [historyList, setHistoryList] = useState([]);

    return <div><input
        onChange={(e) => {
            setInputText(e.target.value);
            setHistoryList([...historyList,e.target.value]);
        }}
        placeholder="Enter Some Text"/><br/>
        {inputText}
        <hr/><br/>
        <ul>
            {historyList.map((rec)=> {
                return <div>{rec}</div>
            })}
        </ul>
    </div>
};

export default InputElement;
