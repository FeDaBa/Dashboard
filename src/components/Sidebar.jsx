import React, { useState } from 'react';
import user from './Data'

//icons

import {
    RiHomeLine,
    RiFileCopyLine,
    RiWallet3Line,
    RiPieChartLine,
    RiMore2Fill,
    RiCloseLine,
} from "react-icons/ri";

const Sidebar = () => {

    const [showMenu, setShowMenu] = useState(false);

  return (
    <>
        <div
            className = {
                `bg-primary-900 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300
                ${showMenu ? "left-0" : "-left-full"}`
            }
        >

        {/* Profile */}

            <div className = "flex flex-col items-center justify-center p-8 gap-4 h-[30vh]">

                <img
                    src="/src/images/profile-1.jpg"
                    alt="profile picture"
                    className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300"
                />

                <h1 className="text-xl text-white font-bold">
                    {`${user.firstName} ${user.lastName}`}
                </h1>

                <span className="bg-primary-100 py-2 px-4 rounded-full text-white">
                    <a href="#">Pro Level</a>
                </span>

            </div>

        {/* Nav */}

            <div className = "bg-primary-300 p-8 pt-12 rounded-tr-[100px] h-[70vh] flex flex-col justify-between gap-10">

                <nav className="flex flex-col gap-8">

                    <a href="#" className="flex items-center gap-4 text-white py-2 px-4 rounded-2xl hover:bg-primary-900/50 transition-colors">
                        <RiHomeLine /> Dashboard
                    </a>

                    <a href="#" className="flex items-center gap-4 text-white py-2 px-4 rounded-2xl hover:bg-primary-900/50 transition-colors">
                        <RiFileCopyLine /> Projects
                    </a>

                    <a href="#" className="flex items-center gap-4 text-white py-2 px-4 rounded-2xl hover:bg-primary-900/50 transition-colors">
                        <RiWallet3Line /> Invoices
                    </a>

                    <a href="#" className="flex items-center gap-4 text-white py-2 px-4 rounded-2xl hover:bg-primary-900/50 transition-colors">
                        <RiPieChartLine /> Reports
                    </a>

                </nav>

                <div className="bg-primary-900/50 text-white p-4 rounded-2xl">

                    <p className="text-gray-400">Having troubles?</p>

                    <a href="#">Contact us</a>

                </div>

            </div>

        </div>

        {/* Button Mobile */}

        <button onClick={() => setShowMenu(!showMenu)}
                className = "lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50">

            {showMenu ? <RiCloseLine /> : <RiMore2Fill />}

        </button>
    </>
  )
}

export default Sidebar;
