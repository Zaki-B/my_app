Cahier des Charges Simplifié pour une Application de Solidarité "BeKind"

1. Objectif Principal
Créer une application mobile simple (iOS/Android) permettant aux utilisateurs de :

Signaler des besoins urgents (ex. sans-abri, collectes alimentaires, urgences sociales).
Visualiser ces besoins sur une carte interactive en temps réel.
Coordonner l'entraide entre citoyens et associations.


2. Fonctionnalités Prioritaires
A. Carte Interactive (Fonctionnalité Principale)
Architecture Technique et Flux de Données :

Sources de données :
Signalements utilisateurs géolocalisés.
Bases de données ouvertes (mairies, associations telles que les Restos du Cœur).


Synchronisation :
Mise à jour des données toutes les 30 secondes via WebSocket ou Firebase Realtime Database.
Composants Clés :

Marqueurs :
Icônes animées selon le type de besoin (utilisation de Mapbox GL JS ou Google Maps SDK).
Clustering :
Regroupement automatique des points proches pour éviter l’encombrement, par exemple à l’aide de l’algorithme Supercluster.
Calques Thématiques :
Utilisation de couches GeoJSON pour distinguer les différentes catégories (urgences, ressources fixes, etc.).
Fonctionnalités de la Carte :

Affichage en temps réel :
Visualisation des signalements avec des marqueurs colorés selon le type de besoin (ex. : rouge = urgence, vert = collecte).
Possibilité de zoomer et de se déplacer sur la carte.
Filtres et Navigation :
Filtres basiques par catégorie (nourriture, vêtements, hébergement) et par rayon (ex. 1 km, 5 km, jusqu’à 20 km).
Intégration avec Google Maps ou Apple Plans pour orienter l’utilisateur vers le lieu signalé.
Signalement Instantané :
Processus simplifié en trois clics (appui long sur la carte → menu contextuel → sélection du type de besoin).
Géolocalisation automatique via GPS, avec possibilité de repositionnement manuel (glisser-déposer le marqueur).
Visualisation Intelligente :
Code couleur universel pour distinguer les urgences (🔴 urgence immédiate, 🟠 besoin matériel, 🔵 collecte organisée).
Filtres contextuels supplémentaires, comme la sélection par horaire (besoins nocturnes ou journaliers).
B. Profil Utilisateur Simplifié
Inscription :
Par email et mot de passe ou via compte Google/Facebook.
Rôles :
Aidant : Peut signaler des besoins et participer à des actions.
Bénéficiaire : Peut demander de l'aide (avec option anonyme possible).
C. Système d'Alerte
Création d'une alerte :
Ajout d'une photo (optionnelle) et d'une description courte.
Sélection d'une catégorie via un menu déroulant simple.
Géolocalisation automatique (ou possibilité de définir manuellement l’emplacement).
Attribution d’un statut ("En attente" ou "Résolu", mis à jour manuellement).
D. Notifications
Push Notifications :
Envoi d’une alerte lorsqu’un nouveau signalement est créé à proximité.
Notification lorsque l’alerte est marquée comme résolue.
Notifications Email/SMS :
Pour les urgences critiques afin d’assurer une réaction rapide.
E. Récompenses Basiques
Système de Badges :
Attribution de badges (ex. "Premier don", "Super voisin") pour encourager l'engagement.
Tableau de Bord :
Suivi du nombre d'alertes créées et résolues par l’utilisateur.
3. Spécifications Techniques Minimales
Technologies Recommandées :

Frontend Mobile :
React Native pour développer une application iOS/Android à partir d’un seul code.
Base de Données :
Firebase Realtime Database pour la synchronisation en temps réel des alertes et signalements.
Cartographie :
Mapbox SDK Gratuit pour l'intégration de la carte interactive (alternativement, Google Maps API).
Backend :
Firebase