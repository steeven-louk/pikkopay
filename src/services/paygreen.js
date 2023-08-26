/* eslint-disable no-undef */
// /* eslint-disable no-undef */
const paygreenPayment =()=>{

const shopId ="sh_69b974d635c34df18c807baed0794836";
const publicKey = "pk_6d92047e838d4870b74857ba47e2eebd";

const initPGJS = () => {
    paygreenjs.attachEventListener(
      paygreenjs.Events.CVV_FIELD_FULFILLED,
      () => {
        paygreenjs.focus("exp");
      }
    );
    paygreenjs.attachEventListener(
      paygreenjs.Events.PAN_FIELD_FULFILLED,
      () => {
        console.log("pan fullfilled");
        paygreenjs.focus("cvv");
      }
    );

    paygreenjs.init({
      mode: "instrument",
      modeOptions: {
        shopId: shopId,
      },
     
      paymentMethod: "conecs",
      publicKey: publicKey,
    });
  };

  window.addEventListener("load", function () {
    initPGJS();
  });

}
export default paygreenPayment;