import React, { useState, useEffect } from 'react';

function App() {
  const [taskArr, setTaskArr] = useState(localStorage.taskArr ? JSON.parse(localStorage.taskArr) : []
  );
  const [inputVal, setInputVal] = useState('');
  const [imgVal, setImgVal] = useState('');



  useEffect(() => {
    const dataToLS = JSON.stringify(taskArr);
    localStorage.setItem('taskArr', dataToLS);
  }, [taskArr]);
  //! read localStorage and update the state

  const handleInput = ({ target: { value } }) => {
    setInputVal(value);
  };

  const handleImg = ({ target: { value } }) => {
    setImgVal(value);
  };

  //! update localStorage
  //? Create
  const handleAddTask = () => {
    //! ↓↓↓↓↓↓↓ state is Async!!!!!
    //! no so very good practice ↓
    // const tempState = [...taskArr, { value: inputVal, done: false }];
    if(inputVal){
    setTaskArr((prev) => [...prev, { value: inputVal, done: false }]);
    setInputVal('');
    }
  };

  const handleAddImg = () => {
    //! ↓↓↓↓↓↓↓ state is Async!!!!!
    //! no so very good practice ↓
    // const tempState = [...taskArr, { value: inputVal, done: false }];
    if(imgVal){
    setTaskArr((prev) => [...prev, { value: imgVal, done: false }]);
    setImgVal('');
    }
  };

  //! update localStorage
  //? Update
  const handleUpdate = (index) => {
    //?
    setTaskArr((prev) => {
      return prev.map((task, mapIndex) => {
        return mapIndex !== index ? task : { ...task, done: !task.done }
       
        // if (mapIndex !== index) {
        //   return task;
        // } else {
        //   task.done = !task.done;
        //   return task;
          
        // }
      });
    });
  };

  //! update localStorage
  //? Delete
  const handleDelete = (index) => {
    setTaskArr((prevState) =>
      prevState.filter((task, mapIndex) => {
        return mapIndex !== index;
      })
    );
  };

  return (
    <div>
      <h1>Todo</h1>
      <input value={inputVal} onChange={handleInput} /> 
      <button onClick={handleAddTask}>Add Task</button>

      <h1> add you img url </h1>
       <input value={imgVal} onChange={handleImg} />
       <button onClick={handleAddImg}>Add Image</button>


      {/* //? Read */}
      {taskArr.map((task, mapIndex) => (
        <div key={task.value + mapIndex}>
          <h3
            onClick={() => {
              handleUpdate(mapIndex);
            }}
          >
            {task.value} - {task.done ? 'V' : 'X'}
          </h3>
          <button
            onClick={() => {
              handleDelete(mapIndex);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
