/* jshint esversion:6 */
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { useFetchUser } from "../../lib/authContext";
import layout from '../../layout/LoginForm.module.sass';
import LoginBrand from "../micro-components/LoginBrand";


export default function LoginForm(props) {
    const { user, loading} = useFetchUser();
    return (
    <main className={layout.loginBody}>
      <div className={layout.loginBox}>
        <LoginBrand brandIcon={faBriefcase} brandName='Northware Cockpit' bgClass='bg-cockpit' />
        {!loading && !user ? (
          <div className="p-9" >
            <h1 className='text-center'>Login</h1>
            <form onSubmit={props.handleSubmit} className="">
              <input className="form-control-lg my-3" type="text" name="identifier" onChange={props.handleChange} placeholder="Benutzername" required />
              <input className="form-control-lg my-3" type="password" name="password" onChange={props.handleChange} placeholder="Passwort" required />

              <button type="submit">Login</button>
            </form>
          </div>
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