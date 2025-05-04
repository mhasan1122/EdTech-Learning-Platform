import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';

const privacyPolicy = [
  {
    title: '1. Information We Collect',
    content: 'We collect information that you provide directly to us, including your name, email address, and payment information. We also collect information about your use of our platform.',
  },
  {
    title: '2. How We Use Your Information',
    content: 'We use the information we collect to provide and improve our services, process your payments, communicate with you, and personalize your experience.',
  },
  {
    title: '3. Information Sharing',
    content: 'We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our platform.',
  },
  {
    title: '4. Data Security',
    content: 'We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.',
  },
  {
    title: '5. Your Rights',
    content: 'You have the right to access, correct, or delete your personal information. You can also opt-out of marketing communications at any time.',
  },
  {
    title: '6. Cookies',
    content: 'We use cookies and similar technologies to enhance your experience and collect information about how you use our platform.',
  },
  {
    title: '7. Children\'s Privacy',
    content: 'Our platform is not intended for children under 13. We do not knowingly collect personal information from children under 13.',
  },
  {
    title: '8. Changes to This Policy',
    content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.',
  },
];

export default function PrivacyPolicyScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Privacy Policy</Text>
          <Text style={styles.subtitle}>
            Last updated: {new Date().toLocaleDateString()}
          </Text>
        </View>

        <View style={styles.content}>
          {privacyPolicy.map((section, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <Text style={styles.sectionContent}>{section.content}</Text>
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
  section: {
    marginBottom: sizes.padding,
  },
  sectionTitle: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: sizes.base,
  },
  sectionContent: {
    fontSize: sizes.body1,
    color: colors.text.secondary,
    lineHeight: sizes.base * 2,
  },
}); 