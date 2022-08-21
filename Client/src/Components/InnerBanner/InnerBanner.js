import React from 'react'

const InnerBanner = (props) => {
  return (
        <>
            <div className='container-fluid py-5 bg-primary text-white'>
                <div className='container'>
                    <h1>{props.Pagetitle}</h1>
                    <p>{props.Pagedesc}</p>
                </div>
            </div>
        </>
  )
}

export default InnerBanner