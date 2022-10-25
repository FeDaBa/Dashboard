import React from 'react';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import user from "./components/Data";

//Icons

import { RiBarChartGroupedLine, RiHashtag} from "react-icons/ri";

function App() {

  return (

    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">

        <Sidebar />

        <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 xl:p-12 h-[100vh] overflow-y-scroll">

          <Header />

          {/* Section 1 */}

          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">

            {/* Card 1 */}

            <div className="bg-primary-100 p-8 rounded-3xl text-gray-300 flex flex-col gap-4">

              <span className="text-8xl text-white">
                <RiBarChartGroupedLine />
              </span>

              <h4 className="text-2xl">
                Earnings
              </h4>

              <span className="text-5xl text-white">
                &euro; {`${user.earning}`}
              </span>

              <span className="py-1 px-3 bg-primary-300/50 rounded-3xl text-center">
                +10% since last month
              </span>

            </div>

            {/* Card 2 */}

            <div className="p-4 bg-white rounded-3xl flex flex-col justify-between gap-4 drop-shadow-2xl">

              <div className="flex items-center gap-4 bg-primary-100/10 rounded-3xl p-4">

                <span className=" bg-primary-100 text-gray-100 text-3xl p-4 rounded-2xl">
                  {`${user.rank}`}
                </span>

                <div>

                  <h3 className="font-bold text-lg">
                    Rank
                  </h3>

                  <p className="text-gray-500">
                    In top 30%
                  </p>

                </div>

              </div>

              <div className="bg-primary-100/10 rounded-3xl p-4">

                <div className="flex items-center gap-4 mb-4">

                  <span className=" bg-primary-100 text-gray-100 text-3xl p-4 rounded-2xl">
                    {`${user.projects}`}
                  </span>

                  <div>

                    <h3 className="font-bold text-lg">
                      Projects
                    </h3>

                    <p className="text-gray-500">
                      8 this month
                    </p>

                  </div>

                </div>

                  <div className="flex items-center gap-2 text-gray-500 text-sm">

                    <span className=" bg-primary-100/20 my-1 py-1.5 px-3 rounded-full">
                      <a href="#">Mobile app</a>
                    </span>

                    <span className=" bg-primary-100/20 my-1 py-1.5 px-3 rounded-full">
                      <a href="#">Branding</a>
                    </span>

                  </div>

                </div>

              </div>

            {/* Card 3 */}

            <div className="col-span-1 md:col-span-2 flex flex-col justify-between">

              <h1 className="text-2xl font-bold mb-8">
                Your projects
              </h1>

              <div className="bg-white p-8 rounded-3xl drop-shadow-2xl">

                <div className="flex items-center gap-4 mb-8">

                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Profile picture"
                    className="w-14 h-14 object-cover rounded-full"
                  />

                  <div>

                    <h3 className="font-bold">
                      Logo design for Bakery
                    </h3>

                    <p className="text-gray-500">
                      1 day remaining
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <img
                    src="/src/images/profile-5.jpg"
                    alt="Profile picture"
                    className="w-14 h-14 object-cover rounded-full"
                  />

                  <div>

                    <h3 className="font-bold">
                      Banner design for E-Commerce
                    </h3>

                    <p className="text-gray-500">
                      6 days remaining
                    </p>

                  </div>

                </div>

                <div className="flex justify-end">

                  <a href="#" className="hover:text-primary-100 transition-colors hover:underline">
                    See all projects
                  </a>

                </div>

              </div>

            </div>

          </section>

          {/* Section 2 */}

          <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">

          <div>

            <h1 className="text-2xl font-bold mb-8">Recent invoices</h1>

            <div className="bg-white p-8 rounded-3xl shadow-2xl mb-8 gap-6 flex flex-col">

              {/* Card 1 */}

              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">

                <div className="col-span-2 flex items-center gap-4">

                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                    className="w-14 h-14 object-cover rounded-full"
                  />

                  <div>

                    <h3 className="font-bold">Jane Watts</h3>

                    <p className="text-gray-500">JQ Holdings</p>

                  </div>

                </div>

                <div>

                  <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">
                    Paid
                  </span>

                </div>

                <div>

                  <span className="font-bold">
                    &euro; 1,200.87
                  </span>

                </div>

              </div>

              {/* Card 2 */}

              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">

                <div className="col-span-2 flex items-center gap-4">

                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    className="w-14 h-14 object-cover rounded-full"
                  />

                  <div>

                    <h3 className="font-bold">Jhon Philips</h3>

                    <p className="text-gray-500">Inchor Techs</p>

                  </div>

                </div>

                <div>

                  <span className="bg-red-100 text-red-800 py-1 px-3 rounded-full font-medium">
                    Late
                  </span>

                </div>

                <div>

                  <span className="font-bold">
                    &euro; 12,998.88
                  </span>

                </div>

              </div>

            </div>

            <div className="bg-primary-900 text-gray-300 p-8 rounded-xl shadow-2xl flex items-center justify-between flex-wrap xl:flex-nowrap gap-8">

              <div>

                <RiHashtag className="text-4xl -rotate-12" />

              </div>

              <div>

                <h5 className="font-bold text-white">Engage with clients</h5>

                <h5>Join slack channel</h5>

              </div>

              <div className="w-full xl:w-auto">

                <button className="bg-primary-100 py-2 px-6 rounded-xl text-white w-full">
                  Join now
                </button>

              </div>

            </div>

          </div>

          <div>

            <h1 className="text-2xl font-bold mb-8">Recommended project</h1>

            <div className="bg-white p-8 rounded-3xl shadow-2xl mb-8 flex flex-col gap-8">

              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">

                <div className="flex items-center gap-4">

                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    className="w-14 h-14 object-cover rounded-full"
                  />

                  <div>

                    <h3 className="font-bold">Thomas Martin</h3>

                    <p className="text-gray-500">Updated 10m ago</p>

                  </div>

                </div>

                <div>

                  <span className="bg-primary-100 py-2 px-4 rounded-full text-white">
                    <a href="#">Design</a>
                  </span>

                </div>

              </div>

              <div>

                <h5 className="text-lg font-bold">
                  Need a designer to form branding essentials for my business.
                </h5>

                <p className="text-gray-500">
                  Looking for a talented brand designer to create all the
                  branding materials my new startup.
                </p>

              </div>

              <div className="bg-primary-100/10 flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 rounded-xl">

                <div>

                  <span className="text-2xl font-bold mr-2">
                    &euro;8,700
                  </span>

                  <span className="text-sm text-gray-500">
                    / month
                  </span>

                </div>

                <div>

                  <span className="border border-primary-100 text-primary-100 py-2 px-4 rounded-full">
                    <a href="#">Full time</a>
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>

        </main>

    </div>

  )
}

export default App;
