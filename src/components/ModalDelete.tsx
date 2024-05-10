import { Image, Modal, Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { PrimaryButton } from "./PrimaryButton";

interface ModalDeleteProps {
  isVisible: boolean;
  text: string;
  figure: string;
  setIsModalDeleteVisible: () => void;
}

export function ModalDelete({
  isVisible,
  setIsModalDeleteVisible,
  figure,
  text,
}: ModalDeleteProps) {
  const imageSource =
    figure === "delete-animal"
      ? require("../images/modal-delete-animal.png")
      : require("../images/modal-delete-adoption.png");
  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View className="absolute bg-gray-900/80 h-full w-full z-30 flex flex-1 flex-col items-center justify-center">
        <View className="bg-white w-[85%] rounded-md p-2 flex-col items-center">
          <Pressable onPress={setIsModalDeleteVisible} className="ml-auto">
            <Ionicons name="close-outline" size={32} color="#cdb28a" />
          </Pressable>
          <Image
            source={imageSource}
            width={50}
            className={`${figure === "delete-animal" ? "h-40" : "h-36"} w-40`}
          />
          <Text className="font-bold text-lg text-primary-dark my-4">
            {text}
          </Text>
          <View className="flex-row items-center mt-8 mb-4">
            <PrimaryButton
              color="secondary-dark"
              children={<Text className="font-bold text-white">Sim</Text>}
              marginRight="mr-4"
              onClick={() => console.log("clicou")}
            />
            <PrimaryButton
              color="terciary-red"
              children={<Text className="font-bold text-white">Não</Text>}
              onClick={() => console.log("clicou")}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
