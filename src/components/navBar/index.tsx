import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
    return(
        <nav>
            <div className="flex justify-center items-center w-screen p-3 border-yellow-400 border-2 bg-black">
                <Link href={"/"}>
                    <Image src={"/Star_Wars_Logo.svg.png"} alt="logo star wars" width={150} height={150} className="cursor-pointer" />
                </Link>
            </div>
        </nav>
    )
}