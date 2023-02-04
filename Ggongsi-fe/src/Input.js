import { useState } from 'react';


const Input = ()=> {
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");

    return (
        <div classname = "Input">
            <h2>학번과 이름을 입력하세요.</h2>
            <div>
                <label> 학번 : {" "}
                <input value = {number} 
                style={{ paddingTop: '5px', marginTop: '10px'}}
                onChange={(e)=>{
                    setNumber(e.target.value);
                }}
                /> </label>
            </div>
            <div>
                <label> 이름 : {" "}
                <input value = {name} 
                style={{ paddingTop: '5px', marginTop: '10px', marginBottom: '25px'}}
                onChange={(e)=>{
                    setName(e.target.value);
                }}
                /> </label>
            </div>
            <div>
                <button> Next </button>
            </div>
        </div>
    );
}

export default Input;