import { TodoInput } from "./TodoInput"
import { TodoList } from "./TodoList"
import React, { useState } from "react"
import type { Todo } from "../types"
import type { FC } from "react"

export const TodoApp: FC = () => {
    const [todos, setTodos] = useState<Todo[]>([])

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

    const activeTodos = todos.filter(todo => !todo.completed)
    const completedTodos = todos.filter(todo => todo.completed)

    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <TodoInput onAdd={addTodo} />
            <h2>Active Tasks ({activeTodos.length})</h2>
            <TodoList todos={activeTodos} onToggle={toggleTodo} />
            <h2>Completed Tasks ({completedTodos.length})</h2>
            <TodoList todos={completedTodos} onToggle={toggleTodo} />
        </div>
    )
}