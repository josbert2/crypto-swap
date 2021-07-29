
const Header = () => {
    return (
        <div  classNameName="Home">
          <div class="header">
            <form class="header__search">
                <input class="header__input" type="text" placeholder="Search" />
                <button class="header__start">
                  
                </button>
            </form>
            <a class="header__logo" href="index-2.html"><img src="img/logo-sm.svg" alt="" /></a>
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