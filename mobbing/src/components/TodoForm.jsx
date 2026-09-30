import { useState } from "react";

export default function TodoForm({onAdd,tasks}) {
  const [task, setTask] = useState("");

  function handleChange(e) {
    setTask(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault()
    console.log(tasks,'tasks values are --->')
    const updatedTask = tasks.push(task)
    onAdd(updatedTask)

  }

  return (
    <>
      <form className="mb-2 flex gap-2">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          name="name"
          placeholder="What do you need to do?"
          className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300"
        >
          Add
        </button>
      </form>
    </>
  );
}
