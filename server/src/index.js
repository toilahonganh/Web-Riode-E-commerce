"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMultipleImages = exports.uploadImage = void 0;
var dotenv = require("dotenv");
dotenv.config();
var cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
var uploadOptions = {
    overwrite: true,
    invalidate: true,
    resource_type: "auto",
};
/**
 * Tải lên một hình ảnh lên Cloudinary
 * @param {string} image - Chuỗi Base64 hoặc URL của hình ảnh
 * @returns {Promise<string>} - Trả về URL bảo mật của hình ảnh đã tải lên
 */
var uploadImage = function (image) {
    return new Promise(function (resolve, reject) {
        cloudinary_1.v2.uploader.upload(image, uploadOptions, function (error, result) {
            if (error) {
                console.error("Error uploading image:", error.message);
                return reject(new Error("Image upload failed. Please try again later."));
            }
            console.log("Uploaded Image URL:", result.secure_url);
            resolve(result.secure_url);
        });
    });
};
exports.uploadImage = uploadImage;
/**
 * Tải lên nhiều hình ảnh lên Cloudinary
 * @param {Array<string>} images - Mảng các chuỗi base64 hoặc URL hình ảnh
 * @returns {Promise<Array<string>>} - Trả về mảng các URL bảo mật của các hình ảnh đã tải lên
 */
var uploadMultipleImages = function (images) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(images) || images.length === 0) {
            return reject(new Error("Images must be a non-empty array."));
        }
        var uploadPromises = images.map(uploadImage);
        Promise.all(uploadPromises)
            .then(function (uploadedUrls) {
            console.log("Uploaded all images successfully:", uploadedUrls);
            resolve(uploadedUrls);
        })
            .catch(function (error) {
            console.error("Error uploading multiple images:", error);
            reject(new Error("Failed to upload multiple images."));
        });
    });
};
exports.uploadMultipleImages = uploadMultipleImages;
