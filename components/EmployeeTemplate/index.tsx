"use client"
import { removeCookies } from "@/helper/client-cookie"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ReactNode, useState } from "react"

type props = {
    children: ReactNode
}
const EmployeeTemplate = (myProp: props) => {
    const [show, setShow] = useState<boolean>(false)
    const router = useRouter()
    const handleLogOut =() =>{
        // ketika di log out akan menghapus cookie
        removeCookies(`token`)
        // direct to login page
        router.replace(`/`)

    }
    return (
        <div className="w-dvw">
            {/* header section */}
            <header className="flex items-center gap-3 w-full p-5 bg-slate-800">
                <button type="button" onClick={() => setShow(true)} className="size-8 rounded-full flex justify-center items-center bg-blue-900 hover:bg-blue-400 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
                        <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                    </svg>

                </button>
                <h1 className="text-xl font-bold text-white">
                    Sekop Sekop
                </h1>
            </header>

            {/* sidebar section */}
            <div className={`w-1/2 md:w-1/3 lg:w-1/4 bg-black h-dvh fixed top-0 transform transition-transform ${show ? "left-0" : "right-full"}`}>
                <div className="w-full relative ">
                    {/* brand section */}
                    <div className="w-full my-5 flex justify-center text-white font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                        </svg>
                    </div>
                    <div className="absolute right-3 -top-3 cursor-pointer text-2xl text-white" onClick={() => setShow(false)}>
                        &times;
                    </div>
                </div>
                {/* menu section */}
                <div className="w-full flex flex-col">
                    <Link href={`/Karyawan/kereta`}
                        className="w-full rounded-md text-white p-3 font-semibold hover:bg-green-500">
                        Data Kereta
                    </Link>
                    <Link href={`/Karyawan/admin`}
                        className="w-full rounded-md text-white p-3 font-semibold hover:bg-sky-500">
                        Data Admin
                    </Link>
                    <Link href={`/Karyawan/pelanggan`}
                        className="w-full rounded-md text-white p-3 font-semibold hover:bg-red-500">
                        Data Pelanggan
                    </Link>
                    <Link href={`/Karyawan/jadwal`}
                        className="w-full rounded-md text-white p-3 font-semibold hover:bg-purple-500">
                        Data Jadwal
                    </Link>
                     <div className="w-full rounded-md text-white p-3 font-semibold bg-lime-400 hover:bg-lime-700 cursor-cell" onClick={()=> handleLogOut}>
                        Keluar
                    </div>
                </div>
            </div>
            {myProp.children}
        </div>
    )
}
export default EmployeeTemplate