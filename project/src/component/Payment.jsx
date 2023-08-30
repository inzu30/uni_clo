
import "../Styles/Payment.css"
function Payment() {
  return (
    <div className="payment-container">
      <h2>Secure Payment Gateway</h2>
      <form className="payment-form">
        <label htmlFor="card-number">Card Number</label>
        <input type="text" id="card-number" className="input-field" placeholder="Enter card number" required />
        <label htmlFor="expiry-date">Expiry Date</label>
        <input type="text" id="expiry-date" className="input-field" placeholder="MM/YY" required />
        <label htmlFor="cvv">CVV</label>
        <input type="text" id="cvv" className="input-field" placeholder="CVV" required />
        <button type="submit" className="pay-button">Pay Now</button>
      </form>
    </div>
  );
}

export default Payment;