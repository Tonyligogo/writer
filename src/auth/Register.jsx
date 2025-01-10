import { useState } from "react"
import { server } from "../server";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
            await fetch(`${server}/register`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password}),
            credentials:'include',
        })
    }

  return (
    <div className="h-screen w-full grid place-content-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 border rounded-xl p-10 w-[300px] md:w-[460px]">
        <h1 className="text-2xl text-center font-semibold">Create Account</h1>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email" className="border rounded-md p-2"/>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Your password" className="border rounded-md p-2"/>
        <button className="bg-dark text-white px-4 py-2 rounded-md">Register</button>
    </form>
    </div>
  )
}

export default Register