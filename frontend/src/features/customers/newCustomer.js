import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const FIRSTNAME_REGEX = /^[A-Z]{2,10}$/
const SURNAME_REGEX = /^[A-Z]{2,10}$/

const NewCustomerTicket = () => {
    const randomID = Math.floor(Math.random() * 9000000) + 1000000

    const [firstName, setFirstName] = useState('')
    const [surname, setSurname] = useState('')
    const [validFirstName, setValidFirstName] = useState(false)
    const [validSurame, setValidSurame] = useState(false)
    const [paid, setPaid] = useState(false)

    useEffect(() => {
        setValidFirstName(FIRSTNAME_REGEX.test(firstName))
    }, [firstName])

    useEffect(() => {
        setValidSurame(SURNAME_REGEX.test(surname))
    }, [surname])

    const onFirstNameChanged = e => setFirstName(e.target.value)
    const onSurnameChanged = e => setSurname(e.target.value)

    const checkPayment = () => {
        setPaid(prevPaid => !prevPaid)
    }

    const saved = [randomID, firstName, surname].every(Boolean)
    const onSaveCustomer = async (e) => {
        e.preventDefault()
        if (saved) {
            await addNewCustomer({ randomID, firstName, surname })
        }
    }

    const content = (
        <>
            <div className="banner">
                <div className="logo"/>
                <div className="name">
                    VINGETTI AMUSEMENT PARK
                </div>
            </div>
            <form classname="new-customer-form" onSubmit={onSaveCustomer}>
                <div className="form-title">
                    <h2>ENTRANCE FEE TICKET</h2>
                </div>
                <div className="same-line">
                    <label>Random ID:</label>
                    <input
                        id="randomID"
                        name="randomID"
                        type="number"
                        readOnly value={randomID}
                    />
                </div>
                <div className="sameline">
                    <label>First Name: </label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={firstName}
                    />
                </div>
                <div className="sameline">
                    <label>Surname: </label>
                    <input
                        id="Surname"
                        name="Surname"
                        type="text"
                        value={surname}
                    />
                </div>
                <div className="same-line">
                    <label>Date: </label>
                    <input 
                        id="date"
                        name="date"
                        type="date"
                        readOnly value={`${getFullYear()}/${getMonth() + 1}/${getDate()}`}
                    />
                </div>
                <div className="same-line">
                    <p>Fee: Kshs.1000</p>
                    <p>Paybill No: 282 7245</p>
                </div>
                <div className="same-line">
                    <label>Has the entrance fee been paid? </label>
                    <input 
                        id="paid"
                        name="paid"
                        type="checkbox"
                        checked={paid}
                        onChange={checkPayment}
                    />
                </div>
                {paid && <button type="submit" className="customer-paid">Join in the fun!</button>}
            </form>
        </>
    )
}

export default NewCustomerTicket