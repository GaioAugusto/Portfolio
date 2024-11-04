export interface SwitchProps {
  isOn: boolean;
  onToggle: () => void;
  onColor?: string;
  offColor?: string;
  leftLabel?: string;
  rightLabel?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
