import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
     <div className="min-h-screen bg-black">
       <header className="w-full bg-black border-b-4 border-orange-500 px-8 py-4">
         <h2 className="dbz-heading text-5xl uppercase tracking-widest">
           Dragon Ball Z
         </h2>
       </header>

       <main className="p-8">
         <Outlet />
       </main>
     </div>
   )
}
