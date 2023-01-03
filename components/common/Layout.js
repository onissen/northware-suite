/* jshint esversion: 6 */
import Router from "next/router";
import { unsetToken } from "../../lib/auth";
import { useFetchUser } from "../../lib/authContext";

const logout = () => {
  unsetToken();
};


export default function Layout() {
  const { user, loading} = useFetchUser();

  if (!user && !loading) {
    Router.push('/login');
  }
  if (!user) {
    return('Sie werden weitergeleitet...');
  }


  return (
      <>
          <h1>Hier Layout-Content</h1>
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
      </>
  )

}