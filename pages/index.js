import Head from 'next/head'
import Script from 'next/script'
import Navbar from './components/Navbar'

export default function Home() {
    return (
    <>
      <Head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title> |Pin Trash</title>
    <Script defer src="assets/js/alpine.min.js"></Script>
</Head>

<Navbar/>
{/* ====== Navbar Section End */}





{/* ====== Hero Section Start */}
<div className="relative bg-white pt-[80px] pb-[110px] lg:pt-[120px]">
  <div className="container">
    <div className="-mx-5 flex flex-wrap">
      <div className="w-full px-4 lg:w-5/12">
        <div className="hero-content pt-2">
          <h1 className="mb-3 text-xl font-bold leading-snug text-dark text-center md:text-start lg:text-[50px] xl:text-[50px] text-[35px]">
            Help Keep <br /> the Public Lands<br />Clean </h1>
          <p className="mb-8 max-w-[480px] text-base text-body-color text-center text-[20px]">
            Download the App.
          </p>
          <div className="-mx-3 flex flex-wrap justify-center">
            <div className="px-3">
              <button className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-black rounded-md hover\:bg-opacity-90 focus:outline-none focus\:ring-2 focus:ring-black focus:ring-opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" height={30} width={30} id="svg60" version="1.1" viewBox="-4.12599 -7.65905 35.75858 45.9543"><defs id="defs38"><linearGradient gradientUnits="userSpaceOnUse" y2="21.86" x2="-5.9" y1="1.87" x1="14.09" id="linear-gradient"><stop id="stop4" stopColor="#008eff" offset={0} /><stop id="stop6" stopColor="#008fff" offset=".01" /><stop id="stop8" stopColor="#00acff" offset=".26" /><stop id="stop10" stopColor="#00c0ff" offset=".51" /><stop id="stop12" stopColor="#00cdff" offset=".76" /><stop id="stop14" stopColor="#00d1ff" offset={1} /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="15.32" x2="-2.37" y1="15.32" x1="26.45" id="linear-gradient-2"><stop id="stop17" stopColor="#ffd800" offset={0} /><stop id="stop19" stopColor="#ff8a00" offset={1} /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="45.15" x2="-9.41" y1="18.05" x1="17.69" id="linear-gradient-3"><stop id="stop22" stopColor="#ff3a44" offset={0} /><stop id="stop24" stopColor="#b11162" offset={1} /></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="3.81" x2="8.92" y1="-8.29" x1="-3.19" id="linear-gradient-4"><stop id="stop27" stopColor="#328e71" offset={0} /><stop id="stop29" stopColor="#2d9571" offset=".07" /><stop id="stop31" stopColor="#15bd74" offset=".48" /><stop id="stop33" stopColor="#06d575" offset=".8" /><stop id="stop35" stopColor="#00de76" offset={1} /></linearGradient><style id="style2" dangerouslySetInnerHTML={{__html: ".cls-7{opacity:.07}" }} /></defs><g transform="translate(.004)" id="g58"><g id="g56"><path id="path40" d="M.55.48A2.39 2.39 0 000 2.15v26.34a2.41 2.41 0 00.55 1.67l.09.09 14.75-14.76v-.35L.64.39z" fill="url(#linear-gradient)" /><path id="path42" d="M20.31 20.41l-4.92-4.92v-.35l4.92-4.91.11.06 5.83 3.31c1.67.94 1.67 2.49 0 3.44l-5.83 3.31z" fill="url(#linear-gradient-2)" /><path id="path44" d="M20.42 20.35l-5-5L.55 30.16a2 2 0 002.45.07l17.39-9.88" fill="url(#linear-gradient-3)" /><path id="path46" d="M20.42 10.29L3 .4A1.93 1.93 0 00.55.48l14.84 14.84z" fill="url(#linear-gradient-4)" /><path id="path48" d="M20.31 20.24L3 30.06a2 2 0 01-2.39 0l-.09.09.09.09a2 2 0 002.39 0l17.39-9.88z" opacity=".1" /><path id="path50" d="M.55 30A2.43 2.43 0 010 28.32v.17a2.41 2.41 0 00.55 1.67l.09-.09z" className="cls-7" /><path id="path52" d="M26.25 16.86l-5.94 3.38.11.11L26.25 17a2.11 2.11 0 001.25-1.72 2.21 2.21 0 01-1.25 1.58z" className="cls-7" /><path id="path54" d="M3 .58l23.25 13.19a2.2 2.2 0 011.25 1.55 2.09 2.09 0 00-1.25-1.72L3 .4C1.36-.54 0 .24 0 2.15v.17C0 .42 1.36-.37 3 .58z" fill="#fff" opacity=".3" /></g></g></svg>
                <span className="mx-1">PlayStore</span>
              </button>
            </div>
            <div className="w-1/2 px-3">
              <button className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-primary rounded-md hover\:bg-opacity-90 focus:outline-none focus\:ring-2 focus:ring-primary focus:ring-opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" height={30} width={30} viewBox="-120.015 -200 1040.13 1200"><linearGradient y2={800} x2={400} y1={0} x1={400} gradientUnits="userSpaceOnUse" id="a"><stop offset={0} stopColor="#0ed4fc" /><stop offset={1} stopColor="#0c57ef" /></linearGradient><path d="M638.4 0H161.6C72.3 0 0 72.3 0 161.6v476.9C0 727.7 72.3 800 161.6 800h476.9c89.2 0 161.6-72.3 161.6-161.6V161.6C800 72.3 727.7 0 638.4 0z" fill="url(#a)" /><path d="M396.6 183.8l16.2-28c10-17.5 32.3-23.4 49.8-13.4 17.5 10 23.4 32.3 13.4 49.8L319.9 462.4h112.9c36.6 0 57.1 43 41.2 72.8H143c-20.2 0-36.4-16.2-36.4-36.4s16.2-36.4 36.4-36.4h92.8l118.8-205.9-37.1-64.4c-10-17.5-4.1-39.6 13.4-49.8 17.5-10 39.6-4.1 49.8 13.4zM256.2 572.7l-35 60.7c-10 17.5-32.3 23.4-49.8 13.4-17.5-10-23.4-32.3-13.4-49.8l26-45c29.4-9.1 53.3-2.1 72.2 20.7zm301.4-110.1h94.7c20.2 0 36.4 16.2 36.4 36.4s-16.2 36.4-36.4 36.4h-52.6l35.5 61.6c10 17.5 4.1 39.6-13.4 49.8-17.5 10-39.6 4.1-49.8-13.4-59.8-103.7-104.7-181.3-134.5-233-30.5-52.6-8.7-105.4 12.8-123.3 23.9 41 59.6 102.9 107.3 185.5z" fill="#fff" /></svg>
                <span className="mx-1">AppStore</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden px-4 lg:block lg:w-1/12" />
      <div className="w-full px-4 lg:w-6/12">
        <div className="lg:ml-auto lg:text-right">
          <div className="relative z-10 inline-block pt-11 lg:pt-0">
            <img src="/assets/phone.png" alt="hero" className="max-w-full lg:ml-auto md:w-[350px] w-[300px] mx-[25px]"/>
            <span className="absolute -left-8 -bottom-8 z-[-1]">
              <svg width={93} height={93} viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<section className="dark:bg-gray-900" style={{"background-color":"#fcd34d"}}>
  <div className="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
    <h2 className="text-3xl font-bold tracking-tight xl:text-4xl text-dark sm:text-center ">
      Donate to help our cause
    </h2>
    <div className="mt-8 lg:mt-0">
      <div className="flex space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2 justify-center">
      <button className="px-4 py-2 text-sm font-medium tracking-wide text-primary capitalize transition-colors duration-200 transform bg-white rounded-md sm:mx-2 focus:outline-none focus:bg-black focus:text-white" >
          DONATE
        </button>
      </div>
    </div>
  </div>
</section>



<div className="flex flex-wrap pt-20">
  <div className="w-full px-4 md:w-1/2 lg:w-1/3">
    <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
      <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
        <img src="/assets/icons8-download-48.png" alt="download" />
      </div>
      <h4 className="mb-3 text-xl font-semibold text-dark">
        Download the App
      </h4>
      <p className="text-body-color">
        Get the app on PlayStore for Android and App Store for IOS
      </p>
    </div>
  </div>
  <div className="w-full px-4 md:w-1/2 lg:w-1/3">
    <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
      <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
        <img src="/assets/icons8-location-48.png" alt="pin" />
      </div>
      <h4 className="mb-3 text-xl font-semibold text-dark">
        Pin the Trash
      </h4>
      <p className="text-body-color">
        Just a tap on a Button will take your trash away
      </p>
    </div>
  </div>
  <div className="w-full px-4 md:w-1/2 lg:w-1/3">
    <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
      <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
        <img src="/assets/icons8-easy-48.png" alt="easy" />
      </div>
      <h4 className="mb-3 text-xl font-semibold text-dark">
        Easy To Use
      </h4>
      <p className="text-body-color">
        It is very easy to control
      </p>
    </div>
  </div>
</div>



<div className="container px-6 py-16 mx-auto">
  <div className="items-center lg:flex">
    <div className="w-full lg:w-1/2">
      <div className="lg:max-w-lg">
        <h1 className="text-4xl font-bold leading-tight md:text-[50px] text-center">Pin the Trash <span className="text-body-color">in Minutes</span></h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-[16px] md:text-[20px] text-center">Download the App, Pin the Trash, Help keep the Public Lands clean</p>
      </div>
      <div className="-mx-3 flex flex-wrap justify-center">
        <div className='w-1/2 md:w-[auto]'>
          <button className="block w-full ">
            <img src="/assets/appstore.jpg " alt="appstore" style={{"width":"200px"}} />
          </button>
        </div>
        <div className="w-1/2 py-10">
          <button className="block w-full ">
            <img src="/assets/playstor.png " alt="playstore" style={{"width":"170px"}} />
          </button>
        </div>
      </div>

    </div>
    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 ">
      <iframe className=" border rounded-[8px] shadow " width={1000 } height={500 } src="https://www.youtube.com/embed/sIQZjqipyX0 " title="YouTube video player " frameBorder={0 } allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture " allowFullScreen />
    </div>
  </div>
</div>

  


  {/* ====== Footer Section Start */}
<footer className="relative z-10 bg-white pt-20 pb-10 lg:pt-[120px] lg:pb-20px ">
  <div className="container ">
    <div className=" -mx-4 flex flex-wrap ">
      <div className="w-full px-4 sm:w-2/3 lg:w-3/12 ">
        <div className="mb-10 w-full ">
          <a href="javascript:void(0) " className="mb-6 inline-block max-w-[160px] ">
            <img src="assets/Pin Trash.png " alt="logo " className="max-w-full " />
          </a>
        </div>
      </div>
      <div className="w-full px-4 sm:w-1/2 lg:w-4/12 ">
        <div className="mb-10 w-full ">
          <h4 className="mb-9 text-lg font-semibold text-dark ">Quick Links</h4>
          <ul>
            <li>
              <a href="#" className="mb-2 inline-block text-base leading-loose text-body-color hover:text-primary ">
                About                  </a>
            </li>
            <li>
              <a href="#" className="mb-2 inline-block text-base leading-loose text-body-color hover:text-primary ">
                Privacy Policy                  </a>
            </li>
            <li>
              <a href="#" className="mb-2 inline-block text-base leading-loose text-body-color hover:text-primary ">
                Terms and Conditions                  </a>
            </li>
            <div className="-mx-3 flex flex-wrap ">
              <div className="w-1/2 px-3">
                <button className="block w-full ">
                  <img src="/assets/appstore.jpg " alt=" " style={{"width":"200px"}} />
                </button>
              </div>
              <div className="w-1/2 py-10 pr-16">
                <button className="block w-full ">
                  <img src="/assets/playstor.png " alt=" " style={{"width":"170px"}} />
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="w-full px-4 sm:w-1/2 lg:w-3/12 ">
        <div className="mb-10 w-full ">
          <h4 className="mb-9 text-lg font-semibold text-dark ">Follow Us On</h4>
          <div className="mb-6 flex items-center ">
            <a href="https://www.facebook.com/Pinthetrash-103513239016235 " className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4
                  lg:mr-3 xl:mr-4 ">
              <svg width={8 } height={16 } viewBox="0 0 8 16 " className="fill-current ">
                <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819
                  6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783
                  15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z " />
              </svg>
            </a><a href="https://www.youtube.com/watch?v=sIQZjqipyX0 " className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4
                  lg:mr-3 xl:mr-4 ">
              <svg width={16 } height={12 } viewBox="0 0 16 12 " className="fill-current ">
                <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484
                  10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548
                  6L6.4 8.57143Z " />
              </svg>
            </a>
            <a href="https://www.instagram.com/pinthetrash/?hl=en " className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4
                  lg:mr-3 xl:mr-4 ">
              <svg xmlns="http://www.w3.org/2000/svg " width={16 } height={16 } fill="currentColor " className="bi bi-instagram " viewBox="0 0 16 16 ">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174
                  1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99
                  10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007
                  3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478
                  2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034
                  1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z " />
              </svg>
            </a>
          </div>
          <p className="text-base text-body-color ">© 2022 Pin Trash</p>
        </div>
      </div>
    </div>
  </div>
  <div>
    <span className="absolute left-0 bottom-0 z-[-1] ">
      <svg width={217 } height={229 } viewBox="0 0 217 229 " fill="none " xmlns="http://www.w3.org/2000/svg ">
        <path d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z " fill="url(#paint0_linear_1179_5) " />
        <defs>
          <linearGradient id="paint0_linear_1179_5 " x1="76.5 " y1={281 } x2="76.5 " y2="1.22829e-05 " gradientUnits="userSpaceOnUse ">
            <stop stopColor="#3056D3 " stopOpacity="0.08 " />
            <stop offset={1 } stopColor="#C4C4C4 " stopOpacity={0 } />
          </linearGradient>
        </defs>
      </svg>
    </span>
    <span className="absolute top-10 right-10 z-[-1] ">
      <svg width={75 } height={75 } viewBox="0 0 75 75 " fill="none " xmlns="http://www.w3.org/2000/svg ">
        <path d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z " fill="url(#paint0_linear_1179_4) " />
        <defs>
          <linearGradient id="paint0_linear_1179_4 " x1="-1.63917e-06 " y1="37.5 " x2={75 } y2="37.5 " gradientUnits="userSpaceOnUse ">
            <stop stopColor="#13C296 " stopOpacity="0.31 " />
            <stop offset={1 } stopColor="#C4C4C4 " stopOpacity={0 } />
          </linearGradient>
        </defs>
      </svg>
    </span>
  </div>
</footer>
{/* ====== Footer Section End */}
    </>
    )
}