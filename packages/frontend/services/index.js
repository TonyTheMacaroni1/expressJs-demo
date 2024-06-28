import axios from 'axios';
export const addition = async (num1, num2) =>  
    await axios.post('http://localhost:4567/add', { num1, num2 }).then(res => res.data.result)

export const subtraction = async (num1, num2) => 
    await axios.post('http://localhost:4567/subtract', { num1, num2 }).then(res => res.data.result)


export const multiplication = async (num1, num2) => 
    await axios.post('http://localhost:4567/multiply', { num1, num2 }).then(res => res.data.result)

export const division = async(num1, num2) => 
    await axios.post('http://localhost:4567/divide', { num1, num2 }).then(res => res.data.result)