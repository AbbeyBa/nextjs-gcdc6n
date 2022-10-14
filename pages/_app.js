import React from 'react'
import { UserContextProvider } from '../components/hooks/authUser'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

 
export default function MyApp({ Component, pageProps }) {

  if (typeof document === 'undefined') {
    React.useLayoutEffect = React.useEffect;
  }
  
  return (
    

    <main>
      
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
      
    </main>
    
  )
}
 