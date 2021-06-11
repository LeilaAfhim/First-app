import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/iftar.png" width={160} height={68}/>
            
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/Mosque"><a>Mosque Account</a></Link>
            <Link href="/about"><a>About</a></Link>
        </nav>
      );
}
 
export default Navbar;
