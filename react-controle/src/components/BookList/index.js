export default ({books, updateBook, deleteBook}) => {
    const buttonStyle = {
        backgroundColor: "#000",
        color: "#fff",
        border: 0,
        padding: "6px 20px",
        borderRadius: 4,
        marginLeft: 6
    }

    return <table border={1}>
        <thead>
            <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Active</th>
            </tr>
        </thead>
        <tbody>
            {
                books && books.map((book, index) => {
                    return <tr key={index}>
                        <th>{book.title}</th>
                        <th>{book.price}</th>
                        <th>
                            <input type="checkbox" checked={book.active}/>
                        </th>
                        <td>
                            <button onClick={() => updateBook(book, index)} style={buttonStyle}>
                                Update
                            </button>
                            <button onClick={() => deleteBook(index)} style={buttonStyle}>
                                Delete
                            </button>
                        </td>
                    </tr>
                })
            }
        </tbody>
    </table>
}