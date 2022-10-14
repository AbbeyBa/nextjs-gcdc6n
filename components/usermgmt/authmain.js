import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../../utils/initSupabase'
import Header from '../../components/Header'
import Head from '../../components/Head'



export default function authmain() {
  
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleLogin = async (email) => {
    
    

      const { error, data } = await supabase.auth.signIn({ email })
      
            if (error) {
        console.log({ error })
      } else {
        setSubmitted(true)
      }
    }
    if (submitted) {
      return (
        <>
      <Head />

      <Header />
      <main className="flex items-center justify-center">
      
    <div
		className="flex items-center bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="space-y-6">
        <div className="text-sm font-medium text-gray-900 dark:text-white">
          <h1>Please check your email to sign in</h1>
          <br></br>
          <p>Do close this browser page once you receive your Krisullis Magic Link</p>
        </div>
        </div>
        </div>
        
        </main>
        </>
      )
    }
       
  

  return (
    <>
      <Head />

      <Header />
      
      <main className="flex items-center justify-center">
        
    <div
		className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="space-y-6">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white text-center font-poppins ">Sign in here</h1>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center font-poppins">Please enter a Valid email ID to receive your Krisullis Magic Link</p>
        <div>
        <label for="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault()
              handleLogin(email)
            }}
            className="w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            disabled={loading}
          >
            <span>{loading ? 'Loading' : 'Send Krisullis Magic link'}</span>
          </button>
          <div>
            <br></br>
          </div>
          <button
            onClick={() => 
              router.back()
            }
     
          >
            <span>Click here to go back</span>
            </button>
        
        </div>
      </div>
      </div>
    
    </main>
    
    </>
  )
          }          
        
          
        