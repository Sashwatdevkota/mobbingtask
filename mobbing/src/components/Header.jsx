function Header({title,desc}) {
  return (
    <>
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">📝 {title}</h1>
        <p className="text-sm text-slate-500">{desc}</p>
      </header>
    </>
  );
}

export default Header