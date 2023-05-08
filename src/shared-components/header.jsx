const Header = () =>{
    return(
        <div className="layout__header">
             <div className="container h-100">
                <div className="layout__header--container">
                <img src={process.env.PUBLIC_URL + "/assets/images/logo.svg"} alt="" />
                <div className="layout__header--navmenu">
                    <a href="">Intro Video</a>
                    <a href="" className="active">Referral Program</a>
                    <a href="">Buy now</a>
                    <a href="">MBLK Vision</a>
                    <a href="">Tokenomics</a>
                    <a href="">how to buy</a>
                    <a href="">how to buy</a>
                </div>
                <div className="layout__header--action-btns ">
                    <button className="btn btn-outline-primary">Connect wallet</button>
                    <button className="btn btn-primary">JOIN PRESALE</button>
                </div>
                </div>
             
             </div>
        </div>
    )
}

export default Header