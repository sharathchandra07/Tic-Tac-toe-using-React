import React, {useState} from 'react'
import './Compo.css'
const Compo = () => {
    let [action, setaction] = useState("X");
    let [cnt, setcnt] = useState(0);
    let [arr, setArr] = useState(["","","","","","","","",""]);
    let [text, setText] = useState(false);
    let [head, setHead] = useState("Tic Tac Toe Game");
    const toggle = (e, num) => {
        if (arr[num]!=="" || text) {
            return;
        }
        const newarr = [...arr]
        if (cnt%2 === 0) {
            newarr[num] = "X";
            e.target.innerHTML = action;
        } else {
            newarr[num] = "O";
            e.target.innerHTML = action; 
        }
        setArr(newarr);
        setaction(action === "X" ? "O" : "X");
        setcnt((cnt) => cnt+1);
        iswin(newarr);
    }
    const iswin = (arr) => {
        if (cnt+1 === 9) {
            setHead("OOPS! It's a Draw Match");
        }
        if (arr[0]!=="" && arr[1]!=="" && arr[2] !=="" && arr[0] === arr[1] && arr[1] === arr[2]) {
            setText(true);
            setHead("Congratulations "+action+" wins");
        } else if (arr[3]!=="" && arr[4]!=="" && arr[5] !==""  && arr[3] === arr[4] && arr[4] === arr[5]) {
            setText(true);
            setHead("Congratulations "+action+" wins");
        } else if (arr[6]!=="" && arr[7]!=="" && arr[8] !==""  && arr[6] === arr[7] && arr[7] === arr[8]) {
            setText(true);
            setHead("Congratulations "+action+" wins");
        } else if (arr[0]!=="" && arr[3]!=="" && arr[6] !==""  && arr[0] === arr[3] && arr[3] === arr[6]) {
            setText(true);
            setHead("Congratulations "+action+" wins");
        } else if (arr[1]!=="" && arr[4]!=="" && arr[7] !==""  && arr[1] === arr[4] && arr[4] === arr[7]) {
            setText(true);
            setHead("Congratulations "+action+" wins");
        } else if (arr[2]!=="" && arr[5]!=="" && arr[8] !==""  && arr[2] === arr[5] && arr[5] === arr[8]) {
            setText(true);
            setHead("Congratulations "+action+" wins");
        } else if (arr[0]!=="" && arr[4]!=="" && arr[8] !==""  && arr[0] === arr[4] && arr[4] === arr[8]) {
            setText(true);
            setHead("Congratulations "+action+" wins");
        } else if (arr[2]!=="" && arr[4]!=="" && arr[6] !==""  && arr[2] === arr[4] && arr[4] === arr[6]) {
            setText(true);
            setHead("Congratulations "+action+" wins");
        } else {
            return;
        }
    }
    const reset = () => {
        window.location = "/";
    };
    return (
        <div>
            <h1 className='mt-4 text-white'><b>{head}</b></h1>
        <div className="container">
            <div className="row">
                <button className="col" onClick={(e)=>{toggle(e, 0)}}></button>
                <button className="col" onClick={(e)=>{toggle(e, 1)}}></button>
                <button className="col" onClick={(e)=>{toggle(e, 2)}}></button>
            </div>
            <div className="row">
                <button className="col" onClick={(e)=>{toggle(e, 3)}}></button>
                <button className="col" onClick={(e)=>{toggle(e, 4)}}></button>
                <button className="col" onClick={(e)=>{toggle(e, 5)}}></button>
            </div>
            <div className="row">
                <button className="col" onClick={(e)=>{toggle(e, 6)}}></button>
                <button className="col" onClick={(e)=>{toggle(e, 7)}}></button>
                <button className="col" onClick={(e)=>{toggle(e, 8)}}></button>
            </div>
        </div>
        <button className='btn btn-secondary' onClick={reset}><b>Reset</b></button>
        </div>
    )
}

export default Compo
