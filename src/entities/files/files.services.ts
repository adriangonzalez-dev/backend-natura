import {UploadApiResponse, v2 as cloudinary} from 'cloudinary'
import { config } from "../../config/config"
cloudinary.config({
        cloud_name: config.cloudinary.cloud_name, 
        api_key: config.cloudinary.api_key, 
        api_secret: config.cloudinary.api_secret, 
})

export const filesService = {
    async create(path:string):Promise<UploadApiResponse>{
            return await cloudinary.uploader.upload(path,{
                folder:'products_natura',
                format:'webp'
            })
    },

    async update(public_id:string, path:string):Promise<UploadApiResponse> {
        await this.delete(public_id)
        return await cloudinary.uploader.upload(path,{
            folder:'products_natura',
            format:'webp'
        })
    },

    async delete(public_id:string):Promise<UploadApiResponse>{
        return await cloudinary.uploader.destroy(public_id)
    },

    
}