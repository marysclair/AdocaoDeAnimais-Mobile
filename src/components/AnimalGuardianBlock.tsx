import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import AnimalGuardianType from "../interfaces/AnimalGuardianType";

interface AnimalGuardianBlockProps {
  animalGuardian: AnimalGuardianType;
}

export function AnimalGuardianBlock({
  animalGuardian,
}: AnimalGuardianBlockProps) {
  return (
    <>
      <View className="bg-secondary-dark h-8 w-16 opacity-60 relative top-4 -left-3 z-10"></View>
      <View className="bg-white rounded-lg py-5 px-4 w-full shadow-lg -z-10 border border-zinc-100">
        <View className="flex flex-row justify-between mb-8">
          <Text className="font-semibold text-base text-primary-dark">
            {animalGuardian.name}
          </Text>
          <View className="flex-row items-center">
            <TouchableOpacity className="mr-4">
              <Entypo name="edit" size={28} color="#7a6448" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="trash" size={28} color="#7a6448" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="mb-4">
          <Text className="text-primary-dark font-medium border-b border-terciary-light">
            {animalGuardian.address}
          </Text>
          <Text className="text-primary-dark font-medium border-b border-terciary-light">
            {animalGuardian.phoneNumber}
          </Text>
          <Text className="text-primary-dark font-medium border-b border-terciary-light">
            {animalGuardian.cpf}
          </Text>
        </View>
      </View>
      <View className="bg-secondary-dark h-8 w-16 opacity-60 relative bottom-4 left-[85%] z-10"></View>
    </>
  );
}
