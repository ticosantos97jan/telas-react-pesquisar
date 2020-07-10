import axios from 'axios';

const respnse = axios.create({
    baseURL: 'https://localhost:3000/search/${search}' //link da requisição de dados aqui é o exemplo
});

export default response;