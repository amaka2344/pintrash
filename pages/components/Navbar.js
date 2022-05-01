import {useState} from 'react'
import { Transition } from '@headlessui/react'



function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className="flex w-full items-center bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative -mx-4 flex items-center justify-between">
      <div className="w-60 max-w-full px-4">
          <a href="#" className="block w-full py-5">
            <img src="/assets/Pin Trash.png" alt="logo" className=" w-20" />
          </a>
        </div>


                <div className='hidden md:block'>
                  <div className='ml-10 flex items-baseline space-x-4'>
              <nav className=" absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none">
              <ul className="block lg:flex">
                <li>
                    <a href="#" className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex">About</a>
                
                </li>

                <li>
                    <a   href="#" className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex">Pickup Trash</a>
                              </li>


                <li>
                    <a  href="#" className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex">Contact</a>
                </li>
              </ul>
            </nav>
            </div>
              </div>

            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
            <a href="javascript:void(0)" className="rounded-lg bg-primary py-3 px-7 text-base font-medium text-white hover:bg-opacity-90">
              Donate
            </a>
          </div>
             
              

            <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type='button' aria-controls='mobile-menu' aria-expanded='false' className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden">
          <span className="sr-only">Open main menu</span>
            {!isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className=" block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ):(
              <svg xmlns="http://www.w3.org/2000/svg" className=" block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            )}
        </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                >
                  About
                </a>

                <a
                  href="#"
                  className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"                >
                  Pickup Trash
                </a>

                <a
                  href="#"
                  className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </Transition>
      </header>
    </div>
  );
}

export default Nav;