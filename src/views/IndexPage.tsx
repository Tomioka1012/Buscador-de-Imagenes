
import { useMemo, useState,useRef, useEffect } from "react";
import { useAppStore } from "../stores/useAppStore"
import ImageCard from "../components/ImageCard";
import Spinner from "../components/Spinner";


const IndexPage = () => {
  //states
  const [searchFilters, setSearchFilters] = useState('');
  const [term,setTerm] = useState('');
  const resultadoRef = useRef<HTMLDivElement | null>(null);

  const searchImages = useAppStore((state) => state.searchImages);
  const resultImages = useAppStore((state) => state.images);
  const loading = useAppStore((state) => state.loading);

  const hasImageTerm = useMemo(()=> resultImages.hits.length ,[resultImages])
  //

  useEffect(() => {
    searchImages({ term: 'paisajes' })
  },[]);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
      setSearchFilters(e.target.value);
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    setTerm('');
    if (!searchFilters.trim()) {
      console.log('No ingresaste un término de búsqueda válido');
      return;
    } else {
      //consultar la Api
      searchImages({ term: searchFilters });
    }
    setTimeout(() => {
      resultadoRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300)
  }
  const handleButton= (keyword:string) => {
    searchImages({ term: keyword });
    setTerm(keyword);
  }

  
  return (
    <>
        <div className="container-fluid hero">
            <h1 className="pb-3 titleIndex">El mejor buscador de imágenes</h1>
            <form className="px-1 col-10 col-md-8 col-lg-5 col-xl-4" id="form" onSubmit={handleSubmit}>
              <input type="text" name="term" id="term" placeholder="Realiza una búsqueda" onChange={handleChange} value={searchFilters}/>
              <div className=" d-flex align-items-center">
                <button type="submit" className="btn-blue rounded-pill "><i className="bi bi-arrow-up-right"></i></button>
              </div>
            </form>
            <div className=" w-100 row p-2 justify-content-end mt-2">
              <div className="col-12 col-md-6  d-flex slider-hero">
                <div className="slider-hero-content">
                <div className="p-2 container-card-hero">
                  <div className="hero-card rounded-4 p-3">
                    <p className="text-white fs-6 fw-bold">Las mejores imágenes gratuitas sin copy right</p>
                    <img src="/local.jpg" alt="" className="img-fluid img-card-hero rounded-2" />
                  </div>
                </div>
                <div className="p-2 container-card-hero">
                  <div className="hero-card rounded-4 p-3">
                    <p className="text-white fs-6 fw-bold">Imágenes HD/4K para descargar</p>
                    <img src="/train.jpg" alt="" className="img-fluid img-card-hero rounded-2" />
                  </div>
                </div>
                <div className="p-2 container-card-hero">
                  <div className="hero-card rounded-4 p-3">
                    <p className="text-white fs-6 fw-bold">Guarda tus imágenes para verlas después</p>
                    <img src="/local japones.jpg" alt="" className="img-fluid img-card-hero rounded-2" />
                  </div>
                </div>

                <div className="p-2 container-card-hero">
                  <div className="hero-card rounded-4 p-3">
                    <p className="text-white fs-6 fw-bold">Las mejores imágenes gratuitas sin copy right</p>
                    <img src="/local.jpg" alt="" className="img-fluid img-card-hero rounded-2" />
                  </div>
                </div>
                <div className="p-2 container-card-hero">
                  <div className="hero-card rounded-4 p-3">
                    <p className="text-white fs-6 fw-bold">Imágenes HD/4K para descargar</p>
                    <img src="/train.jpg" alt="" className="img-fluid img-card-hero rounded-2" />
                  </div>
                </div>
                <div className="p-2 container-card-hero">
                  <div className="hero-card rounded-4 p-3">
                    <p className="text-white fs-6 fw-bold">Imágenes HD/4K para descargar</p>
                    <img src="/local japones.jpg" alt="" className="img-fluid img-card-hero rounded-2" />
                  </div>
                </div>
                </div>
              </div>
            </div>
        </div>

        

      <div className="mt-4" ref={resultadoRef}>
        <div>
          <h1 className="text-center fs-2">Las mejores Imágenes Gratis Para Descargar</h1>
          <p className="text-center text-black-50 fs-5">Podrás encontrar más de 1 millón de imágenes compartidas por la talentosa comunidad.</p>
        </div>
        <div className="row row-cols-3 row-cols-md-5 justify-content-center align-items-center px-0 py-2 mx-0 my-4 container mx-auto  rounded-5 filters">
          <div className="">
            <button className={`btn ${term === 'naturaleza'? 'active' : ''}`} onClick={()=>handleButton('naturaleza')}>Naturaleza</button>
          </div>
          <div>
            <button className={`btn ${term === 'flores'? 'active' : ''}`} onClick={()=>handleButton('flores')}>Flores</button>
          </div>
          <div>
            <button className={`btn ${term === 'playa'? 'active' : ''}`} onClick={()=>handleButton('playa')}>Playa</button>
          </div>
          <div>
            <button className={`btn ${term === 'animales'? 'active' : ''}`} onClick={()=>handleButton('animales')}>Animales</button>
          </div>
          <div>
            <button className={`btn ${term === 'atardecer'? 'active' : ''}`} onClick={()=>handleButton('atardecer')}>Atardecer</button>
          </div>

        </div>
        {loading ? <Spinner/> : hasImageTerm ? (
              <>
                <section className="results container-lg" > 
                    {hasImageTerm ? (
                      <>
                        {resultImages.hits.map((image)=>(
                              <ImageCard
                                key = {image.id}
                                image = {image}
                              />
                        ))}
                      </>
                    ) : (
                      <p>No hay bebidas</p>
                    )
                    }
                  
                </section>
              </>
            ) : (
              <div className="d-flex flex-column text-center justify-content-center opacity-50 my-5">
              <p className="fs-2 text-black-50 fw-bold mb-0">No se encontro ninguna imágen relacionada</p>
              <p className="fs-5 text-black-50">Intenta con otro término de búsqueda</p>
              <i className="bi bi-emoji-frown-fill fs-1 opacity-50"></i>
            </div>
            )
        }
      </div>

    </>
  )
}

export default IndexPage