import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { Need } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateNeed'>;

const CreateNeedScreen: React.FC<Props> = ({ navigation, route }) => {
  const coordinates = route.params?.coordinates;

  const [formData, setFormData] = useState<Partial<Need>>({
    type: 'urgence',
    title: '',
    description: '',
    location: coordinates || { latitude: 0, longitude: 0 },
  });

  const handleSubmit = async () => {
    if (!formData.title?.trim()) {
      Alert.alert(
        'Champ requis',
        'Veuillez donner un titre à votre signalement.',
        [{ text: 'OK', style: 'default' }]
      );
      return;
    }

    if (!formData.description?.trim()) {
      Alert.alert(
        'Champ requis',
        'Veuillez ajouter une description à votre signalement.',
        [{ text: 'OK', style: 'default' }]
      );
      return;
    }

    // TODO: Implémenter la création dans Firebase
    console.log('Creating need:', formData);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>Signaler un besoin</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Type de besoin</Text>
            <View style={styles.typeButtons}>
              {(['urgence', 'collecte', 'hébergement'] as const).map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[
                    styles.typeButton,
                    formData.type === type && styles.typeButtonActive,
                  ]}
                  onPress={() => setFormData({ ...formData, type })}
                >
                  <Text
                    style={[
                      styles.typeButtonText,
                      formData.type === type && styles.typeButtonTextActive,
                    ]}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Titre</Text>
            <TextInput
              style={styles.input}
              value={formData.title}
              onChangeText={(title) => setFormData({ ...formData, title })}
              placeholder="Donnez un titre court et clair..."
              maxLength={50}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              multiline
              numberOfLines={4}
              value={formData.description}
              onChangeText={(description) =>
                setFormData({ ...formData, description })
              }
              placeholder="Décrivez le besoin en détail..."
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Créer le signalement</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2196F3',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  typeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  typeButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 4,
    alignItems: 'center',
  },
  typeButtonActive: {
    backgroundColor: '#2196F3',
  },
  typeButtonText: {
    color: '#666',
    fontSize: 14,
    fontWeight: '500',
  },
  typeButtonTextActive: {
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateNeedScreen; 