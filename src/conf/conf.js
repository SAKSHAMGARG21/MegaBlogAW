const conf = {
    awurl: String(import.meta.env.VITE_APPWRITE_URL),
    awProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    awDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    awCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    awBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf