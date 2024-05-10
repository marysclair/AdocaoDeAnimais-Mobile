import { TouchableOpacity, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AnimalType from "../interfaces/AnimalType";

interface SecondaryButtonProps {
  adoption?: {
    animal: AnimalType;
    handleIsModalAdoptionVisible: (animal: AnimalType) => void;
  };
}

export function SecondaryButton({ adoption }: SecondaryButtonProps) {
  return (
    <TouchableOpacity
      className="flex-row items-center mt-8 border-b-2 border-secondary-light w-16"
      onPress={() =>
        adoption && adoption.handleIsModalAdoptionVisible(adoption.animal)
      }
    >
      <Text className="text-primary-dark font-bold uppercase">Adotar</Text>
      <Ionicons name="heart" size={16} color="#D17575" />
    </TouchableOpacity>
  );
}
