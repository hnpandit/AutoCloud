import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Body from '../../Components/Body/Body';

class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Header/>
                <Body>
                    
                </Body>
                <Footer/>
            </React.Fragment>
            
         );
    }
}
 
export default Dashboard;