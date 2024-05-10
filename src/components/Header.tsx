import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Header() {
  return (
    <View className="bg-primary-dark w-full flex flex-row  py-8 px-7 justify-between items-center">
      <View className="flex flex-row items-center gap-1">
        <Ionicons name="paw" size={32} color="#d4ddb1" />
        <Text className="text-xl font-bold text-white ">Buddy</Text>
      </View>
    </View>
  );
}
