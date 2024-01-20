import { useEffect, useState } from "react"

export default () => {
    const [data, setData] = useState([
        { id: 1, category: 1, url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8fDA%3D" },
        { id: 2, category: 2, url: "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" },
        { id: 3, category: 2, url: "https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg" },
    ]);
    const [category, setCategory] = useState(1);

    // useEffect(() => {
    //     fetch("https://api.pexels.com/v1/search")
    //     .then(res => res.json())
    //     .then(res => {
    //         setData(res.photos)
    //     })
    // }, [])

    
    const result = category ? data.filter(img => img.category == category) : data;

    return <div>
        <select onChange={e => setCategory(e.target.value)}>
            <option value=""></option>
            <option value="1">Voiture</option>
            <option value="2">Animale</option>
        </select>

        <ul>
            {
                result.map((img) => {
                    return <li key={img.id}>
                        <span>{img.Category}</span>
                        <img width={100} src={img.url}/>
                    </li>
                })
            }
        </ul>
    </div>
}