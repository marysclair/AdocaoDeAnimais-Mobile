import { TouchableOpacity, Text, Button } from "react-native";

interface PrimaryButtonProps {
  children: React.ReactNode;
  color: string;
  marginRight?: string;
  onClick: () => void;
}
export function PrimaryButton({
  color,
  marginRight,
  children,
  onClick,
}: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      className={`py-2 px-4 rounded-full bg-${color} ${marginRight} border border-primary-dark/30 shadow`}
      onPress={onClick}
    >
      {children}
    </TouchableOpacity>
  );
}
