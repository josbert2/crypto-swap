import bitCoin from "../assets/img/logo/bitcoin.png"
import ethereum from "../assets/img/logo/ethereum.png"
import steem from "../assets/img/logo/steem.png"
import tokenbox from "../assets/img/logo/tokenbox.png"
import sprite from "../assets/img/sprite.svg"
import ethe from "../assets/img/ethe.png"
import Header from "../pages/header"
const Farm = () => {
    return (
        <div  classNameName="Home">
            <div  className="page">
           
            <div  className="page__content">
                <Header />
                <main>
                  
                    <div  className="header w-full flex flex-col">
                        <div  className="bg-gray-900 pl-9 pr-9 pb-4 w-full" style={{ background: "#191B20" }}>
                        
                                
      
                        
                       
                        <div  className="balances">
                            <div  className="balances__title h6 mt-10">Top Tokens</div>
                            <div  className="balances__table">
                                <div  className="balances__row balances__row_head">
                                <div  className="balances__cell"></div>
                                <div  className="balances__cell">NAME</div>
                                <div  className="balances__cell">PRICE</div>
                                <div  className="balances__cell">PRICE CHANGE</div>
                                <div  className="balances__cell">VOLUME 24H</div>
                                <div  className="balances__cell">LIQUIDITY</div>
                                </div>
                                <div  className="balances__row">
                                <div  className="balances__cell"><button  className="favorite"></button></div>
                                <div  className="balances__cell">
                                    <div  className="balances__company">
                                    <div  className="balances__logo"><img src={bitCoin} /></div>
                                    <div  className="balances__text">Bitcoin</div>
                                    </div>
                                </div>
                                <div  className="balances__cell">BTC</div>
                                <div  className="balances__cell">
                                    <div  className="status positive">+2.05%</div>
                                </div>
                                <div  className="balances__cell">
                                    <div  className="balances__number">19,266.6454898</div>
                                    <div  className="balances__price">$2,134.325</div>
                                </div>
                                <div  className="balances__cell">
                                    <div  className="balances__number">357,466,449,337</div>
                                    <div  className="balances__price">$2,134.325</div>
                                </div>
                                
                                </div>
                                <div  className="balances__row">
                                <div  className="balances__cell"><button  className="favorite"></button></div>
                                <div  className="balances__cell">
                                    <div  className="balances__company">
                                    <div  className="balances__logo"><img src={ethereum} /></div>
                                    <div  className="balances__text">Bitcoin</div>
                                    </div>
                                </div>
                                <div  className="balances__cell">BTC</div>
                                <div  className="balances__cell">
                                    <div  className="status negative">-2.73%</div>
                                </div>
                                <div  className="balances__cell">
                                    <div  className="balances__number">19,266.6454898</div>
                                    <div  className="balances__price">$2,134.325</div>
                                </div>
                                <div  className="balances__cell">
                                    <div  className="balances__number">357,466,449,337</div>
                                    <div  className="balances__price">$2,134.325</div>
                                </div>
                            
                                </div>
                                <div  className="balances__row">
                                <div  className="balances__cell"><button  className="favorite"></button></div>
                                <div  className="balances__cell">
                                    <div  className="balances__company">
                                    <div  className="balances__logo"><img src={steem} /></div>
                                    <div  className="balances__text">Bitcoin</div>
                                    </div>
                                </div>
                                <div  className="balances__cell">BTC</div>
                                <div  className="balances__cell">
                                    <div  className="status positive">+2.05%</div>
                                </div>
                                <div  className="balances__cell">
                                    <div  className="balances__number">19,266.6454898</div>
                                    <div  className="balances__price">$2,134.325</div>
                                </div>
                                <div  className="balances__cell">
                                    <div  className="balances__number">357,466,449,337</div>
                                    <div  className="balances__price">$2,134.325</div>
                                </div>
                                
                                </div>
                                <div  className="balances__row">
                                <div  className="balances__cell"><button  className="favorite"></button></div>
                                <div  className="balances__cell">
                                    <div  className="balances__company">
                                    <div  className="balances__logo"><img src={tokenbox} /></div>
                                    <div  className="balances__text">Bitcoin</div>
                                    </div>
                                </div>
                                <div  className="balances__cell">BTC</div>
                                <div  className="balances__cell">
                                    <div  className="status negative">-2.73%</div>
                                </div>
                                <div  className="balances__cell">
                                    <div  className="balances__number">19,266.6454898</div>
                                    <div  className="balances__price">$2,134.325</div>
                                </div>
                                <div  className="balances__cell">
                                    <div  className="balances__number">357,466,449,337</div>
                                    <div  className="balances__price">$2,134.325</div>
                                </div>
                                
                                </div>
                                <div  className="balances__row">
                                <div  className="balances__cell"><button  className="favorite"></button></div>
                                <div  className="balances__cell">
                                    <div  className="balances__company">
                                    <div  className="balances__logo"><img src={bitCoin} /></div>
                                    <div  className="balances__text">Bitcoin</div>
                                    </div>
                                </div>
                                <div  className="balances__cell">BTC</div>
                                <div  className="balances__cell">
                                    <div  className="status positive">+2.05%</div>
                                </div>
                                <div  className="balances__cell">
                                    <div  className="balances__number">19,266.6454898</div>
                                    <div  className="balances__price">$2,134.325</div>
                                </div>
                                <div  className="balances__cell">
                                    <div  className="balances__number">357,466,449,337</div>
                                    <div  className="balances__price">$2,134.325</div>
                                </div>
                            
                                </div>
                                <div  className="balances__row">
                                <div  className="balances__cell"><button  className="favorite"></button></div>
                                <div  className="balances__cell">
                                    <div  className="balances__company">
                                    <div  className="balances__logo"><img src={ethereum} /></div>
                                    <div  className="balances__text">Bitcoin</div>
                                    </div>
                                </div>
                                <div  className="balances__cell">BTC</div>
                                <div  className="balances__cell">
                                    <div  className="status negative">-2.73%</div>
                                </div>
                                <div  className="balances__cell">
                                    <div  className="balances__number">19,266.6454898</div>
                                    <div  className="balances__price">$2,134.325</div>
                                </div>
                                <div  className="balances__cell">
                                    <div  className="balances__number">357,466,449,337</div>
                                    <div  className="balances__price">$2,134.325</div>
                                </div>
                            
                                </div>
                                <div  className="balances__row">
                                <div  className="balances__cell"><button  className="favorite"></button></div>
                                <div  className="balances__cell">
                                    <div  className="balances__company">
                                    <div  className="balances__logo"><img src={steem} /></div>
                                    <div  className="balances__text">Bitcoin</div>
                                    </div>
                                </div>
                                <div  className="balances__cell">BTC</div>
                                <div  className="balances__cell">
                                    <div  className="status positive">+2.05%</div>
                                </div>
                                <div  className="balances__cell">
                                    <div  className="balances__number">19,266.6454898</div>
                                    <div  className="balances__price">$2,134.325</div>
                                </div>
                                <div  className="balances__cell">
                                    <div  className="balances__number">357,466,449,337</div>
                                    <div  className="balances__price">$2,134.325</div>
                                </div>
                            
                                </div>
                                <div  className="balances__row">
                                <div  className="balances__cell"><button  className="favorite"></button></div>
                                <div  className="balances__cell">
                                    <div  className="balances__company">
                                    <div  className="balances__logo"><img src={tokenbox} /></div>
                                    <div  className="balances__text">Bitcoin</div>
                                    </div>
                                </div>
                                <div  className="balances__cell">BTC</div>
                                <div  className="balances__cell">
                                    <div  className="status negative">-2.73%</div>
                                </div>
                                <div  className="balances__cell">
                                    <div  className="balances__number">19,266.6454898</div>
                                    <div  className="balances__price">$2,134.325</div>
                                </div>
                                <div  className="balances__cell">
                                    <div  className="balances__number">357,466,449,337</div>
                                    <div  className="balances__price">$2,134.325</div>
                                </div>
                            
                                </div>
                            </div>
                            <nav  className="border-t border-gray-200 px-4 mt-6 flex items-center justify-between sm:px-0">
                                <div  className="-mt-px w-0 flex-1 flex">
                                <a href="#"  className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                            
                                    <svg  className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                                    </svg>
                                    Previous
                                </a>
                                </div>
                                <div  className="hidden md:-mt-px md:flex">
                                <a href="#"  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                                    1
                                </a>
                                
                                <a href="#"  className="border-indigo-500 text-indigo-600 border-indigo-500 border-solid border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium" aria-current="page">
                                    2
                                </a>
                                <a href="#"  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                                    3
                                </a>
                                <span  className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                                    ...
                                </span>
                                <a href="#"  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                                    8
                                </a>
                                <a href="#"  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                                    9
                                </a>
                                <a href="#"  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                                    10
                                </a>
                                </div>
                                <div  className="-mt-px w-0 flex-1 flex justify-end">
                                <a href="#"  className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                                    Next
                                    
                                    <svg  className="ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                                </div>
                            </nav>
                        
                        </div>

                        </div>
                                

                    
                            
                     
                        <div  className="bg-gray-900 p-7 w-full mt-8" style={{  background: "#191B20", paddingTop: "0",
                        paddingBottom: "17px" }}>

                            
      
                        </div>
                    </div>
      
                </main>
            </div>
            </div>
        </div>
    
    )

}
export default Farm