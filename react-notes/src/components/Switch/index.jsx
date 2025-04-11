import './style.scss';

const Switch = ({ checked, onChange, children }) => {
    return <label className="switch">
        {
            children &&
            <span className="label">{ children }</span>
        }
        <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} />
        <span className="slider"></span>
    </label>
}

export default Switch