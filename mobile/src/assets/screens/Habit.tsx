import dayjs from "dayjs";
import { useRoute } from "@react-navigation/native";
import { ScrollView, View, Text } from "react-native";

import { CheckBox } from "../components/Checkbox";
import { BackButton } from "../components/BackButton";
import { ProgressBar } from "../components/ProgessBar";

interface Params {
  date: string;
}
export function Habit() {
  const route = useRoute();
  const { date } = route.params as Params;

  const parsedDate = dayjs(date);
  const dayOfWeek = parsedDate.format("dddd");
  const dayAndMonth = parsedDate.format("DD/MM");

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <BackButton />
        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayOfWeek}
        </Text>
        <Text className="mt-6 text-white font-extrabold text-3xl">
          {dayAndMonth}
        </Text>

        <ProgressBar progress={30}/>

        <View className="mt-6">
          <CheckBox title="Beber 2l de água" checked={false}></CheckBox>
          <CheckBox title="Caminhar" checked={false}></CheckBox>
        </View>
      </ScrollView>
    </View>
  );
}
