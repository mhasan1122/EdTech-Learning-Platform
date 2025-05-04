import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { CourseCard } from '../components/course/CourseCard';
import { Button } from '../components/common/Button';
import { colors } from '../constants/colors';
import { sizes } from '../constants/sizes';

const MOCK_COURSES = [
  {
    id: '1',
    title: 'Introduction to React Native Development',
    instructor: 'John Doe',
    duration: '6h 30m',
    progress: 75,
    image: 'https://api.a0.dev/assets/image?text=modern%20software%20development%20course%20thumbnail&aspect=16:9'
  },
  {
    id: '2',
    title: 'Advanced JavaScript Concepts',
    instructor: 'Jane Smith',
    duration: '8h 15m',
    progress: 30,
    image: 'https://api.a0.dev/assets/image?text=javascript%20programming%20course%20thumbnail&aspect=16:9'
  },
  {
    id: '3',
    title: 'UI/UX Design Fundamentals',
    instructor: 'Mike Johnson',
    duration: '5h 45m',
    progress: 0,
    image: 'https://api.a0.dev/assets/image?text=modern%20ui%20ux%20design%20course%20thumbnail&aspect=16:9'
  }
];

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.nameText}>Student!</Text>
          </View>
          <Button
            title="Browse All"
            onPress={() => {}}
            variant="outline"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Continue Learning</Text>
          <View style={styles.courseList}>
            {MOCK_COURSES.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                instructor={course.instructor}
                duration={course.duration}
                progress={course.progress}
                image={course.image}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: sizes.h3,
    color: colors.text.secondary,
  },
  nameText: {
    fontSize: sizes.h1,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  section: {
    padding: sizes.padding,
  },
  sectionTitle: {
    fontSize: sizes.h2,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: sizes.padding,
  },
  courseList: {
    gap: sizes.base,
  },
});