export async function createTodo(title:string){
    return fetch('http://localhost:8080/todo',{
        method:'POST',
        body:JSON.stringify({title})
    })
}
export async function deleteTodo(id:number){
    return fetch(`http://localhost:8080/todo/${id}`,{
        method:'DELETE',
    })
}
export async function getAllTodos(){
    const resp=await fetch('http://localhost:8080/todo')
    const data=await resp.json()
    return data.data;
}