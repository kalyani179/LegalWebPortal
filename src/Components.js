import React from "react"
function Card(props){
    return (
        <div className="card">
            <h4>{props.heading}</h4>
            <p>{props.desc}</p>
            <p>{props.count}</p>
        </div>
    )
}
function ListCard(props){
    return (
        <div className="list-card card">
            <h4>Registered Clients - </h4>
            <ul>
                {props.list.map((name,index)=>(
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    )
}
function NewCard(){
    return (
        <form id="add-notes-form" action="#" method="POST">
            <input name="notes-head" placeholder="Enter the notes title"></input>
            <textarea name="notes-desc" placeholder="Make a note"></textarea>
            <input type="number" name="notes-num" placeholder="Enter any numericals"></input>
            <button className="submit-btn" type="submit">Add</button>
        </form>
    )
}
function AddCard(){
    return (
        <div className="card" id="add-card">
            <h1>➕</h1>
        </div>
    )
}
export {Card};
export {AddCard};
export {ListCard};