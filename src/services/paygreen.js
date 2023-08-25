/* eslint-disable no-undef */
// /* eslint-disable no-undef */
const paygreenPayment =(props)=>{

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

      // Erreur de saisie utilisateur
      paygreenjs.attachEventListener(
        paygreenjs.Events.PAN_FIELD_ONCHANGE,
        (event) => {
          const error = event?.detail?.error;
          if(error) {
            props.setIsError(true);
          } else {
           props.setIsError(false)
          }
        },
      );
      // Erreur de saisie utilisateur


      paygreenjs.init({
        mode: "instrument",
        modeOptions: {
          shopId: "sh_69b974d635c34df18c807baed0794836",
        },
        style: {
          input: {
            base: {
              color: "black",
              fontSize: "18px",
            },
          },
        },

        paymentMethod: "conecs",
        publicKey: "pk_6d92047e838d4870b74857ba47e2eebd",
      });
    };

    window.addEventListener("load", function () {
      initPGJS();
    });

}
export default paygreenPayment;