import { faBriefcase, faDolly, faFileInvoiceDollar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ServiceBrand(props) {
    if (props.service == 'cockpit') {return('Northware Cockpit');}
    if (props.service == 'finance') {return('Northware Finance');}
    if (props.service == 'hr') {return('Northware HR');}
    if (props.service == 'trader') {return('Northware Trader');}
    return('Northware Cockpit');
}

export function ServiceBrandIcon(props) {
    if (props.service == 'cockpit') {
        return (
            <div className={props.className}>
                <FontAwesomeIcon icon={faBriefcase}/>
            </div>
        );
    }
    if (props.service == 'finance') {
        return (
            <div className={props.className}>
                <FontAwesomeIcon icon={faFileInvoiceDollar}/>
            </div>
        );
    }
    if (props.service == 'hr') {
        return (
            <div className={props.className}>
                <FontAwesomeIcon icon={faUsers}/>
            </div>
        );
    }
    if (props.service == 'trader') {
        return (
            <div className={props.className}>
                <FontAwesomeIcon icon={faDolly}/>
            </div>
        );
    }
}

export const servicenav = (service) => {
    if (service == 'cockpit') {
        return [
            {parent: {name: 'Admin', href:'/admin', current: true}, 
            children: {
            1: {name: 'Test', href: '#', current: false},
            2: {name: 'Test2', href: '#', current: false}
            }},
            {parent: {name: 'Verwaltung', href:'#', current: false}, 
            children: {
            1: {name: 'Test3', href: '#', current: false},
            2: {name: 'Test4', href: '#', current: false}
            }}
        ];
    }
    if (service == 'finance') {
        return [
            {parent: {name: 'Home', href:'/#', current: true}, 
                children: null
            },
        ];
    }
}