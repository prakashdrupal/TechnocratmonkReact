import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import { Footer,Header,Slider,Loader} from '../layouts/general';
import { Featured } from '../layouts/general/featured';
import { Services } from '../layouts/general/services';
import { Blog } from '../layouts/general/blog';
import Brand from '../layouts/aboutus/Brand';
import HappyClients from '../layouts/aboutus/HappyClients';
import NewsLetter from '../layouts/aboutus/NewsLetter';
import Testimonials from '../layouts/general/Testimonials';
import Team from '../layouts/general/Team';

class Home01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
           headers: [
               {
                   id: 1,
                   names: 'Home'
               }
           ],
           
        }
    }
    render() {
        return (
            <div className="bg-body3">
                <div className="boxed">
                    <Loader />
                    {
                        this.state.headers.map(data => (
                            <Header data={data} key={data.id}/>
                        ))
                    }
                    <Slider />
                    <Brand />
                    <Featured />
                    <Services />
                    <Testimonials/>
                    <HappyClients/>
                    <Team/>
                    <Blog />
                    <NewsLetter/>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default withRouter(Home01);