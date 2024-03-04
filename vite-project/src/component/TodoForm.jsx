import { useState } from "react";
import TodoItem from "./TodoItem";
import 'bootstrap/dist/css/bootstrap.css';

const TodoForm = () => {
    const todo = [
        { name: "task1", priority: "1" },
        // { name: "task2", priority: "2" },
    ];
    const [inputValue,setInputValue]=useState("");
    const handelclick=(event)=>{
        setInputValue(event.target.value)
    };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "99vw",
                height: "70vh",
                border: "6px duble black",
                borderRadius: "35px",
                minHeight: 300,
                textAlign: "center",
                backgroundImage: "url('vecteezy_desktop-source-code-and-wallpaper-by-coding-and-programming_3343387.jpg')",
                backgroundSize:"cover",
                fontSize: "2rem",
                color: "white",

            }}
        >

          <h4 className="text-white mb-4 fw-bold" >MyTodoForm</h4>
            <form action=""
              
            >

                <input type="text"  className="p-0 border  border-danger border-4 " name="fname" placeholder="task" id="removeelement"  />
                 <input type="text"  className="p-0 border  border-success border-4 d-block mt-3" name="fname" placeholder="task" id="colorstyle"
                    
                />
            </form>
            {/* <button className="btn btn-dnger"></button> */}
        

            {/* <input onChange={handelclick}></input>
            <h2>{inputValue}</h2> */}
          
            
{todo.map((element, index) => (
        <TodoItem piorit={element.priority} name={element.name} key={index} />
      ))}



        </div>

    );
};
export default TodoForm


