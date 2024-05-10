import { Image, Modal, Pressable, Text, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { PrimaryButton } from "./PrimaryButton";
import AnimalType from "../interfaces/AnimalType";
import { formatDate } from "../assets/scripts";

interface ModalUpdateProps {
  isVisible: boolean;
  text: string;
  figure: string;
  animal?: AnimalType;
  handleIsModalUpdateVisible: (animal: AnimalType | null) => void;
}

export function ModalUpdate({
  animal,
  isVisible,
  handleIsModalUpdateVisible,
  figure,
  text,
}: ModalUpdateProps) {
  const imageSource =
    figure === "delete-animal"
      ? require("../images/modal-delete-animal.png")
      : require("../images/modal-delete-animal.png");

  const [name, setName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");

  useEffect(() => {
    animal && setName(animal.name);
    animal && setDateOfBirth(formatDate(animal.dateOfBirth));
  }, [animal]);

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View className="absolute bg-gray-900/80 h-full w-full z-30 flex flex-1 flex-col items-center justify-center">
        <View className="bg-white w-[85%] rounded-md p-2 flex-col items-center border border-zinc-100 shadow-lg">
          <Pressable
            onPress={() => handleIsModalUpdateVisible(null)}
            className="ml-auto"
          >
            <Ionicons name="close-outline" size={32} color="#cdb28a" />
          </Pressable>
          <Image
            source={require("../images/modal-update-animal.png")}
            width={50}
            className={`${
              figure === "delete-animal" ? "h-40" : "h-36"
            } w-40 my-4`}
          />
          <Text className="font-bold text-lg text-primary-dark my-4">
            {text}
          </Text>
          <View className="bg-secondary-dark w-full mt-4 p-2 rounded-sm">
            <View>
              <Text className="text-primary-dark font-medium mb-1">Nome:</Text>
              <TextInput
                className="bg-white rounded-md border border-zinc-100 shadow-md text-primary-dark px-2 py-1"
                value={name}
                onChangeText={(value) => setName(value)}
              />
            </View>
            <View className="mt-2">
              <Text className="text-primary-dark font-medium mb-1">
                Data de nascimento:
              </Text>
              <View className="flex-row items-center bg-white rounded-md border border-zinc-100 shadow-md">
                <TextInput
                  className="w-[92%] text-primary-dark px-2 py-1"
                  value={dateOfBirth}
                  onChangeText={(value) => setDateOfBirth(value)}
                />
                <Ionicons
                  name="calendar-number-outline"
                  size={18}
                  color={"#D4DDB1"}
                />
              </View>
            </View>
            <View className="ml-auto mt-8">
              <PrimaryButton
                color="terciary-light"
                onClick={() => console.log()}
                children={
                  <Text className="text-white uppercase font-semibold">
                    Atualizar
                  </Text>
                }
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
