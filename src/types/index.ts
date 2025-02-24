// Types pour les besoins signalés
export interface Need {
  id: string;
  type: 'urgence' | 'collecte' | 'hébergement';
  description: string;
  location: {
    latitude: number;
    longitude: number;
  };
  createdAt: Date;
  status: 'en_attente' | 'en_cours' | 'résolu';
  createdBy: string;
}

// Types pour les utilisateurs
export interface User {
  id: string;
  email: string;
  role: 'aidant' | 'bénéficiaire';
  displayName?: string;
  createdAt: Date;
  lastActive: Date;
}

// Types pour les notifications
export interface Notification {
  id: string;
  type: 'nouveau_besoin' | 'besoin_résolu' | 'message';
  title: string;
  message: string;
  createdAt: Date;
  read: boolean;
  needId?: string;
} 