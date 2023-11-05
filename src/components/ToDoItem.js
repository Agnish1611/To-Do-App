import React, {useState} from "react";

function ToDoItem(props) {

  const [isClicked, setClicked] = useState(false);

  function clicked(){
    setClicked((prevValue) => {
        return !prevValue ;
    });
  }

  return (
    <div onClick={clicked}>
      <li style={{textDecoration: isClicked? "line-through" : "none"}}>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
