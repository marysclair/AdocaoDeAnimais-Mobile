import { Image, Modal, Pressable, Text, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { PrimaryButton } from "./PrimaryButton";
import { AnimalBlock } from "./AnimalBlock";
import { useState } from "react";
import AnimalType from "../interfaces/AnimalType";

interface ModalAdoptionProps {
  animal?: AnimalType;
  isVisible: boolean;
  handleIsModalAdoptionVisible: (animal: AnimalType | null) => void;
}

export function ModalAdoption({
  animal,
  isVisible,
  handleIsModalAdoptionVisible,
}: ModalAdoptionProps) {
  const [nextDiv, setNextDiv] = useState<boolean>(true);
  const [adoptionReason, setAdoptionReason] = useState<string>("");
  const [isAdoptionCreated, setIsAdoptionCreated] = useState<boolean>(false);

  function handleTransitionNextDiv() {
    setNextDiv(!nextDiv);
  }

  function handleAdoption() {
    setIsAdoptionCreated(true);
    setNextDiv(true);
  }
  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View className="absolute bg-gray-900/80 h-full w-full z-30 flex flex-1 flex-col items-center justify-center">
        <View className="bg-white w-[85%] rounded-md p-2 flex-col items-center">
          <Pressable
            onPress={() => {
              handleIsModalAdoptionVisible(null);
              setIsAdoptionCreated(false);
              setNextDiv(true);
            }}
            className="ml-auto"
          >
            <Ionicons name="close-outline" size={32} color="#cdb28a" />
          </Pressable>
          {!isAdoptionCreated ? (
            <>
              <View className="w-[80%] mx-auto my-4">
                <Text className="font-bold text-lg text-primary-dark  text-center">
                  Agradecemos pela escolha!
                </Text>
                <Text className="font-medium text-base text-primary-dark text-center">
                  Vamos preencher os dados da sua adoção?
                </Text>
              </View>
              {nextDiv ? (
                <View className="w-full">
                  <Text className="text-base text-primary-dark my-4 text-justify">
                    Se esse é o bichinho que você quer mesmo adotar, pode
                    continuar.
                  </Text>
                  <AnimalBlock
                    isToAdopt
                    key={animal?.id}
                    animal={animal as AnimalType}
                  />

                  <View className="ml-auto mt-4">
                    <PrimaryButton
                      color="secondary-dark"
                      onClick={handleTransitionNextDiv}
                      children={
                        <Ionicons
                          name="arrow-forward-outline"
                          color="white"
                          size={16}
                        />
                      }
                    />
                  </View>
                </View>
              ) : (
                <View className="w-full">
                  <Text className="text-base text-primary-dark my-4 text-justify">
                    Agora vou precisar de algumas informações. Vamos lá.
                  </Text>
                  <View className="bg-secondary-dark w-full p-2 rounded-sm">
                    <Text className="text-primary-dark font-medium mb-1">
                      Estou adotando porque...
                    </Text>
                    <TextInput
                      className="bg-white rounded-md border border-zinc-100 shadow-md justify-start items-start align-top px-2 text-primary-dark"
                      numberOfLines={3}
                      multiline={true}
                      value={adoptionReason}
                      onChangeText={(value) => setAdoptionReason(value)}
                    />
                  </View>

                  <View className="flex-row items-center justify-between mt-4">
                    <PrimaryButton
                      color="secondary-dark"
                      onClick={handleTransitionNextDiv}
                      children={
                        <Ionicons
                          name="arrow-back-outline"
                          color="white"
                          size={16}
                        />
                      }
                    />
                    <PrimaryButton
                      color="terciary-light"
                      onClick={handleAdoption}
                      children={
                        <Text className="text-white uppercase font-semibold">
                          Adotar
                        </Text>
                      }
                    />
                  </View>
                </View>
              )}
            </>
          ) : (
            <View className="w-[80%] mx-auto">
              <Text className="font-bold text-lg text-primary-dark  text-center">
                Parabéns!
              </Text>
              <Text className="font-bold text-lg text-primary-dark  text-center">
                Agora {animal?.name} é sua nova companhia.{" "}
                <Ionicons name="heart" size={16} color="#D17575" />
              </Text>
              <Text className=" text-base text-primary-dark text-justify">
                Confiamos em você para ter a responsabilidade e compromisso de
                dar um lar adequado. Desejamos muito amor durante a jornada de
                vocês juntos!
              </Text>
              <Image
                source={require("../images/modal-adoption.png")}
                width={50}
                className="w-36 h-36 mx-auto my-4"
              />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
}
