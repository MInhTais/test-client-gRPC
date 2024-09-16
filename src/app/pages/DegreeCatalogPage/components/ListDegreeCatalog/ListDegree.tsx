import classNames from 'classnames/bind'
import styles from './ListDegree.module.scss'
import { DegreesType } from '~/app/types/DegreesType.type'

const cx = classNames.bind(styles)

interface ListDegreeProps {
    degreeCatalogs: DegreesType[]
    mode: 'dark' | 'light'
    onEdit: (id: number) => void
    onDelete: (id: number) => void
}

export default function ListDegree({ degreeCatalogs, mode, onEdit, onDelete }: ListDegreeProps) {
    return (
        <div className={cx('list', { light: mode === 'light', dark: mode === 'dark' })}>
            {degreeCatalogs.map((degreeCatalog) => (
                <div key={degreeCatalog.Id} className={cx('item', { light: mode === 'light', dark: mode === 'dark' })}>
                    <span>{`Hi! ${degreeCatalog.DegName}`}</span>
                    <div className={cx('action')}>
                        <button onClick={() => onDelete(degreeCatalog.Id)}>
                            <i className='ri-delete-bin-5-line'></i>
                        </button>
                        <button onClick={() => onEdit(degreeCatalog.Id)}>
                            <i className='ri-file-edit-line'></i>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
