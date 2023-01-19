import dayjs from "dayjs";

export function generateDaysFromYearBegenning(){
    const dates = []
    const today = new Date()
    const firstDayOfTheYear = dayjs().startOf('year')

    let compareDate = firstDayOfTheYear
    while(compareDate.isBefore(today)){
        dates.push(compareDate.toDate())
        compareDate = compareDate.add(1, 'day')
    }
    
    return dates
}