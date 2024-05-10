import { Image, TouchableOpacity, Text, View, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import AdoptionType from "../interfaces/AdoptionType";
import { formatDate } from "../assets/scripts";
import AnimalType from "../interfaces/AnimalType";

interface AdoptionProps {
  adoption: AdoptionType;
  handleIsModalDeleteVisible: () => void;
  handleIsModalAnimalVisible: (animal: AnimalType | null) => void;
}

export function AdoptionBlock({
  adoption,
  handleIsModalDeleteVisible,
  handleIsModalAnimalVisible,
}: AdoptionProps) {
  return (
    <>
      <View className="bg-secondary-dark h-8 w-16 opacity-60 relative top-4 -left-3 z-10"></View>
      <Pressable
        className="bg-white rounded-lg py-5 px-4 w-full shadow-lg -z-10"
        onPress={() => handleIsModalAnimalVisible(adoption.animal)}
      >
        <View className="flex flex-row justify-between mb-8">
          <View>
            <View className="flex flex-row">
              <Text className="font-semibold text-base text-primary-dark">
                {adoption.animal.name}{" "}
                {adoption.animal.species === "Gato" ? "🐱" : "🐶"}
              </Text>
            </View>
            <Text className="text-base text-terciary-light">
              {formatDate(adoption.date)}
            </Text>
          </View>
          <TouchableOpacity onPress={handleIsModalDeleteVisible}>
            <Entypo name="trash" size={28} color="#7a6448" />
          </TouchableOpacity>
        </View>

        <View className="flex flex-row gap-[5%]">
          <View className="w-[60%]">
            <Text className="font-medium text-primary-dark">
              Adotei porque...
            </Text>
            <View className="bg-secondary-light/60 w-full p-2">
              <Text className="text-primary-dark text-justify">
                {adoption.reason}
              </Text>
            </View>
          </View>
          <View className="bg-terciary-light p-1 w-[30%] mt-12 mb-2 h-28">
            <Image
              source={require("../images/frajola.jpg")}
              width={50}
              className="h-full w-full"
            />
          </View>
        </View>
      </Pressable>
      <View className="bg-secondary-dark h-8 w-16 opacity-60 relative bottom-4 left-[85%] z-10"></View>
    </>
  );
}
