import { useState, Suspense, lazy, } from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import LoaderGlobal from "./components/Loader/LoaderGlobal/LoaderGlobal";
import Layout from "./layout/Layout";

const Main = lazy(() => import('./pages/1.Main/MainPage'));
const Prices = lazy(() => import("./pages/2.Prices/PricesPage"));
const Gallery = lazy(() => import("./pages/3.Gallery/GalleryPage"));
const Competitions = lazy(() => import("./pages/4.Competitions/CompetitionsPage"));
const Contacts = lazy(() => import("./pages/5.Contacts/ContactsPage"));

function App() {
  const [lang, setLang] = useState('eng')

  const funcChangeLanguage = (evt) => {    
    const currentLang = evt.currentTarget.value.toLowerCase()    
    setLang(currentLang);
  }

  return (
    <>
    <Suspense fallback={<LoaderGlobal />}>
      <Routes>
        <Route path="/" element={<Layout lang={lang} funcChangeLanguage={funcChangeLanguage}/>}>
          <Route index element={<Main />} />
          <Route path="prices" element={<Prices lang={lang}/>} />
          <Route path="gallery" element={<Gallery lang={lang}/>} />
          <Route path="competitions" element={<Competitions lang={lang}/>} />
          <Route path="contacts" element={<Contacts lang={lang}/>} />
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </Suspense>
      
    </>
  )
}

export default App
