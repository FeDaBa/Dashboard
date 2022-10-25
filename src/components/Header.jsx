import React from 'react';
import user from './Data';

//Icons

import { RiSearchLine } from "react-icons/ri";

const Header = () => {

  return (

    <header className="flex flex-col md:flex-row items-center justify-between gap-4">

        <h1 className="text-2xl md:text-3xl font-bold">
            Good Morning, <span className="text-primary-100">{`${user.firstName}`}</span>
        </h1>

        <form className="w-full md:w-auto">

            <div className="relative">

                <RiSearchLine className="absolute top-1/2 -translate-y-1/2 left-2" />

                <input
                    type="text"
                    className="bg-gray-200 outline-none py-2 pl-8 pr-4 rounded-xl w-full md:w-auto"
                    placeholder="Search for projects"
                />

            </div>

        </form>

    </header>
  )
}

export default Header
