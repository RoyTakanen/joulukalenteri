import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h3>Joulukalenteria ei löydy tällä osoitteella</h3>
      <p>Voit palata <Link to="/joulukalenteri">joulukalenterin etusivulle</Link>.</p>
    </>
  )
}