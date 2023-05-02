import { useRef,useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity,setFormInputsValidity] = useState({
    name: true,
    street:true,
    city:true,
    zip:true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const zipInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredZip = zipInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredZipIsValid = isFiveChars(enteredZip);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
        name:enteredNameIsValid,
        street: enteredStreetIsValid,
        city:enteredCityIsValid,
        zip:enteredZipIsValid
    })
    
    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredStreetIsValid &&
      enteredZipIsValid;



      if(!formIsValid){
        return;
      }

      props.onConfirm({
        name:enteredName,
        street:enteredCity,
        city:enteredCity,
        zip: enteredZip
      })

      //submit cart data
  };
  const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '':classes.invalid}`
  const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '':classes.invalid}`
  const zipControlClasses = `${classes.control} ${formInputsValidity.zip ? '':classes.invalid}`
  const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '':classes.invalid}`

  

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef}></input>
        {!formInputsValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef}></input>
        {!formInputsValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={zipControlClasses}>
        <label htmlFor="zip">Postal Code</label>
        <input type="text" id="zip" ref={zipInputRef}></input>
        {!formInputsValidity.zip && <p>Please enter a valid postalCode</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef}></input>
        {!formInputsValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
