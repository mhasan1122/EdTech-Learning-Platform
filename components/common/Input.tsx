import { StyleSheet, View, Text, TextInput, TextInputProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';

interface InputProps extends TextInputProps {
  label: string;
  leftIcon?: keyof typeof MaterialIcons.glyphMap;
  error?: string;
}

export const Input = ({ 
  label,
  leftIcon,
  error,
  ...props 
}: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[
        styles.inputContainer,
        error ? styles.inputError : null
      ]}>
        {leftIcon && (
          <MaterialIcons 
            name={leftIcon} 
            size={20} 
            color={colors.text.secondary}
            style={styles.icon}
          />
        )}
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.text.tertiary}
          {...props}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: sizes.base,
  },
  label: {
    fontSize: sizes.body2,
    color: colors.text.secondary,
    marginBottom: sizes.base,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
    borderWidth: 1,
    borderColor: colors.card.border,
    paddingHorizontal: sizes.base * 2,
  },
  inputError: {
    borderColor: colors.error,
  },
  icon: {
    marginRight: sizes.base,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: sizes.body1,
    color: colors.text.primary,
  },
  errorText: {
    color: colors.error,
    fontSize: sizes.caption,
    marginTop: 4,
  },
});