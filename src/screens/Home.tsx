import { ScrollView, Text, View } from "react-native";
import { Header } from "../components/Header";
import { SearchInput } from "../components/SearchInput";
import { AdoptionBlock } from "../components/AdoptionBlock";
import { useEffect, useState } from "react";
import AdoptionType from "../interfaces/AdoptionType";
import { Copyright } from "../components/Copyright";
import { ModalDelete } from "../components/ModalDelete";
import { PrimaryButton } from "../components/PrimaryButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { ModalAnimal } from "../components/ModalAnimal";
import AnimalType from "../interfaces/AnimalType";

export function Home() {
  const adoptionsExample = [
    {
      id: "4a5d2c70-f4cd-4acd-8512-7d54601b1606",
      animalGuardian: {
        id: "17be49f5-77ba-4006-848b-ba8582b334bd",
        name: "Clara",
        phoneNumber: "(83) 99850-3607",
        address: "Rua Pedra Branca",
        cpf: "839.985.036-07",
      },
      animal: {
        id: "ac5688f9-09a5-4a91-80a6-5c2a01c3ef78",
        name: "Jiji",
        dateOfBirth: "2024-04-05",
        personality: "Sonolento",
        species: "Gato",
        breed: "Frajola",
      },
      date: "2024-04-05T13:34:12.6821778",
      reason: "Quero uma companhia para mim!",
    },
    {
      id: "4a5d2c72-f4cd-4acd-8512-7d54601b1606",
      animalGuardian: {
        id: "17be49f5-77ba-4006-848b-ba8582b334bd",
        name: "Clara",
        phoneNumber: "(83) 99850-3607",
        address: "Rua Pedra Branca",
        cpf: "839.985.036-07",
      },
      animal: {
        id: "ac5688f9-09a5-4a91-80a6-5c2a01c3ef78",
        name: "Orégadu",
        dateOfBirth: "2024-04-05",
        personality: "Sonolento",
        species: "Cachorro",
        breed: "Golden",
      },
      date: "2024-04-05T13:34:12.6821778",
      reason: "Quero uma companhia para Dandara.",
    },
  ];

  const [adoptions, setAdoptions] = useState<AdoptionType[]>([]);

  const [animalSelected, setAnimalSelected] = useState<AnimalType | null>(null);

  const [isModalDeleteVisible, setIsModalDeleteVisible] =
    useState<boolean>(false);
  const [isModalAnimalVisible, setIsModalAnimalVisible] =
    useState<boolean>(false);

  function handleIsModalDeleteVisible() {
    setIsModalDeleteVisible(!isModalDeleteVisible);
  }

  function handleIsModalAnimalVisible(animal: AnimalType | null) {
    setAnimalSelected(animal);
    setIsModalAnimalVisible(!isModalAnimalVisible);
  }

  async function loadAdoptions() {
    fetch("http://192.168.0.7/adoptions")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const adoptionsResponse = res;
        setAdoptions(adoptionsResponse);
      })
      .catch((error) => {
        console.log(error);
        console.error(error);
      });
  }

  useEffect(() => {
    loadAdoptions();
  }, []);

  return (
    <ScrollView className="flex flex-1 bg-primary-light scrol">
      <SafeAreaView className="flex-1 min-h-screen">
        <Header />
        <View className="px-6 pt-9 ">
          <Text className="text-primary-dark text-xl font-bold mb-4">
            Minhas adoções
          </Text>
          <SearchInput placeholder="Buscar adoção..." />
          <View className="mb-12"></View>
          {adoptions.length > 0 ? (
            adoptions.map((obj) => {
              return (
                <AdoptionBlock
                  key={obj.id}
                  adoption={obj}
                  handleIsModalAnimalVisible={handleIsModalAnimalVisible}
                  handleIsModalDeleteVisible={handleIsModalDeleteVisible}
                />
              );
            })
          ) : (
            <View className="w-[90%] mx-auto flex-col items-center">
              <Text className="text-center text-terciary-light font-medium text-xl mb-8">
                Você não adotou nenhum bichinho ainda!
              </Text>
            </View>
          )}
        </View>
        <ModalDelete
          text="Deseja deletar a adoção?"
          figure="delete-adoption"
          isVisible={isModalDeleteVisible}
          setIsModalDeleteVisible={handleIsModalDeleteVisible}
        />
        <ModalAnimal
          animal={animalSelected as AnimalType}
          isVisible={isModalAnimalVisible}
          handleIsModalAnimalVisible={handleIsModalAnimalVisible}
        />
      </SafeAreaView>
      <Copyright />
    </ScrollView>
  );
}
