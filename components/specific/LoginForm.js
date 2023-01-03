/* jshint esversion:6 */

import Head from "next/head";
import { useFetchUser } from "../../lib/authContext";

export default function LoginForm(handleChange, handleSubmit) {
    const { user, loading} = useFetchUser();
    return (
    <>
        <Head>
            <title>Login | Northware OfficeSuite</title>
        </Head>
        <body className="login-body">
            {!loading && !user ? ( 
                <form onSubmit={handleSubmit} className="form-inline">
                <input
                  type="text"
                  name="identifier"
                  onChange={handleChange}
                  placeholder="Username"
                  required
                />
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />

                <button
                  type="submit"
                >
                  Login
                </button>
              </form>
            ) : ('') }
        
            {!loading && (user ? (
              <>
                <span>Sie sind bereits eingeloggt.</span>
                <a
                    className="md:p-2 py-2 block hover:text-purple-400"
                    onClick={logout}
                    style={{ cursor: 'pointer' }}
                >
                    Logout
                </a>
              </>) : ('')) }
        </body>
    </>
    )
}