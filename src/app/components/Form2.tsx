import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from '../page.module.css';

interface LoginFormProps {}

export default function LoginForm(props: LoginFormProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, inputStateSetter: React.Dispatch<React.SetStateAction<string>>) => {
        inputStateSetter(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Simulate login logic
        console.log('Logging in with email:', email);
        console.log('Login successful');
        // Reset form fields
        setEmail('');
        setPassword('');
        setErrorMessage('');
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
                    onClick={toggleShowPassword}
                >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
            </div>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            <button className={styles.formButton} type='submit'>
                Log me in
            </button>
        </form>
    );
}
