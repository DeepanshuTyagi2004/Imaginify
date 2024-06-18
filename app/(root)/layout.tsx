import React from 'react'
import SideBar from '../../components/shared/SideBar'
import MobileNav from '@/components/shared/MobileNav'

function layout({children} : {children: React.ReactNode}) {
  return (
    <main className='root'>
      <SideBar />
      <MobileNav />
      <div className='root-container'>
        <div className='wrapper'>
          {children}
        </div>
      </div>
    </main>
  )
}

export default layout