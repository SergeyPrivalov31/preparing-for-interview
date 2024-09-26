import { useEffect, useState } from "react"
import { debounce } from "../../../../interviewTasks/debounce"

const getTodos = async (number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
    return await response.json()
   
}


export const FetchTodosComponent = () => {
    const [todos, setTodos] = useState([])
    const [value, setValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const fetchTodos = debounce(async(number) => {
        
            const data = await getTodos(number)
            if(data){
            console.log('data',data)
            setTodos(data)
            number && setTodos([data])
            setIsLoading(false)
        }
    }, 3000)


    useEffect(() => {
    setIsLoading(true)
    fetchTodos(value)
      
    },[value])
    console.log('todos',todos)

    return <div>
        <input value={value} onChange={(event) => setValue(event.currentTarget.value)} />
        {isLoading ? <h3>{'грузим'}</h3>: <ul>
            {todos && todos.map((todo) => {return <li key={todo.id}>{todo.id} <br/>{Object.entries(todo).map((g)=> <p key={g}>{g}</p>)}</li>})}
        </ul>}
    </div>
}