import { Image, TouchableOpacity, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { formatDate } from "../assets/scripts";
import AnimalType from "../interfaces/AnimalType";
import { SecondaryButton } from "./SecondaryButton";

interface AnimalProps {
  animal: AnimalType;
  setIsModalDeleteVisible?: () => void;
  handleIsModalUpdateVisible?: (animal: AnimalType) => void;
  handleIsModalAdoptionVisible?: (animal: AnimalType) => void;
  isToAdopt: boolean;
}

export function AnimalBlock({
  animal,
  setIsModalDeleteVisible,
  handleIsModalUpdateVisible,
  handleIsModalAdoptionVisible,
  isToAdopt,
}: AnimalProps) {
  return (
    <>
      {!isToAdopt && (
        <View className="bg-secondary-dark h-8 w-16 opacity-60 relative top-4 -left-3 z-10" />
      )}
      <View className="bg-white rounded-lg py-5 px-4 w-full shadow-lg -z-10 border border-zinc-100">
        <View className="flex flex-row justify-between mb-8">
          <View>
            <View className="flex flex-row">
              <Text className="font-semibold text-base text-primary-dark">
                {animal.name}
              </Text>
            </View>
            <Text className="text-base text-terciary-light">
              {formatDate(animal.dateOfBirth)}
            </Text>
          </View>
          {!isToAdopt && (
            <View className="flex-row items-center">
              <TouchableOpacity
                onPress={() =>
                  handleIsModalUpdateVisible &&
                  handleIsModalUpdateVisible(animal)
                }
                className="mr-4"
              >
                <Entypo name="edit" size={28} color="#7a6448" />
              </TouchableOpacity>
              <TouchableOpacity onPress={setIsModalDeleteVisible}>
                <Entypo name="trash" size={28} color="#7a6448" />
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View className="flex flex-row gap-[5%]">
          <View className="w-[60%]">
            <Text className="text-primary-dark font-medium border-b border-terciary-light">
              {animal.personality}
            </Text>
            <Text className="text-primary-dark font-medium border-b border-terciary-light">
              {animal.species}
            </Text>
            <Text className="text-primary-dark font-medium border-b border-terciary-light">
              {animal.breed}
            </Text>
            {!isToAdopt && (
              <SecondaryButton
                adoption={
                  handleIsModalAdoptionVisible
                    ? { animal, handleIsModalAdoptionVisible }
                    : undefined
                }
              />
            )}
          </View>
          <View className="bg-terciary-light p-1 w-[30%] mb-2 h-28">
            <Image
              source={require("../images/frajola.jpg")}
              width={50}
              className="h-full w-full"
            />
          </View>
        </View>
      </View>
      {!isToAdopt && (
        <View className="bg-secondary-dark h-8 w-16 opacity-60 relative bottom-4 left-[85%] z-10" />
      )}
    </>
  );
}
