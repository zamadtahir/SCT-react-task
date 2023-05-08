const Header = () =>{
    
    const shoot = () => {
        debugger
        if(window.ethereum){
            window.ethereum.request({method:'eth_requestAccounts'})
            .then(res=>{
                    alert('Your Wallet Address:: ' + res) 
                    debugger
                    window.ethereum.request({method:'eth_getBalance', params: [res[0], 'latest']})
                    .then(balance => {
                        debugger
                        alert('Your Wallet Balance:: ' + balance) 
                    })
            })
          }else{
            alert("install metamask extension!!")
          } 
      }
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
                    <div className="layout__header--action-btns">
                        <button className="btn btn-outline-primary" onClick={shoot}>Connect wallet</button>
                        <button className="btn btn-primary">JOIN PRESALE</button>
                    </div>
                    <div className="layout__header--hamburger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
             
             </div>
        </div>
    )
}

export default Header