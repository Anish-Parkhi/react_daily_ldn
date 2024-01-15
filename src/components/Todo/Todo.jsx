import React, { useRef, useState } from 'react';
import styles from './Todo.module.css';

function Todo() {
  const [open, setOpen] = useState(false);
  const [todo, setToDo] = useState([]);
  const inputRef = useRef();
  const addToList = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value !== '') {
      setToDo((prev) => [...prev, value]);
      setOpen(false);
    }
  };
  const deleteTask = (id) => {
    setToDo((prev) => {
      const prevTasks = [...prev];
      prevTasks.splice(id, 1);
      return prevTasks;
    });
  };

  return (
    <div className={styles.todoMainContainer}>
      <div className={styles.headerContainer}>To Do List</div>
      <div className={styles.todoInnerMainContainer}>
        <div className={styles.buttonContainer}>
          {open === false ? (
            <button
              onClick={() => {
                setOpen(true);
              }}
              className={styles.buttonMainContainer}
            >
              <div>+</div>
              <div>Add Task</div>
            </button>
          ) : (
            <form className={styles.addtasksMainContainer}>
              <div className={styles.inputFieldMainContainer}>
                <input
                  autoFocus
                  ref={inputRef}
                  placeholder="Enter Task Here"
                  className={styles.inputContainer}
                />
              </div>
              <div className={styles.buttonsContainer}>
                <button
                  type="submit"
                  onClick={addToList}
                  className={styles.addTaskButtonContainer}
                >
                  Add
                </button>
                <button
                  onClick={() => {
                    setOpen(false);
                  }}
                  className={styles.cancelTaskMainContainer}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
        <div className={styles.tasksMainContainer}>
          {todo?.map((item, index) => {
            return (
              <div className={styles.tasksListMainContainer}>
                <div>{item}</div>
                <button
                  onClick={() => {
                    deleteTask(index);
                  }}
                  className={styles.deleteButtonContainer}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
