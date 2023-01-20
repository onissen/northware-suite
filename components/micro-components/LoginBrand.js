/*jshint esversion:6 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/components/LoginForm.module.sass';

export default function LoginBrand(props) {
    return (
        <div className={`${props.bgClass} mb-4 ${styles.loginBrand}`}>
          <FontAwesomeIcon icon={props.brandIcon} className="mr-2"/>
          <span>{props.brandName}</span>
        </div>
    );
}