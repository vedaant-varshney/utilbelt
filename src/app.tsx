import { createRoot } from 'react-dom/client';
import Header from './components/Header/Header';

const root = createRoot(document.body);

function Test() {
    return(
        <div>
            <Header/>
        </div>
    )
}


root.render(<Test/>);