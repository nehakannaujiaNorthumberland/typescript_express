import { TODO } from "./interface";
import data from "./todo.js";

export function addTodo(todo:  TODO) : void {
    data.push(todo)
}
