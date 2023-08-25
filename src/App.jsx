/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import "./App.css";

import underBar from "./assets/pikkopay_underBar.webp";
import paygreenPayment from "./services/paygreen";
import { Loading } from "./components/Loading";


function App() {

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true)
  };

  useEffect(() => {
    paygreenPayment();
  }, []);

  return (
    <main className="relative text-[#000] overflow-hidden h-[100vh]">

      {/* CERCLE DE FOND */}
      <div className="circle-1 absolute -right-20 -top-12 -z-10 w-[150px] h-[150px] rounded-full bg-red-800"></div>
      <div className="circle-2 absolute -left-20 -bottom-[100px] -z-10 w-[250px] h-[250px] rounded-full bg-red-500"></div>
      <div className="circle-3 absolute -right-20 top-[18rem] -z-10 w-[190px] h-[190px] rounded-full bg-red-800"></div>
      <div className="circle-4 absolute right-[20px] bottom-[10px] -z-10 w-[100px] h-[100px] rounded-full bg-red-800"></div>
      <div className="circle-5 absolute translate-y-[15rem] translate-x-[6rem] -z-10 w-[70px] h-[70px] rounded-full bg-red-800"></div>
      {/* CERCLE DE FOND */}
      
      <div>
        <h2 className="font-bold text-2xl">Payez en ligne</h2>
        <img
          src={underBar}
          alt="pikkopay_UnderBar"
          className="absolute h-3 -translate-y-2 -z-10"
        />
      </div>

    {/* CARD-LIST ICON */}
      <div className="inline-flex gap-2">
        <span>
          <svg
            className="cursor-pointer hover:-translate-y-1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="60"
            height="100"
            viewBox="0 0 48 48"
          >
            <path
              fill="#ff9800"
              d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
            ></path>
            <path
              fill="#d50000"
              d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
            ></path>
            <path
              fill="#ff3d00"
              d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
            ></path>
          </svg>{" "}
        </span>

        <span>
          <svg
            className="cursor-pointer hover:-translate-y-1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="60"
            height="100"
            viewBox="0 0 48 48"
          >
            <path
              fill="#1565C0"
              d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
            ></path>
            <path
              fill="#FFF"
              d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"
            ></path>
            <path
              fill="#FFC107"
              d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"
            ></path>
          </svg>
        </span>

        <span>
          <svg
            className="cursor-pointer hover:-translate-y-1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="60"
            height="100"
            viewBox="0 0 48 48"
          >
            <path
              fill="#1976D2"
              d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
            ></path>
            <path
              fill="#FFF"
              d="M22.255 20l-2.113 4.683L18.039 20h-2.695v6.726L12.341 20h-2.274L7 26.981h1.815l.671-1.558h3.432l.682 1.558h3.465v-5.185l2.299 5.185h1.563l2.351-5.095v5.095H25V20H22.255zM10.135 23.915l1.026-2.44 1.066 2.44H10.135zM37.883 23.413L41 20.018h-2.217l-1.994 2.164L34.86 20H28v6.982h6.635l2.092-2.311L38.767 27h2.21L37.883 23.413zM33.728 25.516h-4.011v-1.381h3.838v-1.323h-3.838v-1.308l4.234.012 1.693 1.897L33.728 25.516z"
            ></path>
          </svg>
        </span>

        <span>
          <svg
            className="cursor-pointer hover:-translate-y-1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="60"
            height="100"
            viewBox="0 0 48 48"
          >
            <path
              fill="#E1E7EA"
              d="M45,35c0,2.2-1.8,4-4,4H7c-2.2,0-4-1.8-4-4V13c0-2.2,1.8-4,4-4h34c2.2,0,4,1.8,4,4V35z"
            ></path>
            <path
              fill="#FF6D00"
              d="M45,35c0,2.2-1.8,4-4,4H16c0,0,23.6-3.8,29-15V35z M22,24c0,1.7,1.3,3,3,3s3-1.3,3-3c0-1.7-1.3-3-3-3S22,22.3,22,24z"
            ></path>
            <path d="M11.2,21h1.1v6h-1.1V21z M17.2,24c0,1.7,1.3,3,3,3c0.5,0,0.9-0.1,1.4-0.3v-1.3c-0.4,0.4-0.8,0.6-1.4,0.6c-1.1,0-1.9-0.8-1.9-2c0-1.1,0.8-2,1.9-2c0.5,0,0.9,0.2,1.4,0.6v-1.3c-0.5-0.2-0.9-0.4-1.4-0.4C18.5,21,17.2,22.4,17.2,24z M30.6,24.9L29,21h-1.2l2.5,6h0.6l2.5-6h-1.2L30.6,24.9z M33.9,27h3.2v-1H35v-1.6h2v-1h-2V22h2.1v-1h-3.2V27z M41.5,22.8c0-1.1-0.7-1.8-2-1.8h-1.7v6h1.1v-2.4h0.1l1.6,2.4H42l-1.8-2.5C41,24.3,41.5,23.7,41.5,22.8z M39.2,23.8h-0.3v-1.8h0.3c0.7,0,1.1,0.3,1.1,0.9C40.3,23.4,40,23.8,39.2,23.8z M7.7,21H6v6h1.6c2.5,0,3.1-2.1,3.1-3C10.8,22.2,9.5,21,7.7,21z M7.4,26H7.1v-4h0.4c1.5,0,2.1,1,2.1,2C9.6,24.4,9.5,26,7.4,26z M15.3,23.3c-0.7-0.3-0.9-0.4-0.9-0.7c0-0.4,0.4-0.6,0.8-0.6c0.3,0,0.6,0.1,0.9,0.5l0.6-0.8C16.2,21.2,15.7,21,15,21c-1,0-1.8,0.7-1.8,1.7c0,0.8,0.4,1.2,1.4,1.6c0.6,0.2,1.1,0.4,1.1,0.9c0,0.5-0.4,0.8-0.9,0.8c-0.5,0-1-0.3-1.2-0.8l-0.7,0.7c0.5,0.8,1.1,1.1,2,1.1c1.2,0,2-0.8,2-1.9C16.9,24.2,16.5,23.8,15.3,23.3z"></path>
          </svg>
        </span>

        <span>
          <svg
            className="cursor-pointer hover:-translate-y-1"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="100"
            viewBox="0 0 576 512"
          >
            <path d="M431.5 244.3V212c41.2 0 38.5.2 38.5.2 7.3 1.3 13.3 7.3 13.3 16 0 8.8-6 14.5-13.3 15.8-1.2.4-3.3.3-38.5.3zm42.8 20.2c-2.8-.7-3.3-.5-42.8-.5v35c39.6 0 40 .2 42.8-.5 7.5-1.5 13.5-8 13.5-17 0-8.7-6-15.5-13.5-17zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM182 192.3h-57c0 67.1 10.7 109.7-35.8 109.7-19.5 0-38.8-5.7-57.2-14.8v28c30 8.3 68 8.3 68 8.3 97.9 0 82-47.7 82-131.2zm178.5 4.5c-63.4-16-165-14.9-165 59.3 0 77.1 108.2 73.6 165 59.2V287C312.9 311.7 253 309 253 256s59.8-55.6 107.5-31.2v-28zM544 286.5c0-18.5-16.5-30.5-38-32v-.8c19.5-2.7 30.3-15.5 30.3-30.2 0-19-15.7-30-37-31 0 0 6.3-.3-120.3-.3v127.5h122.7c24.3.1 42.3-12.9 42.3-33.2z" />
          </svg>
        </span>

      </div>
    {/* CARD-LIST ICON */}

      {/* PAYMENT CONTAINER */}
      <div id="paygreen-container"></div>
      <div id="paygreen-methods-container"></div>

      <div id="pay-form ">
        <div>
          <label>Numéro de carte</label>
          <div id="paygreen-pan-frame"></div>
        </div>

        <div className="line mt-7">
          <div>
            <label>Expiration</label>
            <div id="paygreen-exp-frame"></div>
          </div>

          <div className="paygreen-cvv-container">
            <label>CVV </label>
            <div id="paygreen-cvv-frame"></div>
            <i data-feather="help-circle"></i>
          </div>

        </div>

        <button
          id="payButton"
          className="button inline-flex justify-center items-center mt-10 mb-3 gap-2 "
          onClick={handleClick}
          disabled={isLoading}
        > 
        {/* <div className="button-loader"></div>  à utiliser à la place du composant Loading, si celui si doit être sur le button de payment */}
        {isLoading ? 
         
          <Loading/>

          :
       
         <><svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
          </svg>
          Payer <strong>240.21 €</strong> 
          </>
        }
        </button>

        <div className="icon-sentence relative">
          <img
            src={underBar}
            alt="pikkopay_UnderBar"
            className="absolute  w-20  translate-y-10 -z-10"
          />

          <label className="secured-label items-center">
            {" "}
            Payment secured and powered by <strong className="ml-1 inline-flex items-center">Paygreen <svg  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg></strong>
          </label>
        </div>

      </div>
      {/* PAYMENT CONTAINER */}

    </main>
  );
}

export default App;
