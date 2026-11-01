import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from 'react-router-dom';

import { createRoot } from 'react-dom/client'
import AdventCalendar from './components/adventCalendar.jsx'

import NotFound from './components/NotFound';

function CalendarWrapper() {
  const { username, repo } = useParams();

  return <AdventCalendar githubRepo={`${username}/${repo}`} />;
}

createRoot(document.getElementById('root')).render(
   <>
      <BrowserRouter>
        <Routes>
         <Route index path="/joulukalenteri" element={<AdventCalendar/>} />
         <Route path="/joulukalenteri/:username/:repo" element={<CalendarWrapper />} />
         <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
)
