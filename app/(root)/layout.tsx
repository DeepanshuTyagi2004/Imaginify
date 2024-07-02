import React from 'react'
import SideBar from '../../components/shared/SideBar'
import MobileNav from '@/components/shared/MobileNav'
import { Toaster } from "@/components/ui/toaster"

function layout({children} : {children: React.ReactNode}) {
  return (
    <>
      <main className='root'>
        <SideBar />
        <MobileNav />
        <div className='root-container'>
          <div className='wrapper'>
            {children}
          </div>
        </div>
      </main>
      <Toaster />
    </>
  )
}

export default layout