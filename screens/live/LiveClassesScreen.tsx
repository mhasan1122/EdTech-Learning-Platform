import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { LiveClassCard } from '../../components/live/LiveClassCard';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';

const MOCK_LIVE_CLASSES = [
  {
    id: '1',
    title: 'Advanced React Native Patterns',
    instructor: 'John Doe',
    startTime: '10:00 AM',
    date: '2025-05-04',
    attendees: 45,
    thumbnail: 'https://api.a0.dev/assets/image?text=live%20coding%20class%20thumbnail&aspect=16:9'
  },
  {
    id: '2',
    title: 'UI/UX Design Workshop',
    instructor: 'Jane Smith',
    startTime: '2:30 PM',
    date: '2025-05-04',
    attendees: 32,
    thumbnail: 'https://api.a0.dev/assets/image?text=design%20workshop%20thumbnail&aspect=16:9'
  },
  {
    id: '3',
    title: 'Mobile App Architecture',
    instructor: 'Mike Johnson',
    startTime: '4:00 PM',
    date: '2025-05-04',
    attendees: 28,
    thumbnail: 'https://api.a0.dev/assets/image?text=mobile%20architecture%20class&aspect=16:9'
  }
];

export default function LiveClassesScreen() {
  const [refreshing, setRefreshing] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Live Classes</Text>
          <Text style={styles.subtitle}>Join interactive sessions with experts</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.upcoming}>
            <Text style={styles.sectionTitle}>Today's Schedule</Text>
            {MOCK_LIVE_CLASSES.map((liveClass) => (
              <LiveClassCard
                key={liveClass.id}
                title={liveClass.title}
                instructor={liveClass.instructor}
                startTime={liveClass.startTime}
                date={liveClass.date}
                attendees={liveClass.attendees}
                thumbnail={liveClass.thumbnail}
                onPress={() => {}}
              />
            ))}
          </View>
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
    flex: 1,
    padding: sizes.padding,
  },
  upcoming: {
    gap: sizes.base * 2,
  },
  sectionTitle: {
    fontSize: sizes.h2,
    fontWeight: '600',
    color: colors.text.primary,
  },
});