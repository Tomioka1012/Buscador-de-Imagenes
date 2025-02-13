import { StateCreator } from "zustand"
import type {Images, SearchImages, Image} from "../types"
import {getImages} from '../services/ImageService'


export type ImagesSliceType = {
    images: Images
    image:Image | null
    modalstatus: boolean
    loading:boolean
    searchImages: (SearchImages:SearchImages) => Promise<void>
    clickedImage: (image: Image) => void;
    toggleModal: (state: boolean) => void;
}
export const totalImagesSlice : StateCreator<ImagesSliceType> = (set) =>({
    images:{
        hits:[]
    },
    image: null,
    modalstatus: false,
    loading: false,
    searchImages : async (SearchImages) =>{
        set({
            loading:true
        })
        const images = await getImages(SearchImages);
        set({
            images,
            loading:false
        })
    },
    clickedImage: (image) =>{
        set({ image});
    },
    toggleModal: (state) => {
        set({ modalstatus: state })
    },
})