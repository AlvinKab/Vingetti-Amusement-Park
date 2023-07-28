const AllSections = () => {
    const content = (
        <div className="section-info">
            <p>Section name: {}</p>
            <p>Dimensions(metres): {}</p>
            <p>Price: {}</p>
            <span><button>delete</button></span>
        </div>
    )

    return content
}

export default AllSections