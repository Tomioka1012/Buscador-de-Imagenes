import {z} from 'zod'
import { ImagesAPIResponse, SearchImagesSchema,ImageAPIResponse } from '../utils/images-schema'

export type SearchImages = z.infer<typeof SearchImagesSchema>
export type Image = z.infer<typeof ImageAPIResponse >
export type Images = z.infer<typeof ImagesAPIResponse >