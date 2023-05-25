import Styles from './referral-program.module.scss'
import React, { useState } from 'react';


import Slider from "react-slick";

const Referralprogram = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return (
        <>
            <div className={Styles.banner}>
                <div className={Styles.banner__backgrounds}>
                    <div className={Styles.banner__backgrounds__image__landscape}></div>
                    <div className={Styles.banner__backgrounds__image__rocks}></div>
                    <div className={Styles.banner__backgrounds__image__cartoon}></div>
                </div>

                <div className={Styles.banner__content}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-7">
                                <h1 className={Styles.banner__content__title}>Get in Early on the<br />$MBLK Pre-Sale</h1>
                                <p className={Styles.banner__content__desp}>
                                    <strong>$MBLK</strong> is an ERC20 utility token on the <strong>Ethereum network</strong> that serves as the main in-game currency in <strong>Legends
                                        of Bezogia</strong>. Developed by Zogi Labs, $MBLK offers players and investors a unique opportunity to be a part of the
                                    <strong> future of gaming and blockchain technology</strong>.
                                </p>
                            </div>
                            <div className="col-md-12 col-lg-7">
                                <div className={Styles.wallet}>
                                    <div className="d-flex flex-nowrap justify-content-between mb-3 mb-md-3 ">
                                        <h2>Stage 1</h2>
                                        <h2>84.85% SOLD</h2>
                                    </div>
                                    <div className={Styles.wallet__progressbar}>
                                        <p className={Styles.wallet__progressbar__value}>$4,993,505 / $5,885,000 total RAISED</p>
                                        <div className={Styles.wallet__progressbar__fill} style={{ width: "70%" }}></div>
                                    </div>
                                    <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-2 align-items-center mb-3">
                                        <div className="wallet__token-sold">
                                            <span>486,423,431 </span> Tokens Sold
                                        </div>
                                        <div className="wallet__token-remaining">
                                            <span>68,576,569 </span> Remaining
                                        </div>
                                    </div>
                                    <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-3 align-items-center text-center text-md-end" >
                                        <div>
                                            <p className="stage-price">STAGE 1 price: <span>$0.014 USDT</span> = 1 $MBLK</p>
                                            <p className="stage-price">Next STAGE price: <span>$0.015 USDT</span> = 1 $MBLK</p>
                                        </div>
                                        <button className="btn btn-primary">Buy tokens</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tokens">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <div className='text-center text-lg-start'>
                                <h1 className="tokens__title">This is a tittle</h1>
                                <p className="tokens__desp">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis faucibus tortor,
                                    ac eleifend tortor congue vitae. Morbi at orci tempus, scelerisque magna molestie, ullamcorper enim.
                                </p>
                                <div className="mb-5 d-block d-lg-none">
                                    <button className='btn btn-primary'>Buy tokens</button>
                                </div>
                            </div>
                            <Slider className="tokens__list"
                                    asNavFor={nav1}
                                    ref={(slider2) => setNav2(slider2)}
                                    arrows={false}
                                    slidesToShow={6}
                                    swipeToSlide={false}
                                    draggable={false}
                                    focusOnSelect={true}
                                    responsive={
                                        [
                                            {
                                                breakpoint: 600,
                                                settings: {
                                                    slidesToShow: 3,
                                                    centerMode: true,
                                                    centerPadding: "50px",
                                                }
                                            }
                                        ]
                                    }
                                >
                                    <div className="tokens__list__item">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/token-images/Mintzogi.svg"} alt="" />
                                        <p>MINTZOGI</p>
                                    </div>
                                    <div className="tokens__list__item">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/token-images/Zerkzogi.svg"} alt="" />
                                        <p>Zerkzogi</p>
                                    </div>
                                    <div className="tokens__list__item">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/token-images/Speedzogi.svg"} alt="" />
                                        <p>Speedzogi</p>
                                    </div>
                                    <div className="tokens__list__item">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/token-images/Holyzogi.svg"} alt="" />
                                        <p>Holyzogi</p>
                                    </div>
                                    <div className="tokens__list__item">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/token-images/Freezogi.svg"} alt="" />
                                        <p>Freezogi</p>
                                    </div>
                                    <div className="tokens__list__item">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/token-images/Fudzogi.svg"} alt="" />
                                        <p>Fudzogi</p>
                                    </div>
                                    <div className="tokens__list__item">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/token-images/Darkzogi.svg"} alt="" />
                                        <p>Darkzogi</p>
                                    </div>
                                    {/* 
                                    <div>
                                        <img src={process.env.PUBLIC_URL + "/assets/images/token-images/"} alt="" />
                                        <p></p>
                                    </div> 
                                    */}
                            </Slider>
                        </div>
                        <div className="col-lg-4">
                            <Slider className="tokens__char" asNavFor={nav2} ref={(slider1) => setNav1(slider1)} arrows={false} swipeToSlide={false} draggable={false} fade={true}>
                                <div className="tokens__char__item">
                                    <img className="tokens__char__item__img" src={process.env.PUBLIC_URL + "/assets/images/token-images/token-char.png"} alt="" />
                                </div>
                                <div className="tokens__char__item">
                                    <img className="tokens__char__item__img" src={process.env.PUBLIC_URL + "/assets/images/token-images/token-char.png"} alt="" />
                                </div>
                                <div className="tokens__char__item">
                                    <img className="tokens__char__item__img" src={process.env.PUBLIC_URL + "/assets/images/token-images/token-char.png"} alt="" />
                                </div>
                                <div className="tokens__char__item">
                                    <img className="tokens__char__item__img" src={process.env.PUBLIC_URL + "/assets/images/token-images/token-char.png"} alt="" />
                                </div>
                                <div className="tokens__char__item">
                                    <img className="tokens__char__item__img" src={process.env.PUBLIC_URL + "/assets/images/token-images/token-char.png"} alt="" />
                                </div>
                                <div className="tokens__char__item">
                                    <img className="tokens__char__item__img" src={process.env.PUBLIC_URL + "/assets/images/token-images/token-char.png"} alt="" />
                                </div>
                                <div className="tokens__char__item">
                                    <img className="tokens__char__item__img" src={process.env.PUBLIC_URL + "/assets/images/token-images/token-char.png"} alt="" />
                                </div>
                            </Slider>
                        </div>
                        <div className="col-lg-12 text-center mt-5 d-none d-lg-block">
                            <button className='btn btn-primary'>Buy tokens</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Referralprogram