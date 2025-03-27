import { TodoInput } from "./TodoInput"
import { TodoList } from "./TodoList"
import { BottomContainer } from "./BottomContainer"
import React, { useMemo, useState } from "react"
import { TodoListState } from "../types"
import type { Todo } from "../types"
import type { FC } from "react"

export const TodoApp: FC = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [listState, setListState] = useState<TodoListState>(TodoListState.ALL)

    const activeTodos = todos.filter(todo => !todo.completed)
    const completedTodos = todos.filter(todo => todo.completed)

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: "id" + Math.random().toString(16).slice(2),
            text,
            completed: false,
            createdAt: new Date(),
        }
        setTodos([...todos, newTodo])
    }

    const toggleTodo = (id: string) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const handleFilter = (state: TodoListState) => { setListState(state) }
    const handleClear = () => { setTodos(activeTodos) }

    const curentList = useMemo(() =>
        listState === TodoListState.ACTIVE ?
            activeTodos :
            listState === TodoListState.COMPLETED ?
                completedTodos :
                todos
        , [listState, activeTodos, completedTodos, todos])

    return (
        <div className="todo-app">
            <h1>todos</h1>
            <TodoInput onAdd={addTodo} />
            <TodoList todos={curentList} onToggle={toggleTodo} />
            <BottomContainer
                onFilterPress={handleFilter}
                onClearPress={handleClear}
                total={activeTodos.length}
                listState={listState} />
        </div>
    )
}