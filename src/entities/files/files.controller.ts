import { Request, Response } from "express"
import { filesService } from "./files.services"

export const createImageProduct = async (req:Request, res:Response):Promise<Response> => {
    if(!req.file){
        return res.status(400).json({
            message: "No file uploaded"
        })
    }
    const { secure_url } = await filesService.create(req.file?.path);
    return res.status(201).json({
        message: "File uploaded successfully",
        secure_url
    })
}
export const updateImageProduct = async (req:Request, res:Response):Promise<Response> => {
    const { id } = req.params;
    if(!req.file){
        return res.status(400).json({
            message: "No file updated"
        })
    }
    const { secure_url } = await filesService.update(id, req.file?.path);
    return res.status(201).json({
        message: "File updated successfully",
        secure_url
    })
}

export const deleteImageProduct = async (req:Request, res:Response):Promise<Response> => {
    await filesService.delete(req.params.id);
    return res.status(200).json({
        message: "File deleted successfully"
    })
}