const Referralprogram = () =>{
    return(
        <>
            <div className="banner">
                <div className="banner__background landscape"></div>
                <div className="banner__background rocks"></div>
                <div className="banner__characters cartoon"></div>

                <div className="banner__content">
                    <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-md-7">
                            <h1 className="banner__content--title">Get in Early on the<br/>$MBLK Pre-Sale</h1>
                            <p className="banner__content--desp">
                                <strong>$MBLK</strong> is an ERC20 utility token on the <strong>Ethereum network</strong> that serves as the main in-game currency in <strong>Legends 
                                of Bezogia</strong>. Developed by Zogi Labs, $MBLK offers players and investors a unique opportunity to be a part of the  
                                <strong> future of gaming and blockchain technology</strong>.
                            </p>
                            <div className="wallet">
                                <div className="d-flex flex-nowrap justify-content-between mb-3 mb-md-3 ">
                                    <h2>Stage 1</h2>
                                    <h2>84.85% SOLD</h2>
                                </div>
                                <div className="wallet__progress-bar">
                                    <p className="wallet__progress-bar--value">$4,993,505 / $5,885,000 total RAISED</p>
                                    <div className="wallet__progress-bar--fill" style={{width: "70%"}}></div>
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
        </>
    )
}

export default Referralprogram
