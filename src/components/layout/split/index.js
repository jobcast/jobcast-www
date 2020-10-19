import React from 'react'
import FixedLayout from '../fixed'
import Sidebar from '../../sidebar'

const SplitLayout = ({ children, heading }) => {
  return (
    <FixedLayout heading={heading}>
      <div className="clear">
        <div className="col-xs-12 col-sm-8 xs-mb70">{children}</div>
        <div className="col-xs-12 col-sm-4">
          <Sidebar />
        </div>
      </div>
    </FixedLayout>
  )
}

export default SplitLayout
