
import axios from 'axios';

const API_URL = 'https://localhost:7063/api/Todos';  //V2
// const API_URL = 'https://localhost:7059/api/Todos'; //V1

export const fetchTodos = async () => {
    try {
        const response = await axios.get(API_URL);
        
        return response.data;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};

export const addTodo = async (newTask) => {
    try {
        const response = await axios.post(API_URL, newTask);
        console.log(JSON.stringify(response.data))
        return response.data;
    } catch (error) {
        console.error('Error adding todo:', error);
        throw error;
    }
};

export const deleteTodo = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Error deleting todo:', error);
        throw error;
    }
};

export const updateTodo = async (id, updatedTodo) => {
    try {
        await axios.put(`${API_URL}/${id}`, updatedTodo);
    } catch (error) {
        console.error('Error updating todo:', error);
        throw error;
    }
};
