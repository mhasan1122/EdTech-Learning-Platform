import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { colors } from '../../constants/colors';
import { sizes } from '../../constants/sizes';
import { useNavigation } from '@react-navigation/native';
import { ProfileStackParamList } from '../../types/navigation';
import { StackNavigationProp } from '@react-navigation/stack';

type SettingsScreenNavigationProp = StackNavigationProp<ProfileStackParamList, 'Settings'>;

export default function SettingsScreen() {
  const navigation = useNavigation<SettingsScreenNavigationProp>();

  const [profileImage, setProfileImage] = useState('https://api.a0.dev/assets/image?text=profile%20photo&aspect=1:1');

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to upload photos.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleCallSupport = () => {
    Alert.alert(
      'Contact Support',
      'Would you like to call our support team?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Call',
          onPress: () => {
            // In a real app, you would use Linking to make the call
            Alert.alert('Call Support', 'Calling support number: 01623398837');
          },
        },
      ]
    );
  };

  const handleEmailSupport = () => {
    Alert.alert(
      'Email Support',
      'Would you like to email our support team?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Email',
          onPress: () => {
            // In a real app, you would use Linking to open email client
            Alert.alert('Email Support', 'Email: mirzahasan619@gmail.com');
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
            <View style={styles.editIconContainer}>
              <MaterialIcons name="edit" size={20} color={colors.white} />
            </View>
          </TouchableOpacity>
          <Text style={styles.title}>Settings</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile Settings</Text>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate('EditProfile')}
          >
            <MaterialIcons name="person" size={24} color={colors.primary} />
            <Text style={styles.menuText}>Edit Profile</Text>
            <MaterialIcons name="chevron-right" size={24} color={colors.text.secondary} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate('ChangePassword')}
          >
            <MaterialIcons name="lock" size={24} color={colors.primary} />
            <Text style={styles.menuText}>Change Password</Text>
            <MaterialIcons name="chevron-right" size={24} color={colors.text.secondary} />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Help & Support</Text>
          <TouchableOpacity style={styles.menuItem} onPress={handleCallSupport}>
            <MaterialIcons name="phone" size={24} color={colors.primary} />
            <Text style={styles.menuText}>Call Support</Text>
            <Text style={styles.supportText}>01623398837</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleEmailSupport}>
            <MaterialIcons name="email" size={24} color={colors.primary} />
            <Text style={styles.menuText}>Email Support</Text>
            <Text style={styles.supportText}>mirzahasan619@gmail.com</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate('FAQ')}
          >
            <MaterialIcons name="help" size={24} color={colors.primary} />
            <Text style={styles.menuText}>FAQ</Text>
            <MaterialIcons name="chevron-right" size={24} color={colors.text.secondary} />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate('TermsOfService')}
          >
            <MaterialIcons name="info" size={24} color={colors.primary} />
            <Text style={styles.menuText}>Terms of Service</Text>
            <MaterialIcons name="chevron-right" size={24} color={colors.text.secondary} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate('PrivacyPolicy')}
          >
            <MaterialIcons name="privacy-tip" size={24} color={colors.primary} />
            <Text style={styles.menuText}>Privacy Policy</Text>
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
  imageContainer: {
    position: 'relative',
    marginBottom: sizes.padding,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.primary,
    padding: 8,
    borderRadius: 20,
  },
  title: {
    fontSize: sizes.h1,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  section: {
    marginTop: sizes.padding,
    padding: sizes.padding,
    backgroundColor: colors.white,
  },
  sectionTitle: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: sizes.padding,
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
  supportText: {
    fontSize: sizes.body2,
    color: colors.text.secondary,
    marginRight: sizes.base,
  },
}); 