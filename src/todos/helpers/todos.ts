import { Todo } from "@prisma/client";


export const updateTodo = async(id:string,complete:boolean)=>{

    const body = {complete}
    const todo = fetch(`/api/todos/${id}`,{
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            'Content-type':"application/json"
        }
    }).then( res => res.json());

    return todo;

}


export const CreateRestTodo = async(description:string):Promise<Todo> =>{
    
    const body = {description}
    const todo = fetch(`/api/todos`,{
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Content-type':"application/json"
        }
    }).then( res => res.json());

    return todo;

}

export const DeleteTodos = async():Promise<boolean> =>{

    const todoDeleted = fetch(`/api/todos`,{
        method: "DELETE",
        headers: {
            'Content-type':"application/json"
        }
    }).then( res => res.json());

    return true;

}