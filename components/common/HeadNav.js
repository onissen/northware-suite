/* jshint esversion:6 */
import Link from 'next/link';
import { ServiceBrand, ServiceBrandIcon } from '../../lib/serviceHandler';
import design from '../../styles/components/NavBar.module.sass';


// export default function HeadNav(props) {
//     return (
//         <nav className={design.navbar} >
//             <div className={design.navbarWrapper}>
//                 <Link href="/" className={design.navbarBrand}>
//                     <ServiceBrand service={props.service} />
//                 </Link>

//                 <ul className="">
//                     <li><Link href="#" className={`navpill ${design.navbarPill}`}>Test</Link></li>
//                     <li><Link href="#" className={`navpill ${design.navbarPill}`}>Test</Link></li>
//                     <li><Link href="#" className={`navpill ${design.navbarPill}`}>Test</Link></li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }


import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { unsetToken } from '../../lib/auth';

const logout = () => {
  unsetToken();
};

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

const servicenav = [
  {parent: {name: 'Admin', href:'#'}, 
  children: {
    1: {name: 'Test', href: '#'},
    2: {name: 'Test2', href: '#'}
  }},
  {parent: {name: 'Verwaltung', href:'#'}, 
  children: {
    1: {name: 'Test3', href: '#'},
    2: {name: 'Test4', href: '#'}
  }}
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Nav(props) {
  return (
    <Disclosure as="nav" className={design.navbar}>
      {({ open }) => (
        <>
          <div className={design.navbarWrapper}>
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className={`${design.navbarPill} ${design.hamburgerToggle}`}>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <ServiceBrandIcon service={props.service} className={`block lg:hidden ${design.navbarBrand}`}/>
                  <span className={`hidden lg:block ${design.navbarBrand}`}><ServiceBrand service={props.service} /></span>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  {servicenav.map((item) => (
                    <Menu as="div" className="relative inline-block text-left">
                      <Menu.Button className="inline-flex justify-center rounded-md text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        <a key={item.parent.name} href={item.parent.href}>
                          {item.parent.name}
                        </a>
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                      </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                    <Menu.Items className="absolute left-0 z-10 mt-4 w-56 origin-top-right rounded-md bg-white shadow-lg focus:outline-none">
                      <div className="py-1">
                        {Object.values(item.children).map((childItem) => (
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                key={childItem.name}
                                href={childItem.href}
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                {childItem.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                    </Transition>
                  </Menu>
                  ))}
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex py-2">
                      <span className="sr-only">Open user menu</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                      </svg>

                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-4 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="login"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            onClick={logout}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {/* FIXME: SM Panels 
                TODO: Diclosure nach HeadlessUI verändern */}
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
