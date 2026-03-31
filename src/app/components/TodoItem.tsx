type Todo = {
    id:number;
    text:string;
    completed:boolean;
}

type Props = {
    todo:Todo;
    onToggle:(id:number)=>void;
    onDelete: (id:number)=>void;
};


export default function TodoItem({todo,onToggle,onDelete}:Props){
    return(
        <li className="flex items-center gap-3 rounded-lg bg-gray-50">
        <input 
        type="checkbox"
        checked={todo.completed}
        onChange={()=>onToggle(todo.id)}
        className="accent-blue-500 w-4 h-4 cursor-pointer"/>


        <span
        className={`flex-1 text-sm ${
            todo.completed ? "line-through text-gray-400" : "text-gray-700"
        }`}
        >

        {todo.text}
        </span>

        <button
        onClick={()=>onDelete(todo.id)}
        className="text-red-400 hover:text-red-600 text-xs transition"
        >Delete</button>
        </li>
    )

}