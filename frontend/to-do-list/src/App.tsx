import { Outlet } from "react-router";

function App() {
  return (
    <div className="max-w-screen min-h-screen max-h-fit bg-slate-950 text-slate-300">
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
