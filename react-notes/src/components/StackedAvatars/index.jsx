import './style.scss';

const StackedAvatars = ({ users = [], dark }) => {
    return <div className="stacked-avatars">
        {
            users.map(({ id, first_name, last_name }) => {
                return <div className={`avatar ${dark ? 'dark' : ''}`} key={id}>
                    <span className="fullname">{ first_name } { last_name }</span>
                    { first_name.slice(0, 1) }{ last_name.slice(0, 1) }
                </div>
            })
        }
    </div>
}

export default StackedAvatars