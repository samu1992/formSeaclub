import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import styles from '../page.module.css'

const Form = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const toggleShowPassword = (passwordStateSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
        passwordStateSetter((prevState) => !prevState);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, inputStateSetter: React.Dispatch<React.SetStateAction<string>>) => {
        inputStateSetter(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
        } else {
            // Simulate account creation logic
            console.log('Creating account with email:', email);
            console.log('Account created successfully');
            // Reset form fields
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setErrorMessage('');
        }
    }
    return (
        <form className={styles.containerForm} onSubmit={handleSubmit}>
            <div className={styles.passwordInput}>
                <input
                    className={styles.input}
                    placeholder='email@example.com'
                    type='email'
                    value={email}
                    onChange={(e) => handleInputChange(e, setEmail)}
                />
            </div>
            <div className={styles.passwordInput}>
                <input
                    className={styles.input}
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    value={password}
                    onChange={(e) => handleInputChange(e, setPassword)}
                />
                <button
                    type='button'
                    className={styles.passwordToggle}
                    onClick={() => toggleShowPassword(setShowPassword)}
                >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
            </div>
            <div className={styles.passwordInput}>
                <input
                    className={styles.input}
                    type={showPassword2 ? 'text' : 'password'}
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => handleInputChange(e, setConfirmPassword)}
                />
                <button
                    type='button'
                    className={styles.passwordToggle}
                    onClick={() => toggleShowPassword(setShowPassword2)}
                >
                    {showPassword2 ? <FaEye /> : <FaEyeSlash />}
                </button>
            </div>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            <button className={styles.formButton} type='submit'>
                Sign up
            </button>
        </form>
    )
}

export default Form