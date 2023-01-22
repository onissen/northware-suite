/* jshint esversion:6 */
import Head from "next/head";

export default function NWHead(props) {
    if (props.service == 'cockpit') {
        if (props.siteTitle == undefined) {
            return (
                <Head>
                    <title>Northware Cockpit</title>
                    <link rel="shortcut icon" href="/icons/favicon-cockpit.svg" />
                </Head>
            );
        }
        else {
            return (
                <Head>
                    <title>{props.siteTitle} | Northware Cockpit</title>
                    <link rel="shortcut icon" href="/icons/favicon-cockpit.svg" />
                </Head>
            );
        }
    }
    else if (props.service == 'finance') {
        if (props.siteTitle == undefined) {
            return (
                <Head>
                    <title>Northware Finance</title>
                    <link rel="shortcut icon" href="/icons/favicon-finance.svg" />
                </Head>
            );
        }
        else {
            return (
                <Head>
                    <title>{props.siteTitle} | Northware Finance</title>
                    <link rel="shortcut icon" href="/icons/favicon-finance.svg" />
                </Head>
            );
        }
    }
    else if (props.service == 'hr') {
        if (props.siteTitle == undefined) {
            return (
                <Head>
                    <title>Northware HR</title>
                    <link rel="shortcut icon" href="/icons/favicon-hures.svg" />
                </Head>
            );
        }
        else {
            return (
                <Head>
                    <title>{props.siteTitle} | Northware HR</title>
                    <link rel="shortcut icon" href="/icons/favicon-hures.svg" />
                </Head>
            );
        }
    }
    else if (props.service == 'trader') {
        if (props.siteTitle == undefined) {
            return (
                <Head>
                    <title>Northware Trader</title>
                    <link rel="shortcut icon" href="/icons/favicon-trader.svg" />
                </Head>
            );
        }
        else {
            return (
                <Head>
                    <title>{props.siteTitle} | Northware Trader</title>
                    <link rel="shortcut icon" href="/icons/favicon-trader.svg" />
                </Head>
            );
        }
    }

    else {
        if (props.siteTitle == undefined) {
            return (
                <Head>
                    <title>Northware Cockpit</title>
                    <link rel="shortcut icon" href="/icons/favicon-cockpit.svg" />
                </Head>
            );
        }
        else {
            return (
                <Head>
                    <title>{props.siteTitle} | Northware Cockpit</title>
                    <link rel="shortcut icon" href="/icons/favicon-cockpit.svg" />
                </Head>
            );
        }
    }
}