import './App.scss';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import UploadForm from './pages/UploadForm/UploadForm';
import Header from './components/Header/Header';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
          <Header />
          <Routes>

                <Route path="/" element={<Home />} />  
                <Route path="/home" element={<Navigate to={"/"} />} />  
                <Route path="/videos/:id" element={<Home />} />  
                <Route path="/Upload" element={<UploadForm/>} />  
                <Route path="*" element={<PageNotFound />} />  
                <Route path={`/videos/*`} element={<PageNotFound />} />  

          </Routes>        
        </BrowserRouter>  
  );
}

export default App;
