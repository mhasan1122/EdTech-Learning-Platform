import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';
import { useNavigation } from '@react-navigation/native';

export default function AdminDashboard() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  const menuItems = [
    {
      title: 'Manage Courses',
      icon: 'book',
      onPress: () => navigation.navigate('ManageCourses'),
    },
    {
      title: 'Manage Live Classes',
      icon: 'live-tv',
      onPress: () => navigation.navigate('ManageLiveClasses'),
    },
    {
      title: 'Manage Quizzes',
      icon: 'quiz',
      onPress: () => navigation.navigate('ManageQuizzes'),
    },
    {
      title: 'Manage Users',
      icon: 'people',
      onPress: () => navigation.navigate('ManageUsers'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Admin Dashboard</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <MaterialIcons name="logout" size={24} color={colors.error} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.menu}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={item.onPress}
            >
              <MaterialIcons name={item.icon} size={24} color={colors.primary} />
              <Text style={styles.menuText}>{item.title}</Text>
              <MaterialIcons name="chevron-right" size={24} color={colors.text.secondary} />
            </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: sizes.padding,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.card.border,
  },
  title: {
    fontSize: sizes.h2,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  logoutButton: {
    padding: sizes.base,
  },
  content: {
    flex: 1,
  },
  menu: {
    padding: sizes.padding,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: sizes.base * 2,
    paddingHorizontal: sizes.base,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
    marginBottom: sizes.base,
    borderWidth: 1,
    borderColor: colors.card.border,
  },
  menuText: {
    flex: 1,
    marginLeft: sizes.base * 2,
    fontSize: sizes.body1,
    color: colors.text.primary,
  },
}); 