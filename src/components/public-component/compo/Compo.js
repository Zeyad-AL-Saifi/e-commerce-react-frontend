import React from 'react';
import './Compo.css'
const Compo = (props) => {
    return (
        <>
            <div>
                <div className="compo">
                    <p className='text-compo'>{ props.text } :</p>
                    <button className='btn-compo'>More</button>
                </div>
                { props.children }
            </div>

        </>
    );
}

export default Compo;
