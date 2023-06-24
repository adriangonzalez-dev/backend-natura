import path from 'path';
import multer from 'multer';
import { Request } from 'express';
import { v4 as uuid } from 'uuid';

let storage = multer.diskStorage({
    filename: (_req:Request, file:Express.Multer.File, callback:any) =>{
        callback(null, uuid() + path.extname(file.originalname))
    }
})

const fileFilter = (_req:Request, file:Express.Multer.File, callback:any) => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    const extension = path.extname(file.originalname).toLowerCase();
  
    if (allowedExtensions.includes(extension)) {
      callback(null, true);
    } else {
      callback(new Error('El archivo no es una imagen'));
    }
  };

export default multer({storage,fileFilter})