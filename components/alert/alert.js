import style from './alert.module.css'
import {clsx} from 'clsx'

export default function Alert({childern, type}){
    return (
        <div className={clsx({
            [style.success]: type === 'success',
            [style.error]: type === 'error'
        })}>
            {childern}
        </div>
    )
}