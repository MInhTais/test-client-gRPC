import { useState } from 'react'
import styles from './CreateDegree.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface CreateDegreeProps {
    onCreateDegree: (name: string) => void
    mode: 'dark' | 'light'
}

export default function CreateDegree({ onCreateDegree, mode }: CreateDegreeProps) {
    const [name, setName] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onCreateDegree(name)
        setName('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className={cx('input', {
                    light: mode === 'light',
                    dark: mode === 'dark'
                })}
                onChange={(e) => setName(e.target.value)}
                value={name}
                type='text'
                placeholder='Enter your Degree Catalog...'
            />
            <button type='submit'>Submit</button>
        </form>
    )
}
