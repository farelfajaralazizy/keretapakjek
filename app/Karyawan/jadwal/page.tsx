import axiosInstance from "@/helper/api"
import { getServerCookie } from "@/helper/server-cookie"
import { keretaType, ScheduleType } from "../types"
import Schedule from "./schedule"
import AddSchedule from "./addSchedule"

// get data jadwal
const GetJadwal = async (): Promise<ScheduleType[]> => {
    try {
        const url = `/schedule`
        const TOKEN = await getServerCookie(`token`)
        // hit end point
        const response: any = await axiosInstance
            .get(url, {
                headers: { authorization: `Bearer ${TOKEN}` }
            })

        if (response.data.success === true)
            return response.data.data
        return []
    } catch (error) {
        console.log(error)
        return []
    }
}

const getKereta = async () : Promise<keretaType[]> => {
    try {
        // get token from cookie
        const token = await getServerCookie(`token`)
        const url=`/train`
        // hit end point
        const response:any =await axiosInstance.get(url,{
            headers:{
                authorization:`bearer ${token}`
            }
        })
        if(response.data.success == true){
            return response.data.data
    }
        return[]
    } catch (error) {
        console.log(error);
        return[]
        
    }
 }

const JadwalPage = async () => {
    const dataJadwal = await GetJadwal()
    const dataKereta = await getKereta()
    return (
        <div className="w-full p-5 bg-white">
            <h1 className=" text-xl font font-semibold">
                Data jadwal
            </h1>
            <span className="text-sm text-slate-500">
                Halaman ini memuat daftar jadwal kereta yang tersedia
            </span>
            <AddSchedule trains={dataKereta}/>
            <div className="my-3">\
                {dataJadwal.length}
                {
                    dataJadwal.map((jadwal, index) => (
                        <Schedule key={`keyJadwal-${index}`}
                            item={jadwal} />
                    ))
                }
            </div>
        </div>
    )
}
export default JadwalPage