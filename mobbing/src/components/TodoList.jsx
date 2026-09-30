import List from "./List";

export default function TodoList({tasks=[]}) {
  return (
    <>
      <ul className="space-y-2">
        {tasks.length>0 && tasks.map(
          (task)=>{
            return <List task={task}  />
          }
          )}
      </ul>
    </>
  );
}
