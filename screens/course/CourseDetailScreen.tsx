import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { Button } from '../../components/common/Button';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';

const MOCK_COURSE = {
  id: '1',
  title: 'Introduction to React Native Development',
  instructor: 'John Doe',
  duration: '6h 30m',
  progress: 75,
  description: 'Learn the fundamentals of React Native development and build your first mobile app. This course covers everything from setup to deployment.',
  videoUrl: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  thumbnail: 'https://api.a0.dev/assets/image?text=react%20native%20course%20thumbnail&aspect=16:9',
  sections: [
    {
      id: '1',
      title: 'Getting Started',
      duration: '45m',
      completed: true,
    },
    {
      id: '2',
      title: 'Core Components',
      duration: '1h 15m',
      completed: true,
    },
    {
      id: '3',
      title: 'Navigation',
      duration: '1h 30m',
      completed: false,
    },
  ]
};

export default function CourseDetailScreen() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.videoContainer}>
          <Video
            style={styles.video}
            source={{ uri: MOCK_COURSE.videoUrl }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={status => setIsPlaying(status?.isPlaying ?? false)}
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{MOCK_COURSE.title}</Text>
          
          <View style={styles.instructorRow}>
            <View style={styles.instructor}>
              <MaterialIcons name="person" size={20} color={colors.text.secondary} />
              <Text style={styles.instructorText}>{MOCK_COURSE.instructor}</Text>
            </View>
            <View style={styles.duration}>
              <MaterialIcons name="access-time" size={20} color={colors.text.secondary} />
              <Text style={styles.durationText}>{MOCK_COURSE.duration}</Text>
            </View>
          </View>

          <View style={styles.progressContainer}>
            <View style={[styles.progressBar, { width: `${MOCK_COURSE.progress}%` }]} />
            <Text style={styles.progressText}>{MOCK_COURSE.progress}% Complete</Text>
          </View>

          <Text style={styles.description}>{MOCK_COURSE.description}</Text>

          <Text style={styles.sectionTitle}>Course Content</Text>
          {MOCK_COURSE.sections.map((section) => (
            <TouchableOpacity key={section.id} style={styles.sectionItem}>
              <View style={styles.sectionLeft}>
                <MaterialIcons
                  name={section.completed ? "check-circle" : "play-circle-outline"}
                  size={24}
                  color={section.completed ? colors.success : colors.primary}
                />
                <Text style={styles.sectionText}>{section.title}</Text>
              </View>
              <Text style={styles.sectionDuration}>{section.duration}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title="Continue Learning"
          onPress={() => {}}
          variant="primary"
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
  videoContainer: {
    width: '100%',
    aspectRatio: 16/9,
    backgroundColor: colors.black,
  },
  video: {
    flex: 1,
  },
  content: {
    padding: sizes.padding,
  },
  title: {
    fontSize: sizes.h2,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: sizes.base,
  },
  instructorRow: {
    flexDirection: 'row',
    marginBottom: sizes.base * 2,
  },
  instructor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: sizes.padding,
  },
  instructorText: {
    marginLeft: sizes.base,
    color: colors.text.secondary,
  },
  duration: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    marginLeft: sizes.base,
    color: colors.text.secondary,
  },
  progressContainer: {
    marginBottom: sizes.padding,
  },
  progressBar: {
    height: 4,
    backgroundColor: colors.primary,
    borderRadius: 2,
    marginBottom: 4,
  },
  progressText: {
    fontSize: sizes.caption,
    color: colors.text.secondary,
  },
  description: {
    fontSize: sizes.body1,
    color: colors.text.secondary,
    lineHeight: 24,
    marginBottom: sizes.padding,
  },
  sectionTitle: {
    fontSize: sizes.h3,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: sizes.base * 2,
  },
  sectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: sizes.base * 1.5,
    borderBottomWidth: 1,
    borderBottomColor: colors.card.border,
  },
  sectionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  sectionText: {
    marginLeft: sizes.base,
    fontSize: sizes.body1,
    color: colors.text.primary,
    flex: 1,
  },
  sectionDuration: {
    fontSize: sizes.body2,
    color: colors.text.secondary,
  },
  footer: {
    padding: sizes.padding,
    borderTopWidth: 1,
    borderTopColor: colors.card.border,
    backgroundColor: colors.white,
  },
});