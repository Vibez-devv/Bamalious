import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./OrderConfirmation.css";

function OrderConfirmation({ order }) {
  const [confirmed, setConfirmed] = useState(false);
  const [sending, setSending] = useState(false);

  const serviceID = "service_qwndiqh";
  const templateID = "template_sqoj51c";
  const publicKey = "DKhfwnSwCiY2ja0Va";

  const whatsappNumber = "2348012345678";

  const handleConfirm = async () => {
    setSending(true);

    const orderDetails =
      order && order.length > 0
        ? order
            .map(
              (item, index) =>
                `${index + 1}. ${item.name} | Size: ${item.size} | Quantity: ${item.quantity}`
            )
            .join("\n")
        : "Order details unavailable";

    const confirmationData = {
      customer_name:
        localStorage.getItem("customerName") ||
        "Customer",

      customer_phone:
        localStorage.getItem("customerPhone") ||
        "Not provided",

      order_details: orderDetails,

      confirmation_message:
        "Customer has confirmed that the order was received successfully.",
    };

    try {
      await emailjs.send(
        serviceID,
        templateID,
        confirmationData,
        publicKey
      );

      const whatsappMessage = `
*ORDER RECEIVED - BAMALICIOUS KITCHEN*

Hello Bamalicious Kitchen,

I have received my order successfully.

*ORDER DETAILS*
${orderDetails}

Thank you for the service.
`;

      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      localStorage.setItem(
        "orderReceived",
        "true"
      );

      setConfirmed(true);

      window.open(whatsappURL, "_blank");
    } catch (error) {
      console.error(
        "Confirmation email failed:",
        error
      );

      alert(
        "We couldn't send the confirmation. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      className="order-confirmation"
      id="order-confirmation"
    >
      {!confirmed ? (
        <div className="confirmation-card">
          <div className="confirmation-icon">
            <i className="fa-solid fa-box"></i>
          </div>

          <p className="section-label">
            ORDER DELIVERY
          </p>

          <h2>
            Have You Received
            <span> Your Order?</span>
          </h2>

          <p>
            Once your order has been delivered, click
            the button below to confirm that you received
            everything successfully.
          </p>

          <button
            type="button"
            className="confirm-order-btn"
            onClick={handleConfirm}
            disabled={sending}
          >
            {sending ? (
              <>
                <i className="fa-solid fa-spinner fa-spin"></i>
                Confirming Order...
              </>
            ) : (
              <>
                <i className="fa-solid fa-circle-check"></i>
                Confirm Order Received
              </>
            )}
          </button>
        </div>
      ) : (
        <div className="confirmation-success">
          <div className="success-icon">
            <i className="fa-solid fa-check"></i>
          </div>

          <h2>Order Received Successfully</h2>

          <p>
            Thank you for ordering from Bamalicious
            Kitchen. We appreciate your business.
          </p>

          <strong>
            Your order has been marked as received.
          </strong>
        </div>
      )}
    </section>
  );
}

export default OrderConfirmation;