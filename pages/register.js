// import getConfig from 'next/config'
import { useState } from "react"
import { setCookie } from "nookies"
import Router from "next/router"
import {getStrapiURL} from "../utils/api"

// const { publicRuntimeConfig } = getConfig()

function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleRegister() {
    const registerInfo = {
      username: username,
      email: email,
      password: password,
    }

    const register = await fetch(getStrapiURL("/api/auth/local/register"), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerInfo),
    })

    const registerResponse = await register.json()
    console.log(registerResponse)

  }

  return (
    <>
      <h2>Register here</h2>

      <form>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Username"
        />
        <br />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
        <br />
        <button type="button" onClick={() => handleRegister()}>
          Register
        </button>
      </form>
    </>
  )
}

export default Register
