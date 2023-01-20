import colors from "tailwindcss/colors";
import { Feather } from "@expo/vector-icons";
import { View, TouchableOpacity, Text } from "react-native";

import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />

      <TouchableOpacity activeOpacity={0.5} className="flex flex-row items-center h-11 px-4 border border-violet-500 rounded-lg">
        <Feather name="plus" size={20} color={colors.violet[500]} />
        <Text className="text-white ml-3 font-semibold text-base">
          Novo hábito
        </Text>
      </TouchableOpacity>
    </View>
  );
}
