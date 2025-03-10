import { ScheduleType } from "../types"
import DropSchedule from "./dropSchedule"
import EditSchedule from "./editSchedule"

type props = {
    item: ScheduleType
}
const showTime = (date:string) => {
    const currentDate = new Date(date)
    return currentDate.toLocaleTimeString(
        `id-ID`,
        {
            year:"numeric",
            month:"long",
            day:"2-digit"

        }
    )
}
const Schedule = (myprop: props) => {
    return (
        <div className="flex flex-wrap w-full border rounded-md shadow-md my-2">
            <div className="w-full md:w-3/12 p-3 flex flex-col">
                <small className="text-xs font font-semibold text-sky-300">
                    Budal dari
                </small>
                <strong>{myprop.item.departured_location}</strong>
                <small className="text-xs font font-semibold text-sky-300">
                    Wayah Budal
                </small>
                <strong>{showTime(myprop.item.departured_time)}</strong>
            </div>
            <div className="w-full md:w-3/12 p-3 flex flex-col">
                <small className="text-xs font font-semibold text-sky-300">
                    Teko ndek
                </small>
                <strong>{myprop.item.arrived_location}</strong>
                <small className="text-xs font font-semibold text-sky-300">
                    Wayah teko
                </small>
                <strong>{showTime(myprop.item.arrived_time)}</strong>
            </div>
            <div className="w-full md:w-3/12 p-3 flex flex-col">
                <small className="text-xs font font-semibold text-sky-300">
                    Unit Kereta
                </small>
                <strong>{myprop.item.train_details.name}</strong>
                <small className="text-xs font font-semibold text-sky-300">
                    Harga
                </small>
                <strong>{myprop.item.price.toLocaleString(`en-us`,{style:`currency`,currency:`IDR`})}</strong>
                <div className="flex gap-3 items-center">
                    <DropSchedule schedule={myprop.item}/>
                    <EditSchedule schedule={myprop.item}/>
                </div>
            </div>
        </div>
    )
}
export default Schedule