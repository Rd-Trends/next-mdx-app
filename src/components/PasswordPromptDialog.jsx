'use client'

import React, { useState } from 'react'

const PasswordPromptDialog = () => {
    const [password, setPassword] = useState('')
    const [passwordIncorrect, setPasswordIncorrect] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault() // Prevent the default form submission behavior

        setLoading(true)

        const response = await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password }),
        })

        if (response.status !== 200) {
            setPasswordIncorrect(true)
            setLoading(false)
        } else {
            window.location.reload()
        }
    }

    return (
        <div className='password-prompt-dialog'>
            <form onSubmit={handleSubmit} className='flex flex-col text-center'>
                <label htmlFor='password' className='text-3xl font-bold mb-4'>
                    Password:
                </label>
                <input
                    type='password'
                    id='password'
                    className='border-2 border-black rounded-lg p-2 mb-4 max-w-md mx-auto focus:outline-none'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type='submit'
                    className='bg-orange-500 p-5 max-w-sm text-white mx-auto rounded-lg text-2xl font-bold transition-all duration-200 hover:bg-orange-700 hover:text-black disabled:opacity-50'
                >
                    Submit
                </button>
                {passwordIncorrect && (
                    <p className='text-red-500 text-xl font-bold mt-4'>
                        Incorrect password
                    </p>
                )}
            </form>
        </div>
    )
}

export default PasswordPromptDialog
