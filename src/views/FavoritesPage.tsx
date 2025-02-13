import { useAppStore } from "../stores/useAppStore"
import { useMemo } from "react";
import ImageCard from "../components/ImageCard";
const FavoritesPage = () => {

  const {favorites} = useAppStore();

  const hasFavorites = useMemo(()=> favorites.length ,[favorites])

  return (
    <>
      {hasFavorites ?
        
        (
          <>
            <section className="results container-lg"> 
            <>
              {favorites.map((image)=>(
                  <ImageCard
                      key = {image.id}
                      image = {image}
                  />
              ))}
              </>
            </section>
          </>
        )
        : 
        (
          <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column text-center justify-content-center opacity-50">
            <p className="fs-2 text-black-50 fw-bold mb-0">No hay nada en favoritos aún</p>
            <p className="fs-5 text-black-50">Añade algunas imagenes a favoritos y apareceran aquí</p>
            <i className="bi bi-suit-heart-fill fs-1 opacity-50"></i>
          </div>
        )
      }

    </>

  )
}

export default FavoritesPage