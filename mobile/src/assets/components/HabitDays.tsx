import clsx from "clsx";
import dayjs from "dayjs";
import { TouchableOpacity, Dimensions, TouchableOpacityProps } from "react-native";
import { gerenateProgressPercentage } from "../../utils/generate-progress-percentage";

const weekDays = 7;
const screenHorizontalPadding = (32 * 2) / 5;

export const dayMarginBetween = 8;
export const daySize = (Dimensions.get('screen').width / weekDays) - (screenHorizontalPadding + 5);

interface Props extends TouchableOpacityProps{
    amountOfHabits?: number;
    amountCompleted?: number;
    date: Date;
};

export function HabitDay({amountOfHabits= 0, amountCompleted = 0, date, ...rest}: Props){
    const today = dayjs().startOf('day').toDate();
    const isCurrentDay = dayjs(date).isSame(today);
    const amountAccomplishedPercentage = amountOfHabits > 0 ? gerenateProgressPercentage(amountOfHabits, amountCompleted) : 0 ;

    return(
        <TouchableOpacity
        activeOpacity={0.5}
        style={{width: daySize, height: daySize}} 
        className={clsx("rounded-lg border-2 m-1", {
            ["bg-zinc-900 border-zinc-800"] : amountAccomplishedPercentage === 0,
            ["bg-violet-900 border-violet-800"] : amountAccomplishedPercentage > 0 && amountAccomplishedPercentage < 20,
            ["bg-violet-800 border-violet-700"] : amountAccomplishedPercentage >= 20 && amountAccomplishedPercentage < 40,
            ["bg-violet-700 border-violet-600"] : amountAccomplishedPercentage >= 40 && amountAccomplishedPercentage < 60,
            ["bg-violet-600 border-violet-500"] : amountAccomplishedPercentage >= 60 && amountAccomplishedPercentage < 80,
            ["bg-violet-500 border-violet-400"] : amountAccomplishedPercentage >= 80,
            ["border-zinc-500 border-3"]: isCurrentDay,
        })}
        {...rest}>

        </TouchableOpacity>
    )
}