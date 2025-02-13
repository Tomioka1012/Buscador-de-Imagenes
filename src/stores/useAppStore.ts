import {create} from 'zustand'
import {devtools} from 'zustand/middleware';
import { ImagesSliceType, totalImagesSlice } from './imagesSlice';
import {FavoriteSliceType, createFavoritesSlice} from './favoritesSlice'
import { notificationSliceType, createNotificationSlice } from './notificationSlice';

export const useAppStore = create<ImagesSliceType & FavoriteSliceType & notificationSliceType>()(devtools((...a)=>({
    ...totalImagesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
})));