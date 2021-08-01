import bitCoin from "../assets/img/logo/bitcoin.png"
import ethereum from "../assets/img/logo/ethereum.png"
import steem from "../assets/img/logo/steem.png"
import tokenbox from "../assets/img/logo/tokenbox.png"
import sprite from "../assets/img/sprite.svg"
import ethe from "../assets/img/ethe.png"
import Header from "../pages/header"
const Trade = () => {
    return (
        <div>
        <div  className="page">
            
            <div  className="page__content">
                <Header />
                
                <div  className="header " style={{ background: "url('https://changenow.io/images/coins-bg.svg')", backgroundPosition: "center", backgroundSize: "cover", width: "100%", backgroundRepeat: "no-repeat" }}>
                
                
                    <div  className="grid  grid-cols-1 md:grid-cols-2 w-full ">
                            <div  className="">
                                <div  className="flex items-center">
                                    <h1  className="text-white text-6xl font-bold">Empieza a Tradear</h1>
                                    <div  className="ml-4 p-2 rounded-md bg-gray-100 bg-opacity-10 flex items-center">
                                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.772864 3.24846C0.457408 3.24846 0.173615 3.07952 0.0558748 2.82164C-0.0618654 2.56376 0.0100831 2.26871 0.237649 2.07621L2.46776 0.189733C2.76682 -0.0632443 3.23913 -0.0632443 3.53819 0.189733L5.7683 2.07621C5.99587 2.26871 6.06782 2.56376 5.95008 2.82164C5.83234 3.07952 5.54854 3.24846 5.23309 3.24846H3.77583L3.77583 11.2363C3.77583 11.6124 3.42982 11.9173 3.00299 11.9173C2.57616 11.9173 2.23015 11.6124 2.23015 11.2363V3.24846H0.772864Z" fill="#00C26F"></path><path d="M15.2271 8.75154C15.5426 8.75154 15.8264 8.92048 15.9441 9.17836C16.0619 9.43624 15.9899 9.73129 15.7624 9.92379L13.5322 11.8103C13.2332 12.0632 12.7609 12.0632 12.4618 11.8103L10.2317 9.92379C10.0041 9.73129 9.93219 9.43624 10.0499 9.17836C10.1677 8.92048 10.4515 8.75154 10.7669 8.75154H12.224L12.224 0.680991C12.224 0.30489 12.57 0 12.9969 0C13.4237 0 13.7697 0.30489 13.7697 0.680991L13.7697 8.75154H15.2271Z" fill="#00C26F"></path></svg>
                                    </div>
                                </div>
                                <div  className="text-white text-center md:p-0 px-12 md:mb-0 mb-8 md:text-left text-md font-bold md:font-light mt-14 w-full md:w-2/3">
                                    Manera rápida y segura de intercambiar y comprar más de 150 criptomonedas. Soporte de chat en vivo 24/7.


                                </div>
                            </div>

                            <div  className="">
                                <div  className="page__row ">
                                    <div  className="w-full ">
                                        <div  className="content-panel-custom m-0 ml-auto shadow-lg">
                                        <div  className="panel__title">
                                            Trade
                                        </div>
                
                                        <form action="">
                                            <div  className="">
                                                <div  className="d-flex align-items-center">
                                                    <span  className="pure-color">From</span>
                                                    <span  className="ml-auto pure-color">Balance: 875</span>
                                                </div>
                                                <div  className="main-input-container">
                                                
                                                <div  className="sc-jKVCRD gGrcTx">
                                                    <input
                                                         className="sc-ebFjAB eOZxyJ token-amount-input"
                                                        inputmode="decimal"
                                                        title="Token Amount"
                                                        autocomplete="off"
                                                        autocorrect="off"
                                                        type="text"
                                                        pattern="^[0-9]*[.,]?[0-9]*$"
                                                        placeholder="0.0"
                                                        minlength="1"
                                                        maxlength="79"
                                                        spellcheck="false"
                                                        value=""
                                                    />
                                                    <button  className="sc-kaNhvL klZCeJ open-currency-select-button" data-remodal-target="crypto-coin" >
                                                        <span  className="sc-iBEsjs fHBHHb">
                                                            <img  className="sc-bHwgHz kppPew" alt="ANKR logo" src="data:image/png;base64,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" /><span  className="sc-cooIXK UEIqu token-symbol-container">ANKR</span>
                                                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none"  className="sc-hzNEM fhyRkc"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
                                                        </span>
                                                    </button>
                                                </div>
                                                </div>
                                            </div>
                
                                            <div  className="container-center-svg">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"/></svg>
                                            </div>
                
                                            <div  className="">
                                                <div  className="d-flex align-items-center">
                                                    <span  className="pure-color">To (Estimated)</span>
                                                    <span  className="ml-auto pure-color">Balance: 875</span>
                                                </div>
                                                <div  className="main-input-container">
                                                
                                                <div  className="sc-jKVCRD gGrcTx">
                                                    <input
                                                         className="sc-ebFjAB eOZxyJ token-amount-input"
                                                        inputmode="decimal"
                                                        title="Token Amount"
                                                        autocomplete="off"
                                                        autocorrect="off"
                                                        type="text"
                                                        pattern="^[0-9]*[.,]?[0-9]*$"
                                                        placeholder="0.0"
                                                        minlength="1"
                                                        maxlength="79"
                                                        spellcheck="false"
                                                        value=""
                                                    />
                                                    <button  className="sc-kaNhvL klZCeJ open-currency-select-button">
                                                        <span  className="sc-iBEsjs fHBHHb">
                                                            <img  className="sc-bHwgHz kppPew" alt="ANKR logo" src="https://www.bakeryswap.org/images/coins/ALICE.png" /><span  className="sc-cooIXK UEIqu token-symbol-container">ALICE</span>
                                                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none"  className="sc-hzNEM fhyRkc"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
                                                        </span>
                                                    </button>
                                                </div>
                                                </div>
                                            </div>
                                            
                
                                            <div  className="m-t-60">
                                            <button  className="operations__btn btn btn_blue btn_wide">Connect Wallet</button>
                                            </div>
                                        </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
               
            </div>
        </div>
        <div  className="remodal" data-remodal-id="crypto-coin">
            <div  className="w-full flex">
                <div  className="ml-auto">
                    <button data-remodal-action="close"  className="remodal-close left-auto right-0 " style={{ left: "auto" }}></button>
                </div>
            </div>
            <div  className="w-full">
                <div  className="relative mr-6 my-2 w-full">
                    <input type="search"  className="bg-purple-white shadow rounded border-0 p-3 w-full" placeholder="Search by name..." />
                    <div  className="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter top-0 right-0">
                        <svg version="1.1"  className="h-4 text-dark" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                       viewBox="0 0 52.966 52.966"  >
                          <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
                          c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
                          C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
                          S32.459,40,21.983,40z"/>
                  
                      </svg>
                  
                    </div>
                </div>
             <div  className="mt-4">
                <div  className="flex border-b border-solid  border-gray-100 pb-2 pt-2">
                    <div   className="w-12 h-12 rounder  p-1">
                        <img  className="h-full w-full border-transparent" 
                        src="" /></div>
            
                    <div  className="  ChangeTokenActionSheet__TokenLabelColumn-sc-1pl3sgj-11 eBWKZm ml-2">
                        <div  className="ChangeTokenActionSheet__TokenSymbolLabel-sc-1pl3sgj-12 bSLwXg">Ethereum 
                            <span style={{ color: "rgb(117, 120, 181)" }}> - ETH</span>
                        </div>
                        <div  className="ChangeTokenActionSheet__TokenBalanceLabel-sc-1pl3sgj-13 kJfxAF text-left">0</div>
                    </div>
                    <div  className="ml-auto flex items-center cursor-pointer hover:text-indigo-600">
                        Seleccionar
                    </div>
                </div>
                <div  className="flex border-b border-solid  border-gray-100 pb-2 pt-2">
                    <div   className="w-12 h-12 rounder  p-1">
                        <img  className="h-full w-full border-transparent" 
                        src={ethe} /></div>
            
                    <div  className="  ChangeTokenActionSheet__TokenLabelColumn-sc-1pl3sgj-11 eBWKZm ml-2">
                        <div  className="ChangeTokenActionSheet__TokenSymbolLabel-sc-1pl3sgj-12 bSLwXg">Ethereum 
                            <span style={{ color: "rgb(117, 120, 181)" }}> - ETH</span>
                        </div>
                        <div  className="ChangeTokenActionSheet__TokenBalanceLabel-sc-1pl3sgj-13 kJfxAF text-left">0</div>
                    </div>
                    <div  className="ml-auto flex items-center cursor-pointer hover:text-indigo-600">
                        Seleccionar
                    </div>
                </div>
                <div  className="flex border-b border-solid  border-gray-100 pb-2 pt-2">
                    <div   className="w-12 h-12 rounder  p-1">
                        <img  className="h-full w-full border-transparent" 
                        src={ethe}
                        /></div>
            
                    <div  className="  ChangeTokenActionSheet__TokenLabelColumn-sc-1pl3sgj-11 eBWKZm ml-2">
                        <div  className="ChangeTokenActionSheet__TokenSymbolLabel-sc-1pl3sgj-12 bSLwXg">Ethereum 
                            <span style={{ color: "rgb(117, 120, 181)" }}> - ETH</span>
                        </div>
                        <div  className="ChangeTokenActionSheet__TokenBalanceLabel-sc-1pl3sgj-13 kJfxAF text-left">0</div>
                    </div>
                    <div  className="ml-auto flex items-center cursor-pointer hover:text-indigo-600">
                        Seleccionar
                    </div>
                </div>
                <div  className="flex border-b border-solid  border-gray-100 pb-2 pt-2">
                    <div   className="w-12 h-12 rounder  p-1">
                        <img  className="h-full w-full border-transparent" 
                        src={ethe}  /></div>
            
                    <div  className="  ChangeTokenActionSheet__TokenLabelColumn-sc-1pl3sgj-11 eBWKZm ml-2">
                        <div  className="ChangeTokenActionSheet__TokenSymbolLabel-sc-1pl3sgj-12 bSLwXg">Ethereum 
                            <span style={{ color: "rgb(117, 120, 181)" }}> - ETH</span>
                        </div>
                        <div  className="ChangeTokenActionSheet__TokenBalanceLabel-sc-1pl3sgj-13 kJfxAF text-left">0</div>
                    </div>
                    <div  className="ml-auto flex items-center cursor-pointer hover:text-indigo-600">
                        Seleccionar
                    </div>
                </div><div  className="flex border-b border-solid  border-gray-100 pb-2 pt-2">
                    <div   className="w-12 h-12 rounder  p-1">
                        <img  className="h-full w-full border-transparent" 
                        src={{ethe}} /></div>
            
                    <div  className="  ChangeTokenActionSheet__TokenLabelColumn-sc-1pl3sgj-11 eBWKZm ml-2">
                        <div  className="ChangeTokenActionSheet__TokenSymbolLabel-sc-1pl3sgj-12 bSLwXg">Ethereum 
                            <span style={{ color: "rgb(117, 120, 181)" }}> - ETH</span>
                        </div>
                        <div  className="ChangeTokenActionSheet__TokenBalanceLabel-sc-1pl3sgj-13 kJfxAF text-left">0</div>
                    </div>
                    <div  className="ml-auto flex items-center cursor-pointer hover:text-indigo-600">
                        Seleccionar
                    </div>
                </div>
                <div  className="flex border-b border-solid  border-gray-100 pb-2 pt-2">
                    <div   className="w-12 h-12 rounder  p-1">
                        <img  className="h-full w-full border-transparent" 
                        src={ethe} /></div>
            
                    <div  className="  ChangeTokenActionSheet__TokenLabelColumn-sc-1pl3sgj-11 eBWKZm ml-2">
                        <div  className="ChangeTokenActionSheet__TokenSymbolLabel-sc-1pl3sgj-12 bSLwXg">Ethereum 
                            <span style={{ color: "rgb(117, 120, 181)" }}> - ETH</span>
                        </div>
                        <div  className="ChangeTokenActionSheet__TokenBalanceLabel-sc-1pl3sgj-13 kJfxAF text-left">0</div>
                    </div>
                    <div  className="ml-auto flex items-center cursor-pointer hover:text-indigo-600">
                        Seleccionar
                    </div>
                </div>
               </div>
            </div>
      
            <div  className="m-t-60">
                <button  className="operations__btn btn btn_blue btn_wide">Connect Wallet</button>
                </div>
          </div>

        <div  className="remodal" data-remodal-id="crypto-wallet">
            <div  className="w-full flex">
                <div  className="ml-auto">
                    <button data-remodal-action="close"  className="remodal-close left-auto right-0 " style={{ left: "auto" }}></button>
                </div>
            </div>
            <div  className="my-6 font-bold text-md">
                Conecta tu Wallet
            </div>
            <div  className="group cursor-pointer transition border-gray-200 border border-solid p-3 rounded flex items-center hover:bg-indigo-400">
                <div  className="w-8 h-8 rounded-full mr-7">
                    <img  className="border-transparent " src="https://shibaswap.com/static/media/metamask.02e3ec27.png" alt="" />
                </div>
                <div  className="group-hover:text-gray-100 transition">
                    Connect Wallet
                </div>
            </div>
            <div  className="cursor-pointer group transition border-gray-200 border border-solid p-3 rounded flex items-center hover:bg-indigo-400 mb-6 mt-6">
                <div  className="w-8 h-8 rounded-full mr-7">
                    <img  className="border-transparent " src="https://shibaswap.com/static/media/metamask.02e3ec27.png" alt="" />
                </div>
                <div  className="group-hover:text-gray-100 transition">
                    Connect Wallet
                </div>
            </div>
            <div  className="group cursor-pointer transition border-gray-200 border border-solid p-3 rounded flex items-center hover:bg-indigo-400">
                <div  className="w-8 h-8 rounded-full mr-7">
                    <img  className="border-transparent " src="https://shibaswap.com/static/media/metamask.02e3ec27.png" alt="" />
                </div>
                <div  className="group-hover:text-gray-100 transition">
                    Connect Wallet
                </div>
            </div>

        </div>
        </div>
    )

}

export default Trade;