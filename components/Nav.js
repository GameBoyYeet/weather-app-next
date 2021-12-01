import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                    <Link href="/vanilla">Vanilla</Link>
                    <Link href="/dropdown">Dropdown</Link>
                    <Link href="/popover">Popover</Link>
                   

                </li>
            </ul>
            
        </nav>
    )
}


export default Nav