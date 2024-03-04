


const TodoItem = ({name}) => {




// }
function remove() {
  var element = document.getElementById("removeelement");
  element.parentNode.removeChild(element);
}
function linein(){
document.getElementById("colorstyle").style.textDecoration="line-through";
document.getElementById("colorstyle").style.color="red";


}



  return (
    <div
      style={{
        borderBottom:"1px solid white",
        fontSize:"1.4rem",
      }}
    >
        
      

       <span className="fw-bold">My Task:</span>
      <button  className="bg-danger border border-2 border-double border-black me-2 ms-2 mb-3 mt-3" onClick={remove} >Remove</button>
      <button className="bg-success border border-2 border-double border-black mb-3 mt-3 " onClick={linein} >Line</button>


    </div>
    
  );

};
export default TodoItem;
