import { useState } from "react"
import type {Image} from "../types"
import { useAppStore } from "../stores/useAppStore"
type ImageCardProps = {
    image : Image
}
const ImageCard = ({image} : ImageCardProps) => {
  const {clickedImage,toggleModal,handleClickFavorite,isOnFavorites, notifySuccess,notifyError} = useAppStore();
  const [loaded, setLoaded] = useState(false);
  

  const handleclick = () =>{
    clickedImage(image);
    toggleModal(true);

  }
  const buttonFavoriteCard = ()=>{
    handleClickFavorite(image);
    if(isOnFavorites(image.id)){
      notifySuccess('Agregada a Favoritos'); 
  }else{
      
      notifyError('Eliminada de Favoritos');
  }
  }

  return (

    <>
        {!loaded && <div className={`skeleton-loader ${image.previewHeight >= 150 ? 'large' : ''}`}></div>} {/* Placeholder */}
        <div className={image.previewHeight >= 150 ? 'card large' : 'card'}>
                  <div className="contentimg" onClick={handleclick}>
                    <img src={image.largeImageURL} alt="" className="preview-photo" loading="lazy" onLoad={() => setLoaded(true)}/>
                    <div className="text">
                      <div className="image">
                        <img src={image.userImageURL} alt="" className="image"  />
                      </div>
                      <div className="info">
                        <p className="autor">{image.user}</p>
                        <p className="aditional"><i className="bi bi-heart-fill"></i> {image.likes} likes</p>
                      </div>
                    </div>
                  </div>
                  <div className="favorites">
                    <button id="button-favorite-card" className={` ${isOnFavorites(image.id)? 'favorites-selected':''}`} onClick={buttonFavoriteCard}>
                        <i className="bi bi-heart"></i>
                    </button>
                  </div>
          </div>
    </>
  )
}

export default ImageCard