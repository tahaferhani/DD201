export default ({book, setBook, addBook, updateIndex}) => {
    const handleChange = ({target}) => {
        const value = target.type == "checkbox" ? target.checked : target.value;
        
        // const newBook = {...book};
        // newBook[target.name] = value;
        // setBook(newBook);

        setBook({
            ...book,
            [target.name]: value
        })
    }

    return (
        <form>
            <h2>Book Form</h2>

            <input
                type="text"
                placeholder="Book Title"
                name="title"
                value={book.title}
                onChange={handleChange} />

            <input
                type="number"
                placeholder="Book Price"
                name="price"
                value={book.price}
                onChange={handleChange} />

            <input
                className="switch"
                type="checkbox"
                name="active"
                checked={book.active}
                onChange={handleChange}/>

            <button type="button" onClick={addBook}>{updateIndex == null ? "Add" : "Update"}</button>
        </form>
    )
}