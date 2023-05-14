import React from 'react';

const Card = () => {
    return (
        <div>
            <main>
                <section className ="scard">
                    <img className="IMGDesktop"  src="https://gwen-lego.github.io/html-Css-challenges/Challenge%204%20-%20product%20preview/images/image-product-desktop.jpg"
                         />
                    <div className="text">
                        <div>
                            <p id="perfume"> PERFUME</p>
                            <h1> Gabrielle Essence Eau De Parfum</h1>
                            <p>
                                A floral, solar and voluptuous interpretation composed by Olivier
                                Polge, Perfumer-Creator for the House of CHANEL.
                            </p>
                        </div>
                        <div className="prices">
                            <h2> $149.99 </h2>
                            <h3 id="discount"> $169.99 </h3>
                        </div>
                        <div id="button">
                            <div className="insidebtn">
                                <object data="./images/icon-cart.svg" id="carticon"/>
                                <p className="buttontext"> Add to Cart</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Card;