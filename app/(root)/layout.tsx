import React from 'react'
import SideBar from '../../components/shared/SideBar'

function layout({children} : {children: React.ReactNode}) {
  return (
    <main className='root'>
      <SideBar />
      <div className='root-container'>
        <div className='wrapper'>
          {children}
        </div>
      </div>
    </main>
  )
}

export default layout