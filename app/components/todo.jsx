// // Todo.js
import React, { useState, useEffect } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdDoneAll } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";

import { fetchTodos, addTodo, deleteTodo, updateTodo } from './ApiWeb';

const Todo = () => {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);
    const [taskAddedNotification, setTaskAddedNotification] = useState('');
    const [taskDeletedNotification, setTaskDeletedNotification] = useState('');

    useEffect(() => {
        // const fetchData = async () => {
        async function fetchData () {
            try {
                const todosData = await fetchTodos();
                setTodos(todosData);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchData();
    }, []);

    const addTask = async () => {
        if (task.trim() !== '') {
            const newTask = { text: task, isComplete: false };
            try {
                const addedTask = await addTodo(newTask);
                setTodos([addedTask, ...todos]);
                setTask('');
                setTaskAddedNotification('Task Added');
                setTimeout(() => {
                    setTaskAddedNotification('');
                }, 2000);
            } catch (error) {
                console.error('Error adding todo:', error);
            }
        } else {
            alert('Input your task');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    };

    const handleInputChange = (event) => {
        setTask(event.target.value);
    };

    const deleteTask = async (index) => {
        const confirmed = window.confirm("Delete this task?");
        if (!confirmed) return;

        try {
            await deleteTodo(todos[index].id);
            const newTodos = [...todos];
            newTodos.splice(index, 1);
            setTodos(newTodos);
            setTaskDeletedNotification('Task Deleted');
            setTimeout(() => {
                setTaskDeletedNotification('');
            }, 2000);
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    const completeTask = async (index) => {
        try {
            const updatedTodo = { ...todos[index], isComplete: !todos[index].isComplete };
            await updateTodo(todos[index].id, updatedTodo);
            const updatedTodos = todos.map((todo, i) => (i === index ? updatedTodo : todo));
            setTodos(updatedTodos);
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    return (
        <div className={`p-10 min-h-screen`}>

            {taskAddedNotification && <div className="absolute top-12 left-0 w-full bg-green-200 text-black p-2 mb-4 text-sm">{taskAddedNotification}</div>}
            {taskDeletedNotification && <div className="absolute top-12 left-0 w-full bg-red-200 text-black p-2 mb-4">{taskDeletedNotification}</div>}
            <div className="flex justify-center items-center h-full">
                <div className="relative w-full max-w-xl border border-black text-center p-8 pb-12 bg-white rounded-xl mt-8 shadow-2xl">
                    <h1 className="text-2xl font-bold mb-5 text-black font-poppins">TODO LIST</h1>
                    <p className="absolute bottom-4 text-xs font-bold font-poppins">Total tasks: {todos.length}</p>
                    <div className="flex space-x-2 mb-4">
                        <input type="text" value={task} maxLength={40} onChange={handleInputChange} onKeyDown={handleKeyPress} placeholder="Enter your task" className="flex-1 p-2 h-10 border border-black rounded" />
                        <button onClick={addTask} className="px-4 py-2 bg-sky-400 hover:bg-sky-600 text-black rounded font-extrabold text-xl"><IoMdAdd /></button>
                    </div>
                    <ul className="list-none p-0 max-h-64 overflow-auto">
                        {todos.map((todo, index) => (
                            <li key={index} className="flex justify-between items-center p-4 border-b border-black mb-3 hover:bg-slate-100">
                                <button onClick={() => completeTask(index)} className="px-2 py-1 text-lg hover:text-sky-400 text-black rounded-full font-extrabold"><IoMdDoneAll /></button>
                                <div className={`flex flex-row ${todo.isComplete ? 'line-through' : ''}`}>
                                    <span className="ml-2 text-left p-2 text-sm font-poppins">{todo.text}</span>
                                </div>
                                <button onClick={() => deleteTask(index)} className="px-2 py-1 text-lg hover:text-red-600 text-black rounded-full font-bold"><FaRegTrashCan /></button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Todo;

