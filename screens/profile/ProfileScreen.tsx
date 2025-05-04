import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';
import { useNavigation } from '@react-navigation/native';
import { ProfileStackParamList } from '../../types/navigation';
import { StackNavigationProp } from '@react-navigation/stack';

type ProfileScreenNavigationProp = StackNavigationProp<ProfileStackParamList, 'Profile'>;

export default function ProfileScreen() {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const handleLogout = () => {
    // Here you would typically clear any user data/session
    // Then navigate to the Auth stack
    navigation.reset({
      index: 0,
      routes: [{ name: 'Auth' }],
    });
  };

  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    coursesCompleted: 12,
    totalHours: 45,
    averageScore: 85,
    avatar: 'https://api.a0.dev/assets/image?text=professional%20avatar&aspect=1:1'
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Image source={{ uri: userProfile.avatar }} style={styles.avatar} />
          <Text style={styles.name}>{userProfile.name}</Text>
          <Text style={styles.email}>{userProfile.email}</Text>
        </View>

        <View style={styles.stats}>
          <View style={styles.statItem}>
            <MaterialIcons name="book" size={24} color={colors.primary} />
            <Text style={styles.statValue}>{userProfile.coursesCompleted}</Text>
            <Text style={styles.statLabel}>Courses</Text>
          </View>
          <View style={styles.statItem}>
            <MaterialIcons name="access-time" size={24} color={colors.primary} />
            <Text style={styles.statValue}>{userProfile.totalHours}h</Text>
            <Text style={styles.statLabel}>Hours</Text>
          </View>
          <View style={styles.statItem}>
            <MaterialIcons name="star" size={24} color={colors.primary} />
            <Text style={styles.statValue}>{userProfile.averageScore}%</Text>
            <Text style={styles.statLabel}>Score</Text>
          </View>
        </View>

        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialIcons name="settings" size={24} color={colors.text.primary} />
            <Text style={styles.menuText}>Settings</Text>
            <MaterialIcons name="chevron-right" size={24} color={colors.text.secondary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialIcons name="help" size={24} color={colors.text.primary} />
            <Text style={styles.menuText}>Help & Support</Text>
            <MaterialIcons name="chevron-right" size={24} color={colors.text.secondary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <MaterialIcons name="logout" size={24} color={colors.error} />
            <Text style={[styles.menuText, { color: colors.error }]}>Logout</Text>
            <MaterialIcons name="chevron-right" size={24} color={colors.text.secondary} />
          </TouchableOpacity>
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
    alignItems: 'center',
    padding: sizes.padding,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: sizes.base * 2,
  },
  name: {
    fontSize: sizes.h2,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: sizes.base,
  },
  email: {
    fontSize: sizes.body1,
    color: colors.text.secondary,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: sizes.padding,
    backgroundColor: colors.white,
    marginVertical: sizes.padding,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: sizes.h2,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginVertical: sizes.base,
  },
  statLabel: {
    fontSize: sizes.body2,
    color: colors.text.secondary,
  },
  menu: {
    backgroundColor: colors.white,
    padding: sizes.padding,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: sizes.base * 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.card.border,
  },
  menuText: {
    flex: 1,
    marginLeft: sizes.base * 2,
    fontSize: sizes.body1,
    color: colors.text.primary,
  },
});