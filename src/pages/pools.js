import bitCoin from "../assets/img/logo/bitcoin.png"
import ethereum from "../assets/img/logo/ethereum.png"
import steem from "../assets/img/logo/steem.png"
import tokenbox from "../assets/img/logo/tokenbox.png"
import sprite from "../assets/img/sprite.svg"
import ethe from "../assets/img/ethe.png"

const Pool = () => {
    return (
        <div  classNameName="Home">
            <div class="page">
                
                <div class="page__content">
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
                                    <path
                                        d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"
                                    ></path>
                                    <circle cx="16" cy="12" r="1.5"></circle>
                                </svg>
                                Conect Wallet
                            </button>
                        </div>
                    </div>
                    <main>
                        <div class="header">
                            <div class="flex flex-col w-full">
                        
                                <div class="bg-gray-900 pl-9 pr-9 pb-9 pt-9 w-full flex align-items" style={{ background: "#191b20" }}>
                                    <h1 class="main-h1">Crypto Pools</h1>
                                    <div class="ml-auto p-5 bg-gray-800 w-3/12">
                                        <h5 class="font-extrabold">Auto CAKE Bountry</h5>
                                        <div class="mt-7 flex">
                                            <div class="">
                                                <div class="text-gray-200 font-extrabold text-lg">
                                                    0.999
                                                </div>
                                                <div class="mt-1 text-gray-400">
                                                    0.78 USD
                                                </div>
                                            </div>
                                            <div class="ml-auto w-3/12">
                                                <a class="whitespace-nowrap inline-flex rounded-md bg-white py-2 px-3 text-xs font-semibold uppercase text-blue-500 hover:bg-opacity-90" href="/docs/just-in-time-mode">Claim</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-1">
                                    <section class="text-gray-600 body-font">
                                        <div class="container px-5 py-5 mx-auto flex items-center md:flex-row flex-col">
                                            <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                                                <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                                                <h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
                                            </div>
                                            <div class="flex w-1/4 sm:flex-row flex-col ml-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                                                <div class="relative flex-grow w-full">
                                                    <div>
                                                        <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
                                                        <select id="location" name="location" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                                            <option>USA</option>
                                                            <option selected="">Canada</option>
                                                            <option>EU</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="relative flex-grow w-full">
                                                    <label for="text" class="leading-7 text-sm text-gray-200 font-bold">Buscar</label>
                                                    <input
                                                        type="text"
                                                        id="text"
                                                        name="text"
                                                        class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div class="pb-4 w-full">
                                    <div class="grid grid-cols-3 gap-4">
                                        <div class="" style={{ background: "#191b20" }}>
                                            <div class="pl-1 pr-1 pb-1 pt-1">
                                                <div class="p3 bg-gray-300 pl-4 pr-4 pb-4 pt-4 flex items-center" style={{ background: "#191b206e", borderBottom: "1px solid #232323" }}>
                                                    <div class="">
                                                        <h2 class="font-bold text-2xl">Auto Crypto</h2>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none font-bold hover:bg-indigo-600 rounded text-md">Unlock Wallet</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex w-full flex-col pl-4 pr-4 pb-4 pt-4">
                                                <div class="flex w-full">
                                                    <div class="">
                                                        APR:
                                                    </div>
                                                    <div class="ml-auto font-bold">
                                                        72.12%
                                                    </div>
                                                </div>
                                                <div class="w- mt-3">
                                                    <h2 class="font-bold text-mg">Coin Earn</h2>
                                                </div>
                                                <div class="flex">
                                                    <div class="flex flex-wrap justify-center">
                                                        <div class="w-6/12 sm:w-4/12 px-4"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pl-1 pr-1 pb-1 pt-1">
                                                <div class="p3 bg-gray-300 pl-4 pr-4 pb-4 pt-4 flex items-center" style={{ background: "#191b206e", borderTop: "1px solid #232323" }}>
                                                    <div class="">
                                                        <h2 class="font-bold text-mg">Auto Crypto</h2>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <img src="https://proteodefi.com/wp-content/uploads/2021/06/proteo9-1.png" class="border-0 w-5" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="" style={{ background: "#191b20" }}>
                                            <div class="pl-1 pr-1 pb-1 pt-1">
                                                <div class="p3 bg-gray-300 pl-4 pr-4 pb-4 pt-4 flex items-center" style={{ background: "#191b206e", borderBottom: "1px solid #232323" }}>
                                                    <div class="">
                                                        <h2 class="font-bold text-2xl">Auto Crypto</h2>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none font-bold hover:bg-indigo-600 rounded text-md">Unlock Wallet</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex w-full flex-col pl-4 pr-4 pb-4 pt-4">
                                                <div class="flex w-full">
                                                    <div class="">
                                                        APR:
                                                    </div>
                                                    <div class="ml-auto font-bold">
                                                        72.12%
                                                    </div>
                                                </div>
                                                <div class="w- mt-3">
                                                    <h2 class="font-bold text-mg">Coin Earn</h2>
                                                </div>
                                                <div class="flex">
                                                    <div class="flex flex-wrap justify-center">
                                                        <div class="w-6/12 sm:w-4/12 px-4"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pl-1 pr-1 pb-1 pt-1">
                                                <div class="p3 bg-gray-300 pl-4 pr-4 pb-4 pt-4 flex items-center" style={{ background: "#191b206e", borderTop: "1px solid #232323" }}>
                                                    <div class="">
                                                        <h2 class="font-bold text-mg">Auto Crypto</h2>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <img src="https://proteodefi.com/wp-content/uploads/2021/06/proteo9-1.png" class="border-0 w-5" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="" style={{ background: "#191b20" }}>
                                            <div class="pl-1 pr-1 pb-1 pt-1">
                                                <div class="p3 bg-gray-300 pl-4 pr-4 pb-4 pt-4 flex items-center" style={{background: "#191b206e", borderBottom: "1px solid #232323" }}>
                                                    <div class="">
                                                        <h2 class="font-bold text-2xl">Auto Crypto</h2>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none font-bold hover:bg-indigo-600 rounded text-md">Unlock Wallet</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex w-full flex-col pl-4 pr-4 pb-4 pt-4">
                                                <div class="flex w-full">
                                                    <div class="">
                                                        APR:
                                                    </div>
                                                    <div class="ml-auto font-bold">
                                                        72.12%
                                                    </div>
                                                </div>
                                                <div class="w- mt-3">
                                                    <h2 class="font-bold text-mg">Coin Earn</h2>
                                                </div>
                                                <div class="flex">
                                                    <div class="flex flex-wrap justify-center">
                                                        <div class="w-6/12 sm:w-4/12 px-4"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pl-1 pr-1 pb-1 pt-1">
                                                <div class="p3 bg-gray-300 pl-4 pr-4 pb-4 pt-4 flex items-center" style={{ background: "#191b206e", borderTop: "1px solid #232323" }}>
                                                    <div class="">
                                                        <h2 class="font-bold text-mg">Auto Crypto</h2>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <img src="https://proteodefi.com/wp-content/uploads/2021/06/proteo9-1.png" class="border-0 w-5" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="" style={{ background: "#191b20" }}>
                                            <div class="pl-1 pr-1 pb-1 pt-1">
                                                <div class="p3 bg-gray-300 pl-4 pr-4 pb-4 pt-4 flex items-center" style={{ background: "#191b206e",  borderBottom: "1px solid #232323" }}>
                                                    <div class="">
                                                        <h2 class="font-bold text-2xl">Auto Crypto</h2>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none font-bold hover:bg-indigo-600 rounded text-md">Unlock Wallet</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex w-full flex-col pl-4 pr-4 pb-4 pt-4">
                                                <div class="flex w-full">
                                                    <div class="">
                                                        APR:
                                                    </div>
                                                    <div class="ml-auto font-bold">
                                                        72.12%
                                                    </div>
                                                </div>
                                                <div class="w- mt-3">
                                                    <h2 class="font-bold text-mg">Coin Earn</h2>
                                                </div>
                                                <div class="flex">
                                                    <div class="flex flex-wrap justify-center">
                                                        <div class="w-6/12 sm:w-4/12 px-4"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pl-1 pr-1 pb-1 pt-1">
                                                <div class="p3 bg-gray-300 pl-4 pr-4 pb-4 pt-4 flex items-center" style={{ background: "#191b206e", borderTop: "1px solid #232323" }}>
                                                    <div class="">
                                                        <h2 class="font-bold text-mg">Auto Crypto</h2>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <img src="https://proteodefi.com/wp-content/uploads/2021/06/proteo9-1.png" class="border-0 w-5" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="" style={{ background: "#191b20" }}>
                                            <div class="pl-1 pr-1 pb-1 pt-1">
                                                <div class="p3 bg-gray-300 pl-4 pr-4 pb-4 pt-4 flex items-center" style={{ background: "#191b206e", borderBottom: "1px solid #232323" }}>
                                                    <div class="">
                                                        <h2 class="font-bold text-2xl">Auto Crypto</h2>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none font-bold hover:bg-indigo-600 rounded text-md">Unlock Wallet</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex w-full flex-col pl-4 pr-4 pb-4 pt-4">
                                                <div class="flex w-full">
                                                    <div class="">
                                                        APR:
                                                    </div>
                                                    <div class="ml-auto font-bold">
                                                        72.12%
                                                    </div>
                                                </div>
                                                <div class="w- mt-3">
                                                    <h2 class="font-bold text-mg">Coin Earn</h2>
                                                </div>
                                                <div class="flex">
                                                    <div class="flex flex-wrap justify-center">
                                                        <div class="w-6/12 sm:w-4/12 px-4"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pl-1 pr-1 pb-1 pt-1">
                                                <div class="p3 bg-gray-300 pl-4 pr-4 pb-4 pt-4 flex items-center" style={{background:  "#191b206e", borderTop: "1px solid #232323" }}>
                                                    <div class="">
                                                        <h2 class="font-bold text-mg">Auto Crypto</h2>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <img src="https://proteodefi.com/wp-content/uploads/2021/06/proteo9-1.png" class="border-0 w-5" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="" style={{ background: "#191b20" }}>
                                            <div class="pl-1 pr-1 pb-1 pt-1">
                                                <div class="p3 bg-gray-300 pl-4 pr-4 pb-4 pt-4 flex items-center" style={{background:  "#191b206e", borderTop: "1px solid #232323" }}>
                                                    <div class="">
                                                        <h2 class="font-bold text-2xl">Auto Crypto</h2>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none font-bold hover:bg-indigo-600 rounded text-md">Unlock Wallet</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex w-full flex-col pl-4 pr-4 pb-4 pt-4">
                                                <div class="flex w-full">
                                                    <div class="">
                                                        APR:
                                                    </div>
                                                    <div class="ml-auto font-bold">
                                                        72.12%
                                                    </div>
                                                </div>
                                                <div class="w- mt-3">
                                                    <h2 class="font-bold text-mg">Coin Earn</h2>
                                                </div>
                                                <div class="flex">
                                                    <div class="flex flex-wrap justify-center">
                                                        <div class="w-6/12 sm:w-4/12 px-4"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pl-1 pr-1 pb-1 pt-1">
                                                <div class="p3 bg-gray-300 pl-4 pr-4 pb-4 pt-4 flex items-center" style={{background:  "#191b206e", borderTop: "1px solid #232323" }}>
                                                    <div class="">
                                                        <h2 class="font-bold text-mg">Auto Crypto</h2>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <img src="https://proteodefi.com/wp-content/uploads/2021/06/proteo9-1.png" class="border-0 w-5" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="" style={{ background: "#191b20" }}>
                                            <div class="pl-1 pr-1 pb-1 pt-1">
                                                <div class="p3 bg-gray-300 pl-4 pr-4 pb-4 pt-4 flex items-center" style={{background:  "#191b206e", borderTop: "1px solid #232323" }}>
                                                    <div class="">
                                                        <h2 class="font-bold text-2xl">Auto Crypto</h2>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none font-bold hover:bg-indigo-600 rounded text-md">Unlock Wallet</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex w-full flex-col pl-4 pr-4 pb-4 pt-4">
                                                <div class="flex w-full">
                                                    <div class="">
                                                        APR:
                                                    </div>
                                                    <div class="ml-auto font-bold">
                                                        72.12%
                                                    </div>
                                                </div>
                                                <div class="w- mt-3">
                                                    <h2 class="font-bold text-mg">Coin Earn</h2>
                                                </div>
                                                <div class="flex">
                                                    <div class="flex flex-wrap justify-center">
                                                        <div class="w-6/12 sm:w-4/12 px-4"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pl-1 pr-1 pb-1 pt-1">
                                                <div class="p3 bg-gray-300 pl-4 pr-4 pb-4 pt-4 flex items-center" style= {{ background: "#191b206e", borderTop: "1px solid #232323" }}>
                                                    <div class="">
                                                        <h2 class="font-bold text-mg">Auto Crypto</h2>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <img src="https://proteodefi.com/wp-content/uploads/2021/06/proteo9-1.png" class="border-0 w-5" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="" style={{ background: "#191b20" }}>
                                            <div class="pl-1 pr-1 pb-1 pt-1">
                                                <div class="p3 bg-gray-300 pl-4 pr-4 pb-4 pt-4 flex items-center" style={{background:  "#191b206e", borderTop: "1px solid #232323" }}>
                                                    <div class="">
                                                        <h2 class="font-bold text-2xl">Auto Crypto</h2>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none font-bold hover:bg-indigo-600 rounded text-md">Unlock Wallet</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex w-full flex-col pl-4 pr-4 pb-4 pt-4">
                                                <div class="flex w-full">
                                                    <div class="">
                                                        APR:
                                                    </div>
                                                    <div class="ml-auto font-bold">
                                                        72.12%
                                                    </div>
                                                </div>
                                                <div class="w- mt-3">
                                                    <h2 class="font-bold text-mg">Coin Earn</h2>
                                                </div>
                                                <div class="flex">
                                                    <div class="flex flex-wrap justify-center">
                                                        <div class="w-6/12 sm:w-4/12 px-4"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pl-1 pr-1 pb-1 pt-1">
                                                <div class="p3 bg-gray-300 pl-4 pr-4 pb-4 pt-4 flex items-center" style= {{ background: "#191b206e",  borderTop: "1px solid #232323" }}>
                                                    <div class="">
                                                        <h2 class="font-bold text-mg">Auto Crypto</h2>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <img src="https://proteodefi.com/wp-content/uploads/2021/06/proteo9-1.png" class="border-0 w-5" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="" style={{ background: "#191b20" }}>
                                            <div class="pl-1 pr-1 pb-1 pt-1">
                                                <div class="p3 bg-gray-300 pl-4 pr-4 pb-4 pt-4 flex items-center" style={{background:  "#191b206e", borderTop: "1px solid #232323" }}>
                                                    <div class="">
                                                        <h2 class="font-bold text-2xl">Auto Crypto</h2>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none font-bold hover:bg-indigo-600 rounded text-md">Unlock Wallet</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex w-full flex-col pl-4 pr-4 pb-4 pt-4">
                                                <div class="flex w-full">
                                                    <div class="">
                                                        APR:
                                                    </div>
                                                    <div class="ml-auto font-bold">
                                                        72.12%
                                                    </div>
                                                </div>
                                                <div class="w- mt-3">
                                                    <h2 class="font-bold text-mg">Coin Earn</h2>
                                                </div>
                                                <div class="flex">
                                                    <div class="flex flex-wrap justify-center">
                                                        <div class="w-6/12 sm:w-4/12 px-4"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pl-1 pr-1 pb-1 pt-1">
                                                <div class="p3 bg-gray-300 pl-4 pr-4 pb-4 pt-4 flex items-center" style={{ background: "#191b206e", borderTop: "1px solid #232323" }} >
                                                    <div class="">
                                                        <h2 class="font-bold text-mg">Auto Crypto</h2>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <img src="https://proteodefi.com/wp-content/uploads/2021/06/proteo9-1.png" class="border-0 w-5" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

        </div>
    
    )

}
export default Pool