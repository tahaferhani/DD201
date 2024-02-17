import { useDispatch } from 'react-redux'

export default ({action, step, children}) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch({
            type: action,
            payload: step
        })
    }

    return <button onClick={handleClick}>{children}</button>
}