import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';

const faqs = [
  {
    question: 'How do I enroll in a course?',
    answer: 'To enroll in a course, simply browse through our course catalog, select the course you\'re interested in, and click the "Enroll" button. You\'ll need to complete the payment process to access the course materials.',
  },
  {
    question: 'Can I access courses offline?',
    answer: 'Yes, you can download course materials for offline viewing. Look for the download icon next to the course content you want to access offline.',
  },
  {
    question: 'How do I reset my password?',
    answer: 'If you\'ve forgotten your password, click on the "Forgot Password" link on the login screen. Enter your email address, and we\'ll send you instructions to reset your password.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment gateway.',
  },
  {
    question: 'Can I get a refund for a course?',
    answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with a course, contact our support team within 30 days of purchase for a full refund.',
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach our support team by calling 01623398837 or emailing mirzahasan619@gmail.com. We typically respond within 24 hours.',
  },
];

export default function FAQScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Frequently Asked Questions</Text>
          <Text style={styles.subtitle}>
            Find answers to common questions about our platform
          </Text>
        </View>

        <View style={styles.faqList}>
          {faqs.map((faq, index) => (
            <View key={index} style={styles.faqItem}>
              <View style={styles.questionContainer}>
                <MaterialIcons name="help" size={24} color={colors.primary} />
                <Text style={styles.question}>{faq.question}</Text>
              </View>
              <Text style={styles.answer}>{faq.answer}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
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
    fontSize: sizes.h1,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: sizes.base,
  },
  subtitle: {
    fontSize: sizes.body1,
    color: colors.text.secondary,
  },
  faqList: {
    padding: sizes.padding,
  },
  faqItem: {
    backgroundColor: colors.white,
    padding: sizes.padding,
    borderRadius: sizes.radius,
    marginBottom: sizes.base * 2,
    borderWidth: 1,
    borderColor: colors.card.border,
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: sizes.base,
  },
  question: {
    flex: 1,
    marginLeft: sizes.base,
    fontSize: sizes.body1,
    fontWeight: '600',
    color: colors.text.primary,
  },
  answer: {
    fontSize: sizes.body2,
    color: colors.text.secondary,
    lineHeight: sizes.base * 2,
  },
}); 