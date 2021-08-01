
const Header = () => {
    return (
        <div  classNameName="Home">
          <div class="header">
            <form class="header__search">
                <input class="header__input" type="text" placeholder="Search" />
                <button class="header__start">
                  
                </button>
            </form>
            <a class="header__logo md:hidden hidden" href="index-2.html"><img src="img/logo-sm.svg" alt="" /></a>
            <div class="md:hidden ml">
            <a class="sidebar__logo" href="index-2.html" style={{ color: "rgb(255, 255, 255)", fontSize: "20px" }}>
                <img class="sidebar__pic " src="https://proteodefi.com/wp-content/uploads/2021/06/proteo9-1.png" alt="" style={{ width: "65px" }} />
            </a>
            </div>
            <button class="header__toggle mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M22 12H3" stroke="#11142d"></path>
              <g stroke="#808191">
                <path d="M22 4H13"></path>
                <path opacity=".301" d="M22 20H13"></path>
              </g>
              <path d="M7 7l-5 5 5 5" stroke="#11142d"></path>
            </svg></button>
            <div class="header__group">
                <button class="operations__btn btn btn_blue btn_wide d-flex align-items-center">
                    <svg class="m-r-10" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"></path>
                        <circle cx="16" cy="12" r="1.5"></circle>
                    </svg>
                    Conect Wallet
                </button>
            </div>
           
        </div>

        </div>
    )

}

export default Header;