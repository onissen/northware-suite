/* jshint esversion: 6 */
import Router from "next/router";
import { unsetToken } from "../../lib/auth";
import { useFetchUser } from "../../lib/authContext";
import LoadingSpinner from "../specific/LoadingSpinner";
import Nav from "./HeadNav";
import HeadNav from "./HeadNav";
import NWHead from "./NWHead";
const logout = () => {
  unsetToken();
};

export default function Layout ({children, service, siteTitle}) {
  // Authentication
  const { user, loading} = useFetchUser();
  if (!user && !loading) {
    Router.push('/login');
  }
  if (!user) {
    return(
      <>
        <NWHead service={service} />
        <LoadingSpinner />
      </>
    );
  }

  // Basic Page Layout
  return (
      <>
        <NWHead service={service} siteTitle={siteTitle} />

        {/* <HeadNav service={service} /> */}
        <Nav service={service} />
        <main className="wrapper">
            {/* Page content:*/}{children}
            {!loading &&
              (user ? (
                <>
                  <a
                      className="md:p-2 py-2 block hover:text-purple-400"
                      onClick={logout}
                      style={{ cursor: 'pointer' }}
                  >
                      Logout
                  </a>
                </>) : ('')) }
        </main>
      </>
  )
}