import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from '../../components/common/Button';
import { QuizQuestion } from '../../components/quiz/QuizQuestion';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';

const MOCK_QUIZ = {
  id: '1',
  title: 'React Native Fundamentals',
  questions: [
    {
      id: '1',
      question: 'What is a React Native component?',
      options: [
        'A reusable piece of UI',
        'A database table',
        'A network request',
        'A design pattern'
      ],
      correctAnswer: 0
    },
    {
      id: '2',
      question: 'Which hook is used for side effects in React?',
      options: [
        'useState',
        'useEffect',
        'useContext',
        'useReducer'
      ],
      correctAnswer: 1
    },
    {
      id: '3',
      question: 'What is JSX?',
      options: [
        'A database query language',
        'A styling framework',
        'A JavaScript extension for UI code',
        'A testing framework'
      ],
      correctAnswer: 2
    }
  ]
};

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < MOCK_QUIZ.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === MOCK_QUIZ.questions[index].correctAnswer) {
        correct += 1;
      }
    });
    return (correct / MOCK_QUIZ.questions.length) * 100;
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.results}>
          <MaterialIcons 
            name={score >= 70 ? "emoji-events" : "refresh"} 
            size={64} 
            color={score >= 70 ? colors.primary : colors.warning} 
          />
          <Text style={styles.scoreText}>Your Score</Text>
          <Text style={styles.score}>{score}%</Text>
          <Button 
            title="Try Again" 
            onPress={() => {
              setCurrentQuestion(0);
              setSelectedAnswers([]);
              setShowResults(false);
            }}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>{MOCK_QUIZ.title}</Text>
          <Text style={styles.progress}>
            Question {currentQuestion + 1} of {MOCK_QUIZ.questions.length}
          </Text>
        </View>

        <View style={styles.questionContainer}>
          <QuizQuestion
            question={MOCK_QUIZ.questions[currentQuestion].question}
            options={MOCK_QUIZ.questions[currentQuestion].options}
            selectedAnswer={selectedAnswers[currentQuestion]}
            onSelectAnswer={handleAnswer}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title={currentQuestion === MOCK_QUIZ.questions.length - 1 ? "Submit" : "Next"}
          onPress={handleNext}
          disabled={selectedAnswers[currentQuestion] === undefined}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: sizes.padding,
  },
  title: {
    fontSize: sizes.h2,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: sizes.base,
  },
  progress: {
    fontSize: sizes.body1,
    color: colors.text.secondary,
  },
  questionContainer: {
    padding: sizes.padding,
  },
  footer: {
    padding: sizes.padding,
    borderTopWidth: 1,
    borderTopColor: colors.card.border,
    backgroundColor: colors.white,
  },
  results: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: sizes.padding,
  },
  scoreText: {
    fontSize: sizes.h2,
    color: colors.text.primary,
    marginTop: sizes.padding,
  },
  score: {
    fontSize: sizes.h1 * 2,
    fontWeight: 'bold',
    color: colors.primary,
    marginVertical: sizes.padding,
  },
});