import './App.scss';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
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
                <Route path="/upload" element={<UploadForm/>} />  
                {/* not found path */}
                <Route path="*" element={<PageNotFound/>} />  

          </Routes>        
        </BrowserRouter>  
  );
}

export default App;
