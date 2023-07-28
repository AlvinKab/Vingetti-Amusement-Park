const AddCustomerSection = () => {
    const content = (
        <>
            <p>Section name: {/* section.sectionName */}</p>
            <p>Price: {/* section.price */}</p>
            <form>
                <label>Confirm random park ID: </label>
                <input 
                    /* Check for validity of random ID*/
                />
                {randomID && <button type="submit" className="customer-paid">Confirm purchase</button>}
            </form>
        </>
    )
}

export default AddCustomerSection