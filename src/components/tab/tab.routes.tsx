import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Foundation } from "@expo/vector-icons";
import { Home } from "../../screens/Home";
import { Animal } from "../../screens/Animal";
import { AnimalGuardian } from "../../screens/AnimalGuardian";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#b1ba8e",
        tabBarInactiveTintColor: "#cdb28a",
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Animais"
        component={Animal}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Foundation name="paw" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tutor"
        component={AnimalGuardian}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
