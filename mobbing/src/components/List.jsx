export default function List({task="nothing"}) {
  return (
    <>
      <li className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2">
        <input type="checkbox" className="h-4 w-4 accent-indigo-600" />
        <span className="flex-1 text-slate-800">{task}</span>
        <button className="text-slate-400 hover:text-red-600" title="Delete">
          ✕
        </button>
      </li>
    </>
  );
}
