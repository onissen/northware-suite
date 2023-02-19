import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { servicenav } from "../../lib/serviceHandler";
import design from '../../styles/components/NavBar.module.sass';

export default function NavBarContent(props) {
    const navigation = servicenav(props.service);
    return (
        <>
        {navigation.map((item) => (
            <>
            {item.children !== null ? (
            // Der Menüpunkt hat Unterpunkteim Dropdown
                <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button className={design.navbarPill}>
                        <span key={item.parent.index}>
                            {item.parent.name}
                        </span>
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" />
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
                        <Menu.Items className={`${design.navbarDropdownWrapper} absolute left-0 z-10 mt-4 w-56 origin-top-right rounded-md shadow-lg focus:outline-none`}>
                            <div className={`py-1 ${design.navbarDropdownMask}`}>
                                <Menu.Item>
                                    <a
                                    key={item.parent.name}
                                    href={item.parent.href}
                                    className={`${design.navbarDropdownItem} ${design.navbarDropdownItemParent}`}
                                    >
                                    {item.parent.name}
                                    </a>
                                </Menu.Item>                           
                                {Object.values(item.children).map((childItem) => (   
                                <Menu.Item>
                                    <a
                                        key={childItem.name}
                                        href={childItem.href}
                                        className={design.navbarDropdownItem}
                                    >
                                        {childItem.name}
                                    </a>
                                </Menu.Item>
                                ))}
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            ) :(
            // Der Menüpunkt hat keine Unterpunkte
                <Menu as="div" className="relative inline-block text-left">
                    <a key={item.parent.index} href={item.parent.href} className={design.navbarPill}>
                        {item.parent.name}
                    </a>
                </Menu>
            )}
            </>
          ))}
          </>
    )
}