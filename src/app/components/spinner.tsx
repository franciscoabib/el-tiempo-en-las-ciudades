import React, { FC } from 'react';
import "@/app/assets/css/Spinner.css"

const Spinner: FC = () => {
    return(
        <div className="flex justify-center items-star pt-2 min-h-screen">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
export default Spinner;