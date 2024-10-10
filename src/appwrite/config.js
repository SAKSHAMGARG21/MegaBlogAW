import { Client, ID, Storage, Query, Databases } from "appwrite";
import conf from "../conf/conf.js";
import authService from "./auth.js";

export class Service {
    client = new Client();
    dataBases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.awurl)
            .setProject(conf.awProjectId);
        this.dataBases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }


    async createPost({ title, slug, content, featuredimage, status, userId }) {
        try {
            console.log(title, slug, content, featuredimage, status, userId);
            return await this.dataBases.createDocument(
                conf.awDatabaseId,
                conf.awCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error ", error);
            return false;
        }
    }

    async updatePost(slug, { title, content, featuredimage, status }) {
        try {
            return await this.dataBases.updateDocument(
                conf.awDatabaseId,
                conf.awCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status
                }
            )
        } catch (error) {
            console.log("AppWrite service :: update Post :: error", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.dataBases.deleteDocument(
                conf.awDatabaseId,
                conf.awCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("AppWrite service ::  delete Post :: error", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.dataBases.getDocument(
                conf.awDatabaseId,
                conf.awCollectionId,
                slug
            )
        } catch (error) {
            console.log("AppWrite service ::  get Post :: error", error);
            return false;
        }
    }

    async getPosts() {
        try {
            return await this.dataBases.listDocuments(
                conf.awDatabaseId,
                conf.awCollectionId,
                [Query.equal("status", "active")]
            )
        } catch (error) {
            console.log("AppWrite service  ::  get Posts :: error", error);
        }
    }

    async getUserPosts() {
        try {

            const usid = await authService.getCurrUser();
            return await this.dataBases.listDocuments(
                conf.awDatabaseId,
                conf.awCollectionId,
                [
                    Query.equal("status", "active"),
                    Query.equal("userId", usid.$id)
                ]
            )
        } catch (error) {
            console.log("AppWrite service  ::  get User Posts :: error", error);
        }
    }

    // upload file services
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.awBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("AppWrite  service ::  upload file :: error", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.awBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("AppWrite service ::   delete file :: error", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.awBucketId,
            fileId
        )
    }
}

const service = new Service();

export default service;