import { useAppStore } from "../stores/useAppStore"
import type {Image} from "../types"

const Modal = () => {
    const {image, modalstatus,toggleModal,handleClickFavorite, isOnFavorites,notifySuccess,notifyError} = useAppStore();

    const download = async() => {
        if (!image) return;
        const originalImage = image?.largeImageURL;
        const imageToD = await fetch(originalImage);
    
        // Split image name
        const nameSplit = `imagen-${image.user}.jpg`;
        
    
        const imageBlog = await imageToD.blob()
        const imageURL = URL.createObjectURL(imageBlog)
        const link = document.createElement('a')
        link.href = imageURL;
        link.download = nameSplit;
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    };

    const btnFavorite = (image:Image)=>{
        handleClickFavorite(image);
        
        if(isOnFavorites(image.id)){
            notifySuccess('Agregada a Favoritos'); 
        }else{
            
            notifyError('Eliminada de Favoritos');
        }
    }
    
  return (
    <>
        <div className={`container-modal ${modalstatus ? "active" : ""}`}>
            <div className="modal-custom">
                <div className="close">
                    <button id="close" onClick={()=> toggleModal(false)}><i className="bi bi-x-circle-fill"></i></button>
                </div>
                {image ? (
                    <>
                        <div className="modal-header">
                            <div className="info-author">
                            <img className="perfil-author" src={image.userImageURL} alt="user profile"/>
                            <p className="name-author">{image.user}</p>
                            </div>
                            <div className="actions d-flex gap-2">
                                <button className={`btn-blue-outline ${isOnFavorites(image.id)? 'modal-favorites-active':''}`}
                                         id="modal-favorites" 
                                         onClick={()=>btnFavorite(image)}> <i className="bi bi-heart"></i> 
                                    { isOnFavorites(image.id)?
                                        <span> Eliminar de Favoritos</span>
                                        :
                                        <span> Añadir a Favoritos</span>
                                    }
                                </button>
                                 <a className="btn btn-success" onClick={()=>download()}> <i className="bi bi-arrow-down-circle-fill"></i> <span>descargar</span></a>
                                
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="img-modal-container">
                            <img className="img-modal" src={image.largeImageURL} alt=""/>
                            </div>
                            <div className="modal-info mt-3">
                            <p className="likes" ><i className="bi bi-suit-heart-fill"></i> Likes {image.likes}</p>
                            <p className="downloads"><i className="bi bi-cloud-arrow-down-fill"></i> Downloads {image.downloads}  </p>
                            <p className="views"><i className="bi bi-eye-fill"></i> Wiews {image.views}</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <p> No hay imagen seleccionada</p>
                )}
            
            </div>
        </div>
      </>
  )
}

export default Modal