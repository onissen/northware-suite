/* jshint esversion:6 */
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { useFetchUser } from "../../lib/authContext";
import styles from '../../styles/LoginForm.module.sass';
import LoginBrand from "../micro-components/LoginBrand";


export default function LoginForm(handleChange, handleSubmit) {
    const { user, loading} = useFetchUser();
    return (
    <main className={styles.loginBody}>
      <div className={styles.loginBox}>
        <LoginBrand brandIcon={faBriefcase} brandName='Northware Cockpit' bgClass='bg-cockpit' />
        {!loading && !user ? (
          <>
              <h1 className='text-center'>Login</h1>
              <form onSubmit={handleSubmit} className="">
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
          </>
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
      </div>
    </main>
    )
}