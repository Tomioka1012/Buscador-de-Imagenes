import {z} from 'zod'

export const SearchImagesSchema = z.object({
    term: z.string(),
})

/*id-,previewURL-,previewWidth-,previewHeight-,largeImageURL-,userImageURL-,likes- ,user-, views-,downloads- */
export const ImageAPIResponse = z.object({
    
    downloads : z.number(),
    id: z.number(),
    previewWidth: z.number(),
    previewHeight: z.number(),
    largeImageURL:z.string(),
    likes: z.number(),
    pageURL: z.string(),
    previewURL: z.string(),
    user: z.string(),
    userImageURL: z.string(),
    views:z.number(),
})

export const ImagesAPIResponse = z.object({
    hits: z.array(ImageAPIResponse)
})