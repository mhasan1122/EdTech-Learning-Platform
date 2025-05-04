import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';

interface LiveClassCardProps {
  title: string;
  instructor: string;
  startTime: string;
  date: string;
  attendees: number;
  thumbnail: string;
  onPress: () => void;
}

export const LiveClassCard = ({
  title,
  instructor,
  startTime,
  date,
  attendees,
  thumbnail,
  onPress,
}: LiveClassCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: thumbnail }} style={styles.image} />
      <View style={styles.liveIndicator}>
        <View style={styles.dot} />
        <Text style={styles.liveText}>LIVE</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        
        <View style={styles.infoRow}>
          <View style={styles.info}>
            <MaterialIcons name="person" size={16} color={colors.text.secondary} />
            <Text style={styles.infoText}>{instructor}</Text>
          </View>
          <View style={styles.info}>
            <MaterialIcons name="people" size={16} color={colors.text.secondary} />
            <Text style={styles.infoText}>{attendees} attending</Text>
          </View>
        </View>

        <View style={styles.timeRow}>
          <MaterialIcons name="access-time" size={16} color={colors.primary} />
          <Text style={styles.timeText}>Starts at {startTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
    overflow: 'hidden',
    shadowColor: colors.card.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  liveIndicator: {
    position: 'absolute',
    top: sizes.base,
    left: sizes.base,
    backgroundColor: colors.error,
    paddingHorizontal: sizes.base,
    paddingVertical: 4,
    borderRadius: sizes.radius,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.white,
    marginRight: 4,
  },
  liveText: {
    color: colors.white,
    fontSize: sizes.caption,
    fontWeight: 'bold',
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
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: sizes.base,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 4,
    color: colors.text.secondary,
    fontSize: sizes.body2,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${colors.primary}10`,
    padding: sizes.base,
    borderRadius: sizes.radius,
  },
  timeText: {
    marginLeft: sizes.base,
    color: colors.primary,
    fontSize: sizes.body2,
    fontWeight: '500',
  },
});