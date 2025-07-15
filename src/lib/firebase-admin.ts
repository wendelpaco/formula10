
import * as admin from 'firebase-admin';

const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

let initialized = false;

if (!admin.apps.length) {
  if (serviceAccountKey) {
    try {
      const serviceAccount = JSON.parse(serviceAccountKey);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      initialized = true;
    } catch (error) {
      console.error("Error parsing Firebase service account key:", error);
    }
  } else {
    console.warn("Firebase Admin SDK not initialized. Missing or invalid FIREBASE_SERVICE_ACCOUNT_KEY environment variable. Some features will not work.");
  }
} else {
  initialized = true; // Already initialized
}

function getAuth() {
  if (!initialized) {
    throw new Error("Firebase Admin SDK not initialized. Cannot access auth services.");
  }
  return admin.auth();
}

function getDb() {
    if (!initialized) {
        throw new Error("Firebase Admin SDK not initialized. Cannot access firestore services.");
    }
    return admin.firestore();
}

function getStorage() {
    if (!initialized) {
        throw new Error("Firebase Admin SDK not initialized. Cannot access storage services.");
    }
    return admin.storage();
}

export const auth = initialized ? getAuth() : null;
export const db = initialized ? getDb() : null;
export const storage = initialized ? getStorage() : null;
