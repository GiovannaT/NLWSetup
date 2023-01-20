import colors from "tailwindcss/colors";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps, View, Text } from "react-native";

interface Props extends TouchableOpacityProps{
  title: string;
  checked?: boolean;
}

export function CheckBox({ title, checked = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className="flex-row mb-2 items-center"
      {...rest}
    >
      {checked ? (
        <View className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center">
          <Feather name="check" size={20} color={colors.white}></Feather>
        </View>
      ) : (
        <View className="h-8 w-8 bg-zinc-900 rounded-lg items-center justify-center" />
      )}

      <Text className="text-white text-base ml-3">{title}</Text>
    </TouchableOpacity>
  );
}
