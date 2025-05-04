import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';

const terms = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing and using this platform, you accept and agree to be bound by the terms and provision of this agreement.',
  },
  {
    title: '2. Use License',
    content: 'Permission is granted to temporarily access the materials on our platform for personal, non-commercial transitory viewing only.',
  },
  {
    title: '3. User Account',
    content: 'You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.',
  },
  {
    title: '4. Course Access',
    content: 'Upon payment, you will be granted access to the course materials for the duration specified in the course description. Access may be revoked if these terms are violated.',
  },
  {
    title: '5. Refund Policy',
    content: 'We offer a 30-day money-back guarantee for all courses. Refunds will be processed within 5-7 business days of the request.',
  },
  {
    title: '6. Intellectual Property',
    content: 'All course materials, including videos, documents, and other content, are protected by copyright and other intellectual property laws.',
  },
  {
    title: '7. User Conduct',
    content: 'You agree not to use the platform to distribute, upload, or transmit any content that is unlawful, harmful, threatening, abusive, or otherwise objectionable.',
  },
  {
    title: '8. Limitation of Liability',
    content: 'In no event shall we be liable for any damages arising out of the use or inability to use the materials on our platform.',
  },
];

export default function TermsOfServiceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Terms of Service</Text>
          <Text style={styles.subtitle}>
            Last updated: {new Date().toLocaleDateString()}
          </Text>
        </View>

        <View style={styles.content}>
          {terms.map((term, index) => (
            <View key={index} style={styles.termItem}>
              <Text style={styles.termTitle}>{term.title}</Text>
              <Text style={styles.termContent}>{term.content}</Text>
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
  content: {
    padding: sizes.padding,
  },
  termItem: {
    marginBottom: sizes.padding,
  },
  termTitle: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: sizes.base,
  },
  termContent: {
    fontSize: sizes.body1,
    color: colors.text.secondary,
    lineHeight: sizes.base * 2,
  },
}); 