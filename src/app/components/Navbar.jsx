import Image from "next/image";
import Link from "next/link";

export default function Navbar()
{
    return(
        <div>
            {/* <header className="flex justify-between px-20 w-screen bg-[#262626] h-16 items-center  ">
                <Image src="/header_logo.png" width={200} height={90} alt="Logo" />
                <button className="bg-[#7AA93C] w-28 h-10 rounded text-white hover:bg-green-500 font-semibold cursor-pointer">Buy now</button>
            </header> */}
            <nav className="flex my-7 mb-15 mx-auto justify-around items-center">
                <Image src="/logo.png" width={100} height={80} alt="Main Logo" />
                <ul className="flex gap-12 font-semibold text-2xl">
                    <li className="hover:text-[orange] cursor-pointer transition"><Link href="/demo">Demo</Link></li>
                    <li className="hover:text-[orange] cursor-pointer transition"><Link href="/pages">Pages</Link></li>
                    <li className="hover:text-[orange] cursor-pointer transition"><Link href="/features">Features</Link></li>
                </ul>
                <button className="bg-black rounded-full text-white px-5.5 py-3 font-semibold text-xl hover:bg-yellow-500 transition duration-200 cursor-pointer ">Purchase Now</button>
            </nav>
        </div>
    )
}