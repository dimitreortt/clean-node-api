export type CollectionQuery = FirebaseFirestore.Query<FirebaseFirestore.DocumentData>;

export default interface DatabaseConnection {
  getDoc(docPath: string): any;
  getDocs(collectionPath: string): any;
  getDocsFromRef(colRef: FirebaseFirestore.CollectionReference | CollectionQuery): any;
  getDBRef(): FirebaseFirestore.Firestore;
  getByField(collectionPath: string, fieldName: string, value: any): Promise<Array<any>>;
}
