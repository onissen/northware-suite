/* jshint esversion:6 */
import { ServiceBrand, ServiceBrandIcon, servicenav } from '../../lib/serviceHandler';
import design from '../../styles/components/NavBar.module.sass';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { unsetToken } from '../../lib/auth';
import NavBarContent from '../micro-components/HeadNav_navbarContent';
import MobileDisclosure from '../micro-components/HeadNav_MobileDisclosure';
const logout = () => {
  unsetToken();
};

export default function HeadNav(props) {
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
                  {/* TODO: OnClick App Switch */}
                  <ServiceBrandIcon service={props.service} className={`block lg:hidden ${design.navbarBrand}`}/>
                  <span className={`hidden lg:block ${design.navbarBrand}`}><ServiceBrand service={props.service} /></span>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <NavBarContent service={props.service} />
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3 hidden sm:block">
                  <div>
                    <Menu.Button className="flex py-2">
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
                    <Menu.Items className={`${design.navbarDropdownWrapper} absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md shadow-lg focus:outline-none`}>
                      <div className={`py-1 ${design.navbarDropdownMask}`}>
                      <Menu.Item>
                            <a
                              className={`${design.navbarDropdownItem} ${design.navbarDropdownItemParent}`}
                            >
                              Username
                            </a>
                        </Menu.Item>
                        <Menu.Item>
                            <a
                              href="login"
                              className={design.navbarDropdownItem}
                              onClick={logout}
                            >
                              Abmelden
                            </a>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <MobileDisclosure service={props.service} />
        </>
      )}
    </Disclosure>
  )
}
