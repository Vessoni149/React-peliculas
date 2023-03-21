import './App.css';
import { ListadoPeliculas } from './ListadoPeliculas';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Blog } from './Blog';
function App() {
  return (
   <>
		<BrowserRouter>
			<Routes>
				<Route path="/blog" element={<Blog></Blog>}>
					
				</Route>
				<Route path="/" element={<ListadoPeliculas></ListadoPeliculas>}>
					
				</Route>
				</Routes>
		</BrowserRouter>
	  </>
  );
}

export default App;
