import Animal from "./AnimalType";
import AnimalGuardian from "./AnimalGuardianType";

export default interface AdoptionType {
  id: string;
  animalGuardian: AnimalGuardian;
  animal: Animal;
  date: string;
  reason: string;
}
