import { useState, useContext } from "react"
import { setCookie } from "nookies"
import Router from "next/router"
import { getStrapiURL } from "../utils/api"
import Link from "next/link"

import { AuthContext} from "../contexts/AuthContext"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [failedLogin, setFailedLogin] = useState(false);

  const {user, setUser} = useContext(AuthContext);

  async function handleLogin(event) {
    event.preventDefault()
    const loginInfo = {
      identifier: username,
      password: password,
    }
    
    /**
     * Fetches data to authenticate user.
     */
    const login = await fetch(getStrapiURL("/api/auth/local"), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
    const loginResponse = await login.json();

    
    if(loginResponse.jwt == null) {
        setFailedLogin(true)
        return
    } else {
        setFailedLogin(false)
        setCookie(null, "jwt", loginResponse.jwt, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          })
        setCookie(null, "user_id", loginResponse.user.id, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
        })
        setCookie(null, "username", loginResponse.user.username, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
        })
        setCookie(null, "user_email", loginResponse.user.email, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
        })
          setUser(loginResponse.user)
    }
    Router.push("/")
  }

  return (
    <>
    <div className="flex items-center  dark:bg-gray-900">
        <div className="container mx-auto">
            <div className="max-w-md mx-auto my-10">
                <div className="text-center">
                    <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign in</h1>
                    <p className="text-gray-500 dark:text-gray-400">Sign in to access your account</p>
                    
                    { failedLogin ? <p className="mt-6 text-danger-500 dark:text-danger-400">Incorrect username and password.</p> : <></>}

                </div>
                <div className="m-7">
                    <form onSubmit={handleLogin}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Username</label>
                            <input 
                                type="name" 
                                name="username" 
                                id="username" 
                                placeholder="Username" 
                                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" 
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}    
                            />
                        </div>
                        <div className="mb-6">
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                                <a href="#!" className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Forgot password?</a>
                            </div>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="Password" 
                                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" 
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}    
                            />
                        </div>
                        <div className="mb-6">
                            <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Sign in</button>
                        </div>
                        <p className="text-sm text-center text-gray-400">Don&#x27;t have an account yet? <Link href="/register" className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Sign up</Link>.</p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
