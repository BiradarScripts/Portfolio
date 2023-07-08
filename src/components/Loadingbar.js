import React from 'react'

export default function loadingbar(props) {
  return (
    <div>
      <>

      <div className="loadpagebaap">
        <div className='load'>
        <div className="progress" style={{
              backgroundColor: "#977c23",
              borderRadius: "30px",
              height: "28px",
              width: `${props.count * 1}%`,
              color: "white",
              textAlign: "left",
              marginLeft: "-1px"
            }}>

        </div>

        </div>

        <div className="shownum">
            {Math.round(props.count)}%
        </div>

      </div>
        
        
      </>
    </div>
  )
}
