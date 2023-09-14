import {useState} from "react"
import { ToDoType } from "../types"
import { ToDo } from "../components/ToDo"

export const ToDoList = () => {

    const [todos,setToDos] = useState<ToDoType[]>([
        {
            id:1,
            title:"Reactの学習",
            done:false,
            limit:new Date(),
        },
        {
            id:2,
            title:"スーパーで買い物",
            done:false,
            limit:new Date(),
        },
        {
            id:3,
            title:"書類の印刷",
            done:false,
            limit:new Date(),
        },
        {
            id:4,
            title:"昼食",
            done:false,
            limit:new Date(),
        },
        {
            id:5,
            title:"筋トレ",
            done:true,
            limit:new Date(),
        },
    ]);

    const setTodoItems = (todo:ToDoType) => {
        const newTodos = todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...todo,    //復習ポイント
                    ...item,
                }
            }
            return item
            })
            setToDos(newTodos)
        };
        return(
            <>
            <h1>ToDo List</h1>
          
                {todos.map((todo) =>(
             
                             <ToDo key={todo.id} todo={todo} setTodos={setTodoItems}/>
           

                ))}
         
            </>
        )
}