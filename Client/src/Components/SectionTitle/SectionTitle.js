import React from 'react'

const SectionTitle = (props) => {
    return (
        <>
            <div className='row mb-3'>
                <div className='col-lg-8 col-md-9 col-12 m-auto text-center'>
                    <h2>{props.SecTitle}</h2>
                    <p>
                        {props.SecDesc}
                    </p>
                </div>
            </div>
        </>
    )
}

export default SectionTitle