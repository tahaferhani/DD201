import Loader from '../Loader';
import './style.scss';

const Button = ({ dark, loading, round, onClick, children }) => {
    return <button disabled={loading}
                    className={`btn ${dark ? 'dark' : ''} ${loading ? 'loading' : ''} ${round ? 'round' : ''}`}
                    onClick={onClick}>
        { children }
        <Loader small dark={!dark} visible={loading}/>
    </button>
}

export default Button