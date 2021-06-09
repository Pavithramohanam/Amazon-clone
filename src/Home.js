import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img  
                    className="home__image" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                    alt=""
                />
                <div className="home__row">
                    <Product
                        id="98424"
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011'
                        price={526.32}
                        image="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
                        rating={4}
                     />
                    <Product 
                        id="98429"
                        title='OPPO F19 Pro (Crystal Silver, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers'
                        price={29999.50}
                        image="https://images-na.ssl-images-amazon.com/images/I/71M2xR9fGNL._SL1500_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="98426"
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011'
                        price={379.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="98429"
                        title='OPPO F19 Pro (Crystal Silver, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers'
                        price={ 23490.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/71M2xR9fGNL._SL1500_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="98428"
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011'
                        price={379.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="98429"
                        title='iFFALCON 139 cm (55 inches) 4K Ultra HD Smart Certified Android LED TV 55K71 (Sliver) (2021 Model)| With Voice Control'
                        price={ 123490.00}
                        image ="https://images-na.ssl-images-amazon.com/images/I/81ctfTXlVZS._SL1500_.jpg"
                        rating={3}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
