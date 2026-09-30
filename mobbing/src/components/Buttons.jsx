export default function Buttons() {
  return (
    <>
      <div className="mb-4 flex gap-2 text-sm">
        <button className="rounded-full bg-indigo-600 px-3 py-1 text-white">
          All
        </button>
        <button className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 hover:bg-slate-200">
          Active
        </button>
        <button className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 hover:bg-slate-200">
          Completed
        </button>
      </div>
    </>
  );
}
