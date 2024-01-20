import { useState } from "react";

export default () => {
    const [age, setAge] = useState(18);

    const increment = () => {
        if (age < 30)
            setAge(age + 1);
    }

    const decrement = () => {
        if (age > 18)
            setAge(age - 1);
    }

    return (
        <div>
            <h1>Age : {age}</h1>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    );
}