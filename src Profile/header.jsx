export default function Header() {
    return (
        <header style={{ textAlign: 'center' }}>
            <h1>My Personal Profile</h1>
            <nav>
                <ul style={{ listStyleType: 'none', padding: 20, margin: 10 }}>
                    <li style={{ display: 'inline', margin: '10px' }}>
                        <a href="#">Home</a>
                    </li>
                    <li style={{ display: 'inline', margin: '10px' }}>
                        <a href="#">About</a>
                    </li>
                    <li style={{ display: 'inline', margin: '10px' }}>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
