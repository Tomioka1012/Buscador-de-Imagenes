import axios from 'axios';
import {SearchImages} from '../types'
import { ImagesAPIResponse } from '../utils/images-schema';

export async function getImages(term:SearchImages) {
    const registerPerPage = 60;
    let currentlyPage = 1;
    const key='39451969-2a77607aab0487eee42367f07';
    const url=`https://pixabay.com/api/?key=${key}&q=${term.term}&per_page=${registerPerPage}&page=${currentlyPage}`;
    const {data} = await axios(url);
    const result = ImagesAPIResponse.safeParse(data);
    if(result.success){
        return result.data;
        
    }
    else{
        console.log(result.error);
    }

    
}