/* jshint esversion:6 */
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { useFetchUser } from "../../lib/authContext";
import design from '../../styles/components/LoginForm.module.sass';
import LoginBrand from "../micro-components/LoginBrand";


export default function LoginForm(props) {
    const { user, loading} = useFetchUser();
    return (
    <main className={design.loginBody}>
      <div className={design.loginBox}>
        <LoginBrand brandIcon={faBriefcase} brandName='Northware Cockpit' bgClass='bg-cockpit' />
        {!loading && !user ? (
          <div className="p-9" >
            <h1 className='text-center'>Login</h1>
            <form onSubmit={props.handleSubmit} className="flex flex-col">
              <div class="form-floating my-3">
                  <input type="text" name="identifier" id="input-identifier" onChange={props.handleChange} required class="form-control-lg peer" placeholder=" " />
                  <label for="input-identifier" class="peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Benutzername</label>
              </div>

              <div class="form-floating my-3">
                  <input type="password" name="password" id="input-password" onChange={props.handleChange} required class="form-control-lg peer" placeholder=" " />
                  <label for="input-password" class="peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Passwort</label>
              </div>
              <button class="btn-lg btn-primary w-full my-3" type="submit">Login</button>
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