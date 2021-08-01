import bitCoin from "../assets/img/logo/bitcoin.png"
import ethereum from "../assets/img/logo/ethereum.png"
import steem from "../assets/img/logo/steem.png"
import tokenbox from "../assets/img/logo/tokenbox.png"
import sprite from "../assets/img/sprite.svg"
import Header from "../pages/header"
const Home = () => {
    return (
        <div  classNameName="Home">
            <div  className="page">
           
            <div  className="page__content">
                <Header />
                <main>
                  
                    <div  className="header w-full flex flex-col">
                        <div  className="bg-gray-900 pl-9 pr-9 pb-4 w-full" style={{ background: "#191B20" }}>
                        
                                <nav aria-label="Progress">
                                    <ol  className="space-y-4 md:flex md:space-y-0 md:space-x-8" id="tabs">
                                    <li  className="md:flex-1" data-target="tab1">
                                    
                                    
                                        <a href="#"  className="group pl-4 py-2 flex flex-col border-l-4 border-indigo-600 hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
                                        <span  className="text-xs text-indigo-600 font-semibold tracking-wide uppercase group-hover:text-indigo-800">Info & Analytics</span>
                                        <span  className="text-sm font-medium">Crypto</span>
                                        </a>
                                    </li>
                                
                                    <li  className="md:flex-1 is-active" data-target="tab2">
                                  
                                        <a href="#"  className="pl-4 py-2 flex flex-col border-l-4 border-indigo-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4" aria-current="step">
                                        <span  className="text-xs text-indigo-600 font-semibold tracking-wide uppercase">Top Tokens</span>
                                        <span  className="text-sm font-medium">Application form</span>
                                        </a>
                                    </li>
                                
                                    <li  className="md:flex-1" data-target="tab3">
                                  
                                        <a href="#"  className="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
                                        <span  className="text-xs text-indigo-600 font-semibold tracking-wide uppercase group-hover:text-gray-700">Top Pools</span>
                                        <span  className="text-sm font-medium">Preview</span>
                                        </a>
                                    </li>
                                    <li  className="md:flex-1" data-target="tab3">
                                  
                                        <a href="#"  className="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
                                        <span  className="text-xs text-indigo-600 font-semibold tracking-wide uppercase group-hover:text-gray-700">Transactions</span>
                                        <span  className="text-sm font-medium">Preview</span>
                                        </a>
                                    </li>
                                    </ol>
                                </nav>
      
                        </div>
                        <div  className="bg-gray-900 p-7 w-full mt-8" style={{ background: "#191B20" }}>
                            <div  className="tab-item is-active" id="tab1">
                                <div  className="">
                                    <div  className="grid grid-cols-2 gap-4">
                                        <div id="chart">

                                        </div>
                                      
                                        <div id="chart2">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="tab-item is-active" id="tab2">
                                <div  className="balances">
                                    <div  className="balances__title h6">Top Tokens</div>
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
                            <div  className="tab-item" id="tab3">
                                <div  className="balances">
                                    <div  className="balances__title h6">Top Pools</div>
                                    <div  className="balances__table">
                                      <div  className="balances__row balances__row_head">
                                        <div  className="balances__cell"></div>
                                        <div  className="balances__cell">POOL</div>
                                        <div  className="balances__cell">VOLUME 24H</div>
                                        <div  className="balances__cell">VOLUME 7D</div>
                                        
                                        <div  className="balances__cell">LP REWARD FEES 24H</div>
                                        <div  className="balances__cell">LP REWARD APR</div>
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
                                        <div  className="balances__cell">
                                            <div  className="balances__number">357,466,449,337</div>
                                          
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
                                        <div  className="balances__cell">
                                            <div  className="balances__number">357,466,449,337</div>
                                          
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
                                        <div  className="balances__cell">
                                            <div  className="balances__number">357,466,449,337</div>
                                          
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
                                        <div  className="balances__cell">
                                            <div  className="balances__number">357,466,449,337</div>
                                          
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
                                        <div  className="balances__cell">
                                            <div  className="balances__number">357,466,449,337</div>
                                          
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
                                        <div  className="balances__cell">
                                            <div  className="balances__number">357,466,449,337</div>
                                          
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

                                        <div  className="balances__cell">
                                            <div  className="balances__number">357,466,449,337</div>
                                          
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

                                        <div  className="balances__cell">
                                            <div  className="balances__number">357,466,449,337</div>
                                          
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
                            <div  className="tab-item" id="tab4">
                                <div  className="balances">
                                    <div  className="balances__title h6">Top Pools</div>
                                    <div  className="balances__table">
                                      <div  className="balances__row balances__row_head">
                                        <div  className="balances__cell"></div>
                                        <div  className="balances__cell">POOL</div>
                                        <div  className="balances__cell">Total VALUE</div>
                                        <div  className="balances__cell">TOKEN AMOUNT</div>
                                        
                                        <div  className="balances__cell">TOKEN AMOUNT</div>
                                        <div  className="balances__cell">ACOUNT </div>
                                        <div  className="balances__cell">TIME</div>
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
                                        <div  className="balances__cell">
                                            <div  className="balances__number">357,466,449,337</div>
                                          
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
                                        <div  className="balances__cell">
                                            <div  className="balances__number">357,466,449,337</div>
                                          
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
                                        <div  className="balances__cell">
                                            <div  className="balances__number">357,466,449,337</div>
                                          
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
                                        <div  className="balances__cell">
                                            <div  className="balances__number">357,466,449,337</div>
                                          
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
                                        <div  className="balances__cell">
                                            <div  className="balances__number">357,466,449,337</div>
                                          
                                        </div>
                                  
                                      </div>
                                      <div  className="balances__row">
                                        <div  className="balances__cell"><button  className="favorite"></button></div>
                                        <div  className="balances__cell">
                                          <div  className="balances__company">
                                            <div  className="balances__logo"><img src={ ethereum } /></div>
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
                                        <div  className="balances__cell">
                                            <div  className="balances__number">357,466,449,337</div>
                                          
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

                                        <div  className="balances__cell">
                                            <div  className="balances__number">357,466,449,337</div>
                                          
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

                                        <div  className="balances__cell">
                                            <div  className="balances__number">357,466,449,337</div>
                                          
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
                            <div  className="tab-item" id="tab5">
                            
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

export default Home;