import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Routes from './routes';
import Footer from './components/footer/footer';

class App extends React.Component {

    render() {
        return(
            <div>
                <div id="app-container">
                    <BrowserRouter>
                        <Navigation></Navigation>
                        <Routes></Routes>
                    </BrowserRouter>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
