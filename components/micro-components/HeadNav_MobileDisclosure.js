import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { servicenav } from "../../lib/serviceHandler"
import design from '../../styles/components/NavBar.module.sass';

export default function MobileDisclosure(props) {
    const navigation = servicenav(props.service);
    const logout = () => {
        unsetToken();
      };
    return (
        <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <>
                {item.children !== null ? (
                    // Menu Item mit Unterpunkten
                    <Disclosure>
                        {({open}) => (
                        <>
                            <Disclosure.Button
                                key={item.parent.name}
                                as="div"
                                className={`flex w-full justify-between px-4 py-2 ${design.hamburgernavItem} ${open ? 'hamburgernavItem-active font-semibold rounded-t-lg' : 'rounded-lg'}`}
                                >
                                <span>{item.parent.name}</span>
                                <ChevronDownIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `} />
                            </Disclosure.Button>
                            <Disclosure.Panel className={`${design.hamburgerDropdownPanel}`}>
                                <div className={design.hamburgerDropdownPanelMask}>
                                <div className={`${design.hamburgerDropdownItem} ${design.hamburgerDropdownItemParent}`}>
                                    <a
                                    key={item.parent.name}
                                    href={item.parent.href}
                                    className="w-full block"
                                    >
                                        {item.parent.name}
                                    </a>
                                </div>
                                {Object.values(item.children).map((childItem) => (
                                    <div className={design.hamburgerDropdownItem}>
                                        <a
                                        key={childItem.name}
                                        href={childItem.href}
                                        className="w-full block"
                                        >
                                            {childItem.name}
                                        </a>
                                    </div>
                                ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                        )}
                    </Disclosure>
                ) : (
                    // Menu Item Ohne Unterpunkte
                    <Disclosure.Button
                        key={item.parent.name}
                        as="a"
                        className={`flex w-full justify-between px-4 py-2 ${design.hamburgernavItem} rounded-lg`}
                        href={item.parent.href}
                    >
                    <a>{item.parent.name}</a>
                </Disclosure.Button>

                )}
                </>
              ))}
              <Disclosure>
                {({open}) => (
                    <>
                        <Disclosure.Button
                            as="div"
                            className={`flex w-full justify-between px-4 py-2 ${design.hamburgernavItem} ${open ? 'hamburgernavItem-active font-semibold rounded-t-lg' : 'rounded-lg'}`}
                            >
                            <span className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                                </svg>
                                Username
                            </span>
                            <ChevronDownIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `} />
                        </Disclosure.Button>
                        <Disclosure.Panel className={`${design.hamburgerDropdownPanel}`}>
                            <div className={design.hamburgerDropdownPanelMask}>
                            <div className={`${design.hamburgerDropdownItem} ${design.hamburgerDropdownItemParent}`}>
                                <a
                                className="w-full flex"
                                >
                                    Username
                                </a>
                            </div>
                                <div className={design.hamburgerDropdownItem}>
                                    <a
                                    className="w-full block"
                                    href="/login"
                                    onClick={logout}
                                    >
                                        Abmelden
                                    </a>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                        )}
                    </Disclosure>
            </div>
        </Disclosure.Panel>
    )
}