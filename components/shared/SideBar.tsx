import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function SideBar() {
  return (
    <aside className='sidebar'>
      <div className='flex flex-col size-full gap-4'>
        <Link href="/" className='sidebar-logo'>
          <Image
            src="/assets/images/logo-text.svg"
            alt='logo'
            width={180}
            height={28}
          />
        </Link>
      </div>
    </aside>
  )
}

export default SideBar