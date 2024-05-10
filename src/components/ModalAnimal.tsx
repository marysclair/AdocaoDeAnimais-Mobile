import { Modal, Pressable, View } from "react-native";
import AnimalType from "../interfaces/AnimalType";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AnimalBlock } from "./AnimalBlock";

interface ModalAnimalProps {
  animal: AnimalType;
  isVisible: boolean;
  handleIsModalAnimalVisible: (animal: AnimalType | null) => void;
}

export function ModalAnimal({
  animal,
  isVisible,
  handleIsModalAnimalVisible,
}: ModalAnimalProps) {
  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View className="absolute bg-gray-900/80 h-full w-full z-30 flex flex-1 flex-col items-center justify-center">
        <View className="bg-white w-[85%] rounded-md p-2 flex-col items-center">
          <Pressable
            onPress={() => {
              handleIsModalAnimalVisible(null);
            }}
            className="ml-auto"
          >
            <Ionicons name="close-outline" size={32} color="#cdb28a" />
          </Pressable>
          <AnimalBlock
            isToAdopt
            key={animal?.id}
            animal={animal as AnimalType}
          />
        </View>
      </View>
    </Modal>
  );
}
