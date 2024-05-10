import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/Header";
import { AnimalGuardianBlock } from "../components/AnimalGuardianBlock";
import AnimalGuardianType from "../interfaces/AnimalGuardianType";
import { useState } from "react";
import { Copyright } from "../components/Copyright";

export function AnimalGuardian() {
  const [animalGuardian, setAnimalGuardian] = useState<AnimalGuardianType>({
    id: "1",
    address: "Rua Pedra Branca, 420",
    cpf: "104.042.6646-60",
    name: "Maria Clara",
    phoneNumber: "83 99850-3607",
  });
  return (
    <ScrollView className="flex flex-1 bg-primary-light scrol">
      <SafeAreaView className="flex-1 min-h-screen">
        <Header />
        <View className="px-6 py-9 ">
          <Text className="text-primary-dark text-xl font-bold mb-4">
            Minhas informações como tutor
          </Text>
          <AnimalGuardianBlock animalGuardian={animalGuardian} />
        </View>
      </SafeAreaView>
      <Copyright />
    </ScrollView>
  );
}
