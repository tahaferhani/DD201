// Question 1
const Greet = (props) => {
    return <h1>Hello {props.name}</h1>
}

const App = () => {
    return <>
        <Greet name="Adil" />
        <Greet name="Karim" />
    </>
}


// Question 2
const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1)
    }

    return <div>
        <p>{counter}</p>
        <button onClick={increment}>Increment</button>
    </div>
}

// Question 3
const TodoList = (props) => {
    return <div>
        {
            props.todos.map((todo, index) => {
                return <div key={index}>
                    <span>{todo.title}</span>
                    <span>{todo.complete}</span>
                </div>
            })
        }
    </div>
}

// Question 4
const Form = () => {
    const [data, setData] = useState({
        name: "",
        age: "",
    })

    const handleChange = (e, key) => {
        setData({
            ...data,
            [key]: e.target.value
        })
    }

    return <div>
        <input value={data.name} onChange={(e) => handleChange(e, "name")} />
        <input value={data.age} onChange={(e) => handleChange(e, "age")} />
    </div>
}

// Question 5
const ApiData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://")
            .then(resp => resp.json())
            .then(resp => setData(resp))
    }, [])

    return (
        <div>
            {
                data.map(item => {
                    return <span>{item.title}</span>
                })
            }
        </div>
    )
}
