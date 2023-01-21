/* jshint esversion:6 */

import design from '../../styles/components/LoadingSpinner.module.sass';

export default function LoadingSpinner() {
    return (
        <div className={design.loader}>
            <div className={design.loadingSpinner}>
                {/* Hier wird ein CSS Loading Spinner zu sehen sein */}
            </div>
        </div>
    );
}