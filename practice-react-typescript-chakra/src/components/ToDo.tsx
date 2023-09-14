import { ToDoType } from "../types";

type ToDoPropsType={
    todo:ToDoType;
    setTodos:(todo:ToDoType) => void;
};
export const ToDo = ({todo,setTodos}:ToDoPropsType) => {
    const{id,title,done,limit} = todo;
    const [todoTitle,setTodoTitle] = useState<string>(todo.title);

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>
    setTodos
    return(
        <>
        <h2>{id}</h2>
        <h2>{title}</h2>
        <h2>{done ? "完了" : "未完了"}</h2>
        <h2>{limit > new Date() ? "まだ余裕あり" : "期限切れ"}</h2>

        <input
        type="text"
        value={todoTitle}
        onChange={(e) => setTofoTitle(e.target.value)}
/>
<button onClick={() => setTodos(todo)}>保存</button>
        </>
    )
}