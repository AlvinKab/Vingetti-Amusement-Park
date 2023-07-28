import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
    const content = (
        <>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    )
    return content
}

export default Layout