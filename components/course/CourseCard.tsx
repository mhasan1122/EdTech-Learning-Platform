import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';

interface CourseCardProps {
  title: string;
  instructor: string;
  duration: string;
  progress: number;
  image: string;
  onPress: () => void;
}

export const CourseCard = ({
  title,
  instructor,
  duration,
  progress,
  image,
  onPress,
}: CourseCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <View style={styles.details}>
          <View style={styles.instructor}>
            <MaterialIcons name="person" size={16} color={colors.text.secondary} />
            <Text style={styles.instructorText}>{instructor}</Text>
          </View>
          <View style={styles.duration}>
            <MaterialIcons name="access-time" size={16} color={colors.text.secondary} />
            <Text style={styles.durationText}>{duration}</Text>
          </View>
        </View>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
          <Text style={styles.progressText}>{progress}% Complete</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
    marginBottom: sizes.base * 2,
    shadowColor: colors.card.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  content: {
    padding: sizes.base * 2,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: sizes.base,
  },
  details: {
    flexDirection: 'row',
    marginBottom: sizes.base,
  },
  instructor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: sizes.base * 2,
  },
  instructorText: {
    marginLeft: 4,
    color: colors.text.secondary,
    fontSize: sizes.caption,
  },
  duration: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    marginLeft: 4,
    color: colors.text.secondary,
    fontSize: sizes.caption,
  },
  progressContainer: {
    marginTop: sizes.base,
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
});