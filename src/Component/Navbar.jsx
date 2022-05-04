import React from 'react'

export default function Navbar() {
    return (
        <div>
            <aside className="w-full p-4  text-coolGray-100">
                <nav className="space-y-8 text-sm">

                    <div className="icon">
                        <div className="grid grid-cols-6 gap-4 ">
                            <div className="">
                                <img src="https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=2,format=auto/https%3A%2F%2F3878257262-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MgOiFXan_GQfmEOSP67%252Ficon%252F4jVnQKcGka4qKbzhjEqM%252Fherofi%2520logo.png%3Falt%3Dmedia%26token%3Defa94fba-7eb2-444c-a4bf-f36238620598" alt="" />
                            </div>
                            <div className="">
                                <h1 className="text-2xl">HeroFi</h1>
                            </div>
                            <div className="">
                          
                            </div>
                            <div className=" text-center">
                            <i className="fa fa-search"></i>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-sm tracking-widest uppercase text-cyan-800 ">Getting Started</h2>
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#">Installation</a>
                            <a rel="noopener noreferrer" href="#">Plugins</a>
                            <a rel="noopener noreferrer" href="#">Migrations</a>
                            <a rel="noopener noreferrer" href="#">Appearance</a>
                            <a rel="noopener noreferrer" href="#">Mamba UI</a>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-coolGray-400">Dashboard</h2>
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#">Header</a>
                            <a rel="noopener noreferrer" href="#">Drawer</a>
                            <a rel="noopener noreferrer" href="#">Page Title</a>
                            <a rel="noopener noreferrer" href="#">Menus</a>
                            <a rel="noopener noreferrer" href="#">Sidebar</a>
                            <a rel="noopener noreferrer" href="#">Footer</a>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-coolGray-400">Pages</h2>
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#">Homepage</a>
                            <a rel="noopener noreferrer" href="#">Users</a>
                            <a rel="noopener noreferrer" href="#">Tools</a>
                            <a rel="noopener noreferrer" href="#">Settings</a>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-coolGray-400">Misc</h2>
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#">Tutorials</a>
                            <a rel="noopener noreferrer" href="#">Changelog</a>
                        </div>
                    </div>
                </nav>
            </aside>
        </div>
    )
}
