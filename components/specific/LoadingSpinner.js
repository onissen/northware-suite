/* jshint esversion:6 */

import { faDharmachakra } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import design from '../../styles/components/LoadingSpinner.module.sass';

export default function LoadingSpinner() {
    return (
        <div className={design.SpinnerContainer}>
            <div className={design.SpinningIcon}>
                <FontAwesomeIcon icon={faDharmachakra} />
            </div>
            <div className='mt-5'>
                <h3>Die Seite wird geladen...</h3>
            </div>
        </div>
    );
}