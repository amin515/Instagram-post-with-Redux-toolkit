
import React from 'react';
import './InstaModal.scss';
const InstaModal = ({children}) => {
  return (
    <div className='blur'>
        <div className="modal-wrapper">
            <div className="modal-content">{children}</div>
        </div>
    </div>
  )
}

export default InstaModal