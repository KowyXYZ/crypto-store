import Navbar from '@/components/Navbar'
import React from 'react'
import '@/styles/globals.css'

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Navbar/>
            {children}
        </body>
    </html>
  )
}

export default RootLayout