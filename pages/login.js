/*jshint esversion: 9 */

import { useState } from "react";
import { setToken, unsetToken } from "../lib/auth";
import { useFetchUser} from "../lib/authContext";
import { fetcher } from "../lib/api";
import LoginForm from "../components/specific/LoginForm";
import Head from "next/head";

const LoginPage = () => {
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
      <>
        <Head>
            <title>Login | Northware Cockpit</title>
        </Head>
        <LoginForm handleChange={handleChange} handleSubmit={handleSubmit}/>
      </>
    );
};

export default LoginPage;