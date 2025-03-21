// cookie merupakan tempat penyimpanan pada browser
// biasanya digunakan untuk menyimpan data sesi user
import { cookies } from "next/headers"

export const getServerCookie = async (
    key:string
):Promise<string> =>  {
    return (await cookies()).get(key)?.value ||""
}
