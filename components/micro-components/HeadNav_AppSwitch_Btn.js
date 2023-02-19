import { Menu } from "@headlessui/react"
import { ServiceBrand, ServiceBrandIcon } from "../../lib/serviceHandler"
import design from '../../styles/components/NavBar.module.sass'


export default function AppSwitchBtn(props) {
    return (
        <Menu.Item>
            <a href={`/${props.service}`} 
                className={`${design.AppSwitchDropdownItem} ${design.AppSwitchTheme} ${design[props.service]} p-3 text-center`}>
                <ServiceBrandIcon service={props.service} className="mr-2" />
                <ServiceBrand service={props.service} />
            </a>
        </Menu.Item>                           

    )
}