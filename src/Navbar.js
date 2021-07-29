import { Link } from 'react-router-dom'
const NavBar = () => {
 
    
    return (
        <div className="Aside">


            <div  className="sidebar">
                <div  className="sidebar__head">
                    <a  className="sidebar__logo" style={{ color:"#fff", fontSize: "20px" }} href="index-2.html">
                        <img  className="sidebar__pic " style={{width:"65px"}} src="https://proteodefi.com/wp-content/uploads/2021/06/proteo9-1.png" alt="" /></a>
                    <button  className="sidebar__toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M22 12H3" stroke="#11142d"></path>
                            <g stroke="#808191">
                                <path d="M22 4H13"></path>
                                <path opacity=".301" d="M22 20H13"></path>
                            </g>
                            <path d="M7 7l-5 5 5 5" stroke="#11142d"></path>
                        </svg>
                    </button>
                    <button  className="sidebar__close">
                    
                    </button>
                </div>
                <div  className="sidebar__body">
                    <nav  className="sidebar__nav">
                        <Link className="sidebar__item " to="/" activeClassName="active">
                            <div  className="sidebar__icon">
                            <svg id="icon-home" viewBox="0 0 22 22">
                                <path d="M6.714 12.016a3.21 3.21 0 0 1 3.199 3.221v3.293a3.21 3.21 0 0 1-3.199 3.22H3.448A3.21 3.21 0 0 1 .25 18.53v-3.293a3.21 3.21 0 0 1 3.199-3.221zm11.838 0a3.21 3.21 0 0 1 3.198 3.221v3.293a3.21 3.21 0 0 1-3.198 3.22h-3.267a3.21 3.21 0 0 1-3.199-3.22v-3.293a3.21 3.21 0 0 1 3.199-3.221zm-11.838 1.5H3.449a1.71 1.71 0 0 0-1.699 1.721v3.293a1.71 1.71 0 0 0 1.699 1.72h3.266a1.71 1.71 0 0 0 1.699-1.72v-3.293a1.71 1.71 0 0 0-1.699-1.721zm11.838 0h-3.267a1.71 1.71 0 0 0-1.699 1.721v3.293a1.71 1.71 0 0 0 1.699 1.72h3.267a1.71 1.71 0 0 0 1.698-1.72v-3.293a1.71 1.71 0 0 0-1.698-1.721zm0-13.266a3.21 3.21 0 0 1 3.198 3.22v3.294c0 1.776-1.431 3.22-3.198 3.22h-3.267c-1.768 0-3.199-1.444-3.199-3.22V3.47a3.21 3.21 0 0 1 3.2-3.22zM6.714.25a3.21 3.21 0 0 1 3.199 3.22v3.294c0 1.776-1.431 3.22-3.199 3.22H3.448C1.681 9.984.25 8.54.25 6.764V3.47A3.21 3.21 0 0 1 3.449.25zm11.838 1.5h-3.267a1.71 1.71 0 0 0-1.699 1.72v3.294a1.71 1.71 0 0 0 1.699 1.72h3.267a1.71 1.71 0 0 0 1.698-1.72V3.47a1.71 1.71 0 0 0-1.698-1.72zm-11.838 0H3.449A1.71 1.71 0 0 0 1.75 3.47v3.294a1.71 1.71 0 0 0 1.699 1.72h3.266a1.71 1.71 0 0 0 1.699-1.72V3.47a1.71 1.71 0 0 0-1.699-1.72z"></path>
                            </svg>
                            </div>
                            <div  className="sidebar__text">Home</div>
                        </Link>
                        <Link  className="sidebar__item" to="trade" activeClassName="active">
                            <div  className="sidebar__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path
                                        d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"
                                    />
                                    <circle cx="16" cy="12" r="1.5" />
                                </svg>
                            </div>
                            <div  className="sidebar__text">Trade</div>
                        </Link>

                        <Link  className="sidebar__item" to="farms">
                            <div  className="sidebar__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/><path d="M22,5v2h-3v3h-2V7h-3V5h3V2h2v3H22z M19,19H5V5h6V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-6h-2V19z M15,13v4h2v-4H15z M11,17h2V9h-2V17z M9,17v-6H7v6H9z"/></g></svg>
                            </div>
                            <div  className="sidebar__text">Farms</div>
                        </Link>

                    <Link  className="sidebar__item" to="pool">
                        <div  className="sidebar__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 16.99c-1.35 0-2.2.42-2.95.8-.65.33-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.95c1.35 0 2.2-.42 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.42 2.95-.8c.65-.33 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm0-4.45c-1.35 0-2.2.43-2.95.8-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.32-1.17.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm2.95-8.08c-.75-.38-1.58-.8-2.95-.8s-2.2.42-2.95.8c-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.37-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.93c1.35 0 2.2-.43 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8V5.04c-.9 0-1.4-.25-2.05-.58zM17 8.09c-1.35 0-2.2.43-2.95.8-.65.35-1.15.6-2.05.6s-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.35-1.15.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.32 1.18-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8V9.49c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8z"/></svg>
                        </div>
                        <div  className="sidebar__text">Pools</div>
                    </Link>

                    

                <Link  className="sidebar__item" to="Nfa">
                    <div  className="sidebar__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                                d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"
                            />
                            <circle cx="16" cy="12" r="1.5" />
                        </svg>
                    </div>
                    <div  className="sidebar__text">NFA</div>
                </Link>

                <Link  className="sidebar__item" to="info" activeClassName="active">
                    <div  className="sidebar__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/><path d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z M6,20V4h7v4h5v12H6z M11,19h2v-1h1 c0.55,0,1-0.45,1-1v-3c0-0.55-0.45-1-1-1h-3v-1h4v-2h-2V9h-2v1h-1c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1h3v1H9v2h2V19z"/></g></svg>
                    </div>
                    <div  className="sidebar__text">Info</div>
                </Link>



                    </nav>

                    <form  className="sidebar__search">
                        <input  className="sidebar__input" type="text" placeholder="Search" />
                        <button  className="sidebar__start">
                        
                        </button>
                    </form>
                </div>
                <div  className="sidebar__bottom">
                    <label  className="switch switch_theme js-switch-theme">
                        <input  className="switch__input" type="checkbox" />
                        <span  className="switch__in">
                            <span  className="switch__box"></span>
                            <span  className="switch__icon">
                            
                            
                            
                            </span>
                        </span>
                    </label>
                    <a  className="sidebar__user" href="sign-in.html"><img src="img/ava-header.png" alt="" /></a>
                </div>
            </div>
            <div class="remodal-wrapper remodal-is-closed" style={{ display: "none" }}>
            <div class="remodal remodal-is-initialized remodal-is-closed" data-remodal-id="crypto-wallet" tabindex="-1">
                <div class="w-full flex">
                    <div class="ml-auto">
                        <button data-remodal-action="close" class="remodal-close left-auto right-0 " style={{ left: "auto" }}></button>
                    </div>
                </div>
                <div class="my-6 font-bold text-md">
                    Conecta tu Wallet
                </div>
                <div class="group cursor-pointer transition border-gray-200 border border-solid p-3 rounded flex items-center hover:bg-indigo-400">
                    <div class="w-8 h-8 rounded-full mr-7">
                        <img class="border-transparent " src="https://shibaswap.com/static/media/metamask.02e3ec27.png" alt="" />
                    </div>
                    <div class="group-hover:text-gray-100 transition">
                        Connect Wallet
                    </div>
                </div>
                <div class="cursor-pointer group transition border-gray-200 border border-solid p-3 rounded flex items-center hover:bg-indigo-400 mb-6 mt-6">
                    <div class="w-8 h-8 rounded-full mr-7">
                        <img class="border-transparent " src="https://shibaswap.com/static/media/metamask.02e3ec27.png" alt="" />
                    </div>
                    <div class="group-hover:text-gray-100 transition">
                        Connect Wallet
                    </div>
                </div>
                <div class="group cursor-pointer transition border-gray-200 border border-solid p-3 rounded flex items-center hover:bg-indigo-400">
                    <div class="w-8 h-8 rounded-full mr-7">
                        <img class="border-transparent " src="https://shibaswap.com/static/media/metamask.02e3ec27.png" alt="" />
                    </div>
                    <div class="group-hover:text-gray-100 transition">
                        Connect Wallet
                    </div>
                </div>

            </div></div>
        </div>
    )

}

export default NavBar;