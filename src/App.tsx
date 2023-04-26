import Settings from "../Components/Settings";
import {Routes, Route} from 'react-router-dom';
import Quiz from "../Components/Quiz";
function App() {

  return (
     <Routes>
       <Route path={'/'} element={<Settings />}/>
       <Route path={'/settings'} element={<Settings />}/>
       <Route path={'/quiz'} element={<Quiz />}/>
     </Routes>
  )
}

export default App
