import {StateCreator} from 'zustand';
import { Image } from '../types';

export type FavoriteSliceType = {
    favorites: Image[]
    handleClickFavorite: (image:Image) => void;
    isOnFavorites : (id:number) => boolean;
    loadFromStorage: () => void;
}

export const createFavoritesSlice : StateCreator<FavoriteSliceType> = (set, get) => ({
    favorites:[],
    handleClickFavorite: (image) =>{
        if(get().favorites.some(favorite => favorite.id === image.id)){
            set({
                favorites: get().favorites.filter(favorite => favorite.id !== image.id) 
              });
        }else{
            
            set({ favorites: [...get().favorites, image] });
            console.log(get().favorites);
        }
        localStorage.setItem('favorites', JSON.stringify(get().favorites));
    },
    isOnFavorites: (id) => {
        const isOn = get().favorites.some(favorite => favorite.id === id);
        return isOn;
    },
    loadFromStorage: ()=>{
        const storedFavorites = localStorage.getItem('favorites');
        if(storedFavorites){
            set({
                favorites: JSON.parse(storedFavorites)
              });
        }
    }
})