const AllCustomers = () => {
    const content = (
        <>
            <div>
                <div className="searchbar">
                    {/* Look up how to create a searchbar in a full MERN stack */}
                </div>
                <div className="delete-old">
                    <button>
                        
                    </button>
                </div>
            </div>
            <div className="customer-info">
                <p>Random ID: {}</p>
                <p>Name: {} {}</p>
                <p>Sections visited: {}</p>
                <p>{/* date */}</p>
                <span><button>delete</button></span>
            </div>
        </>
    )
    return content
}

export default AllCustomers