import React from 'react'

function layout({children} : {children: React.ReactNode}) {
  return (
    <main className='root'>
      <div className='root-container'>
        <div className='wrapper'>
          {children}
        </div>
      </div>
    </main>
  )
}

export default layout