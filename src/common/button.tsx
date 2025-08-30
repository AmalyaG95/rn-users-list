import {
  Pressable,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';

type TButtonProps = {
  title: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  focusable?: boolean;
};

const Button = ({ title, onPress, buttonStyle, textStyle }: TButtonProps) => (
  <Pressable style={[styles.button, buttonStyle]} onPress={onPress}>
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </Pressable>
);

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 2,
    elevation: 4,
    textAlign: 'center',
    color: 'white',
    fontWeight: 500,
  },
  buttonText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'white',
    fontWeight: 500,
  },
});
