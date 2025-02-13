import { useEffect } from 'react' 
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import Modal from '../components/Modal'
import Notification from '../components/Notification'
import { useAppStore } from "../stores/useAppStore"
const Layout = () => {
  const {loadFromStorage} = useAppStore();
  useEffect(()=>{
    loadFromStorage();
  },[])
  return (
    <>
        <Header/>
        <main className=''>
            <Outlet/>
            
        </main>
        <Modal/>
        <Notification/>
    </>

  )
}

export default Layout