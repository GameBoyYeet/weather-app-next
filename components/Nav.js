import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                    <Link href="/select_vanilla">Vanilla</Link>
                    <Link href="/dropdown_vanilla">Dropdown-vanilla</Link>
                    <Link href="/dropdown_radix">Dropdown-radix</Link>
                    <Link href="/popover_radix">Popover-radix</Link>
                   

                </li>
            </ul>
            
        </nav>
    )
}


export default Nav