import { generateFirebaseServiceAccount } from './generateFirebaseServiceAccount';
import DatabaseConnection, { CollectionQuery } from './DatabaseConnection';
import admin from 'firebase-admin';

export default class DatabaseConnectionAdapter implements DatabaseConnection {
  db: FirebaseFirestore.Firestore;

  constructor() {
    // var serviceAccount = require('./cccat3-firebase-service-account.json');
    const serviceAccount = generateFirebaseServiceAccount();
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    this.db = admin.firestore();
  }

  async getDoc(docPath: string) {
    return this.db
      .doc(docPath)
      .get()
      .then((docRef) => docRef.data());
  }

  async getDocs(collectionPath: string) {
    const colRef = this.db.collection(collectionPath);
    return this.getDocsFromRef(colRef);
  }

  async getDocsFromRef(colRef: FirebaseFirestore.CollectionReference | CollectionQuery) {
    return colRef.get().then((querySnapshot) => querySnapshot.docs.map((docRef) => docRef.data()));
  }

  async getByField(collectionPath: string, fieldName: string, value: any) {
    const collectionRef = this.db.collection(collectionPath).where(fieldName, '==', value);

    return this.getDocsFromRef(collectionRef);
  }

  getDBRef() {
    return this.db;
  }
}
