/*jshint esversion: 9 */

import { useState } from "react";
import { setToken, unsetToken } from "../../helpers/auth";
import { useFetchUser, UserProvider} from "../../helpers/authContext";

// API Fetcher
export async function fetcher(url, options = {}) {
    let response;
    if (!options) {
      response = await fetch(url);
    } else {
      response = await fetch(url, options);
    }
    const data = await response.json();
    return data;
}

const NavAuth = () => {
  const [data, setData] = useState({
    identifier: '',
    password: '',
  });

  const { user, loading } = useFetchUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const responseData = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: data.identifier,
          password: data.password,
        }),
      }
    );
    setToken(responseData);
  };

  const logout = () => {
    unsetToken();
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
        <UserProvider value={{user, loading}}>
            {!loading && !user ? ( 
                <form onSubmit={handleSubmit} className="form-inline">
                <input
                  type="text"
                  name="identifier"
                  onChange={handleChange}
                  placeholder="Username"
                  className="md:p-2 form-input py-2 rounded mx-2"
                  required
                />
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                  className="md:p-2 form-input py-2 rounded mx-2"
                  required
                />

                <button
                  className="md:p-2 rounded py-2 text-black bg-purple-200 p-2"
                  type="submit"
                >
                  Login
                </button>
              </form>
            ) : ('') }
        
        {!loading &&
            (user ? (
                <a
                    className="md:p-2 py-2 block hover:text-purple-400"
                    onClick={logout}
                    style={{ cursor: 'pointer' }}
                >
                    Logout
                </a>) : ('')) }
        </UserProvider>
    );
};

export default NavAuth;