import { Fragment } from 'react/jsx-runtime'
import styles from './UpdateDegree.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
interface UpdateDegreeProps {
    onUpdateDegree: (id: number, name: string) => void
    id: number
    setOpenEdit: (open: boolean) => void
    valueEdit: string
}

const cx = classNames.bind(styles)
export default function UpdateDegree({ onUpdateDegree, id, setOpenEdit, valueEdit }: UpdateDegreeProps) {
    const [name, setName] = useState('')

    useEffect(() => {
        setName(valueEdit)
    }, [valueEdit])

    const handleSubmit = () => {
        onUpdateDegree(id, name)
        setOpenEdit(false)
    }

    return (
        <Fragment>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={cx('edit')}
                type='text'
                placeholder='Enter your name...'
            />
            <div className={cx('action')}>
                <button className={cx('confirm')} onClick={handleSubmit}>
                    Confirm
                </button>
                <button className={cx('cancel')} onClick={() => setOpenEdit(false)}>
                    Cancel
                </button>
            </div>
        </Fragment>
    )
}
