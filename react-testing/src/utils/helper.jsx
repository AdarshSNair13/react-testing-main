import axios from "axios"
export const add = (num1,num2) => {
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return 0
    }
    return num1 + num2
};

export const reverseString = (value) => {
    return value.split("").reverse().join("");
};

export const USER_API = "https://api.com/user"

export const languages = ["JS","CSS","HTML"]

export const user = {
    name:"Anu",
    age:20,
};

export const fetchUser = async () => {
    const response = await axios('https://jsonplaceholder.typicode.com/todos/1');
    return response.data;
}

export const isAuthenticated = (isLogged = false) => {
    if(isLogged){
        return "welcome"
    }
    throw new Error("User is not logged in");
}