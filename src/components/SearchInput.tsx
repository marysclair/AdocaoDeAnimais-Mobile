import { TouchableOpacity, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
interface SearchInputProps {
  placeholder: string;
}

export function SearchInput({ placeholder }: SearchInputProps) {
  return (
    <View className="bg-secondary-light w-full rounded-lg p-1 flex flex-row shadow-lg">
      <TextInput
        className="py-4 px-6 w-[82%] bg-white  rounded-l-lg"
        placeholder={placeholder}
        placeholderTextColor="#7a6448"
      />
      <TouchableOpacity className="w-full flex flex-1 items-center justify-center">
        <FontAwesome name="search" size={32} color="#7a6448" />
      </TouchableOpacity>
    </View>
  );
}
