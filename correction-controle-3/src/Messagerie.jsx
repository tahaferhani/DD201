import { useState } from "react"

export default ({ showMsg }) => {
    const [msg, setMsg] = useState("");

    return <form>
        <input onChange={e => setMsg(e.target.value)}/>
        <button onClick={() => showMsg(msg)}>Envoyer le message</button>
    </form>
}