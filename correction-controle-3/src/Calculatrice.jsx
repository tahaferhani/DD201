import { useState } from "react"

export default () => {
    const [data, setData] = useState({
        input1: 0,
        input2: 0,
        result: 0
    })

    const [operation, setOperation] = useState("+")

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleOperationChange = (e) => {
        setOperation(e.target.value)
    }

    const handleClick = () => {
        if (operation == "+")
            setData({
                ...data,
                result: parseFloat(data.input1) + parseFloat(data.input2)
            })
        else
            setData({
                ...data,
                result: parseFloat(data.input1) - parseFloat(data.input2)
            })
    }

    return <div>
        <form>
            <input name="input1" onChange={handleChange}/>
            <input name="input2" onChange={handleChange}/>
            <select onChange={handleOperationChange}>
                <option>+</option>
                <option>-</option>
            </select>
            <button type="button" onClick={handleClick}>Calculer</button>
            <br/>
            <h2>{data.result}</h2>
        </form>
    </div>
}