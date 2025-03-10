import { NextRequest, NextResponse } from "next/server";
import verifyKaryawan from "./helper/authorization";
import verifyPelanggan from "./helper/authorization";

export const middleware =
 async (request:NextRequest) => {
    if(request.nextUrl.pathname.startsWith(`/karyawan`)){
        // jika url diawali dengan "/karyawan" ambil data token dari cookie
        const token=request.cookies.get(`token`)?.value
        // prepare redirect to login
        const redirectlogin=request.nextUrl.clone()
        redirectlogin.pathname="/"
        if (typeof token === undefined){
            return NextResponse.redirect(redirectlogin)
        }
        const isVerifiedToken = await verifyKaryawan (token?? "")
        if(!isVerifiedToken) return NextResponse.redirect(redirectlogin)
            return NextResponse.next()
    }
    if(request.nextUrl.pathname.startsWith(`/pelanggan`)){
        // jika url diawali dengan "/karyawan" ambil data token dari cookie
        const token=request.cookies.get(`token`)?.value
        // prepare redirect to login
        const redirectlogin=request.nextUrl.clone()
        redirectlogin.pathname="/"
        if (typeof token === undefined){
            return NextResponse.redirect(redirectlogin)
        }
        const isVerifiedToken = await verifyPelanggan (token?? "")
        if(!isVerifiedToken) return NextResponse.redirect(redirectlogin)
            return NextResponse.next()
    }
    return NextResponse.next()

}
// menambahkan rute mana saja yang akan memberlakukan proses middleware
export const config = {
    matcher:[
        "/karyawan/:path*","/pelanggan/:path*"
    ]
}