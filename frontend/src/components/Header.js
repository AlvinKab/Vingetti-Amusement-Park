import { Link } from 'react-router-dom'

const Header = () => {
    const content = (
        <header>
            <Link to='/customers/new'></Link>
            <Link to='/sections/get'></Link>
            <Link to='/customers/update'></Link>
            <Link to='/customers'></Link>
            <Link to='/sections'></Link>
        </header>
    )

    return content
}

export default Header