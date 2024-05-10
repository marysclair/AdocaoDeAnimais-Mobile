import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Header } from "../components/Header";
import { SearchInput } from "../components/SearchInput";
import { useEffect, useState } from "react";
import AnimalType from "../interfaces/AnimalType";
import { Copyright } from "../components/Copyright";
import { ModalDelete } from "../components/ModalDelete";
import { PrimaryButton } from "../components/PrimaryButton";
import { AnimalBlock } from "../components/AnimalBlock";
import { Select } from "../components/Select";
import { ModalUpdate } from "../components/ModalUpdate";
import { ModalAdoption } from "../components/ModalAdoption";

export function Animal() {
  const animalsExample = [
    {
      id: "ac5688f9-09a5-4a91-80a6-5c2a01c3ef78",
      name: "Jiji",
      dateOfBirth: "2024-04-05",
      personality: "Sonolento",
      species: "Gato",
      breed: "Frajola",
    },
    {
      id: "ac5688f8-09a5-4a91-80a6-5c2a01c3ef78",
      name: "Orégadu",
      dateOfBirth: "2024-04-05",
      personality: "Empolgado",
      species: "Cachorro",
      breed: "Golden",
    },
  ];
  const [animals, setAnimals] = useState<AnimalType[]>([]);

  const [isModalDeleteVisible, setIsModalDeleteVisible] =
    useState<boolean>(false);
  const [isModalUpdateVisible, setIsModalUpdateVisible] =
    useState<boolean>(false);
  const [isModalAdoptionVisible, setIsModalAdoptionVisible] =
    useState<boolean>(false);

  const [animalSelected, setAnimalSelected] = useState<AnimalType | null>(null);

  const [filterOptionFirst, setFilterOptionFirst] = useState("");
  const [filterOptionSecond, setFilterOptionSecond] = useState("");

  function handlePickFilter(name: string) {
    setFilterOptionFirst(name);
    console.log(name);
  }

  function handleIsModalDeleteVisible() {
    setIsModalDeleteVisible(!isModalDeleteVisible);
  }

  function handleIsModalUpdateVisible(animal: AnimalType | null) {
    console.log(animal);
    setAnimalSelected(animal);
    setIsModalUpdateVisible(!isModalUpdateVisible);
  }

  function handleIsModalAdoptionVisible(animal: AnimalType | null) {
    setAnimalSelected(animal);
    setIsModalAdoptionVisible(!isModalAdoptionVisible);
  }

  async function loadAnimals() {
    try {
      const response = await fetch("http://192.168.0.7:8080/animals");
      const animalsResponse = await response.json();
      console.log(animalsResponse);
      setAnimals(animalsResponse);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadAnimals();
  }, []);

  return (
    <ScrollView className="flex flex-1 bg-primary-light">
      <SafeAreaView className="flex-1 min-h-screen">
        <Header />
        <View className="px-6 pt-9 ">
          <Text className="text-primary-dark text-xl font-bold mb-4">
            Procurando um animal para adotar?
          </Text>
          <View className="bg-secondary-dark rounded-lg">
            <SearchInput placeholder="Buscar animalzinho..." />
            <Select
              options={["Gatos 😺", "Cachorros 🐶"]}
              onChange={setFilterOptionFirst}
              filterOption={filterOptionFirst}
            />
            {filterOptionFirst.length !== 0 && (
              <Select
                options={animals.map((obj) => {
                  if (filterOptionFirst.includes(obj.species)) {
                    return obj.breed;
                  }
                  return "";
                })}
                onChange={setFilterOptionSecond}
                filterOption={filterOptionSecond}
              />
            )}
          </View>

          <View className="mb-12"></View>
          {animals.length > 0 ? (
            animals.map((obj) => {
              return (
                <AnimalBlock
                  isToAdopt={false}
                  key={obj.id}
                  animal={obj}
                  setIsModalDeleteVisible={handleIsModalDeleteVisible}
                  handleIsModalUpdateVisible={handleIsModalUpdateVisible}
                  handleIsModalAdoptionVisible={handleIsModalAdoptionVisible}
                />
              );
            })
          ) : (
            <View className="w-[90%] mx-auto flex-col items-center">
              <Text className="text-center text-terciary-light font-medium text-xl mb-8">
                Você não adotou nenhum bichinho ainda!
              </Text>
              <PrimaryButton
                color="secondary-dark"
                children={
                  <Text className="font-bold text-white">
                    Fazer minha primeira adoção
                  </Text>
                }
                onClick={() => console.log("clicou")}
              />
            </View>
          )}
        </View>

        <ModalDelete
          text="Deseja deletar o bichinho?"
          figure="delete-animal"
          isVisible={isModalDeleteVisible}
          setIsModalDeleteVisible={handleIsModalDeleteVisible}
        />
        <ModalUpdate
          text="Vamos atualizar os dados?"
          figure="delete-animal"
          animal={animalSelected as AnimalType}
          isVisible={isModalUpdateVisible}
          handleIsModalUpdateVisible={handleIsModalUpdateVisible}
        />
        <ModalAdoption
          animal={animalSelected as AnimalType}
          isVisible={isModalAdoptionVisible}
          handleIsModalAdoptionVisible={handleIsModalAdoptionVisible}
        />
      </SafeAreaView>
      <Copyright />
    </ScrollView>
  );
}
