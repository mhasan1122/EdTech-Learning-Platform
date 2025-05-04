import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';

interface QuizQuestionProps {
  question: string;
  options: string[];
  selectedAnswer?: number;
  onSelectAnswer: (index: number) => void;
}

export const QuizQuestion = ({
  question,
  options,
  selectedAnswer,
  onSelectAnswer,
}: QuizQuestionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.options}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selectedAnswer === index && styles.selectedOption,
            ]}
            onPress={() => onSelectAnswer(index)}
          >
            <View style={[
              styles.checkbox,
              selectedAnswer === index && styles.selectedCheckbox,
            ]}>
              {selectedAnswer === index && (
                <MaterialIcons name="check" size={16} color={colors.white} />
              )}
            </View>
            <Text style={[
              styles.optionText,
              selectedAnswer === index && styles.selectedOptionText,
            ]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
    padding: sizes.padding,
    shadowColor: colors.card.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  question: {
    fontSize: sizes.h3,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: sizes.padding,
  },
  options: {
    gap: sizes.base,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: sizes.base * 1.5,
    borderWidth: 1,
    borderColor: colors.card.border,
    borderRadius: sizes.radius,
  },
  selectedOption: {
    backgroundColor: `${colors.primary}10`,
    borderColor: colors.primary,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.text.secondary,
    marginRight: sizes.base,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedCheckbox: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  optionText: {
    fontSize: sizes.body1,
    color: colors.text.primary,
    flex: 1,
  },
  selectedOptionText: {
    color: colors.primary,
    fontWeight: '500',
  },
});