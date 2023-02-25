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

export function MobileAppSwitchBtn(props) {
    return (
        <div className={`w-full ${design.MobileAppSwitchBtn} p-2 ${design.AppSwitchTheme} ${design[props.service]}`}>
            <a href={`/${props.service}`}
                className={`w-full ${design.AppSwitchTheme} ${design[props.service]}`}    
            >
                <ServiceBrandIcon service={props.service} />
            </a>
        </div>
    )
}