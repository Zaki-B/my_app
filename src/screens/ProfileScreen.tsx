import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { User } from '../types';

const ProfileScreen = () => {
  // À remplacer par les vraies données utilisateur depuis Firebase
  const mockUser: User = {
    id: '1',
    email: 'user@example.com',
    role: 'aidant',
    displayName: 'John Doe',
    createdAt: new Date(),
    lastActive: new Date(),
  };

  const handleLogout = () => {
    // À implémenter : déconnexion Firebase
    console.log('Logout pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profil</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.name}>{mockUser.displayName}</Text>
        <Text style={styles.email}>{mockUser.email}</Text>
        <Text style={styles.role}>Rôle : {mockUser.role}</Text>
        
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Se déconnecter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#2196F3',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    padding: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  role: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  logoutButton: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen; 