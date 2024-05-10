import { Modal, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AnimalType from "../interfaces/AnimalType";
import { useState } from "react";

interface SelectProps {
  options: string[];
  filterOption: string;
  onChange: (name: string) => void;
}

export function Select({ options, filterOption, onChange }: SelectProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View className="py-4 px-5 rounded-lg bg-white m-1 border border-zinc-100">
      <TouchableOpacity
        className={`flex-row justify-between items-center mb-2 ${
          isVisible && "border-b pb-1 border-b-primary-dark"
        }`}
        onPress={() => {
          setIsVisible(!isVisible);
          onChange("");
        }}
      >
        <Text className="text-primary-dark">Filtrar por... {filterOption}</Text>
        <Ionicons name="chevron-down" size={16} color={"#7a6448"} />
      </TouchableOpacity>
      {isVisible && (
        <View>
          {options.map((obj) => {
            if (obj.length !== 0) {
              return (
                <TouchableOpacity key={obj} onPress={() => onChange(obj)}>
                  <Text className="my-1 text-terciary-light border-b-terciary-light border-b">
                    {obj}
                  </Text>
                </TouchableOpacity>
              );
            }
          })}
        </View>
      )}
    </View>
  );
}
