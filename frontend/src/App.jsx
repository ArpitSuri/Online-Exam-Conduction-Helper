import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
            <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Website Blocker and Tab Switching Prevention Extension 
                </h2>

                <p className="mt-4 text-gray-700">
                  This extension blocks access to certain websites and prevents tab switching and helps in conduction of online exams and tests.

                </p>
                {/* <a   href='https://drive.google.com/drive/folders/11Kaa_2bh4CdICONnB-2RNskOGqa0KbWn?usp=sharing' target='_blank'>Get the Extension</a> */}

                                <a
                  className="group inline-block rounded-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden"
                  href='https://drive.google.com/drive/folders/11Kaa_2bh4CdICONnB-2RNskOGqa0KbWn?usp=sharing' target='_blank'
                >
                  <span className="block rounded-xs bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                    Download
                  </span>
                </a>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
