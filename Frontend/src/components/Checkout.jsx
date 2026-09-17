import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./checkout.css";

function Checkout({ order, onOrderComplete }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    eventDate: "",
    deliveryDate: "",
    deliveryTime: "",
    location: "",
    message: "",
  });

  const [sending, setSending] = useState(false);


  const serviceID = "service_qwndiqh";
  const templateID = "template_yl7dbnp";
  const publicKey = "DKhfwnSwCiY2ja0Va";

  
  // BAMALICIOUS WHATSAPP
  

  const whatsappNumber = "2348131574678";

  // ==============================
  // HANDLE INPUT
  // ==============================

  const handleChange = (e) => {
    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  // ==============================
  // CREATE ORDER DETAILS
  // ==============================

  const createOrderDetails = () => {
    if (!order || order.length === 0) {
      return "No drinks have been added to the order.";
    }

    return order
      .map(
        (item, index) =>
          `${index + 1}. ${item.name}
Size: ${item.size}
Quantity: ${item.quantity}`
      )
      .join("\n\n");
  };

  // ==============================
  // SEND ORDER
  // ==============================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!order || order.length === 0) {
      alert(
        "Please add at least one drink to your order."
      );
      return;
    }

    setSending(true);

    const orderDetails = createOrderDetails();

    // ==============================
    // SAVE CUSTOMER INFORMATION
    // ==============================

    localStorage.setItem(
      "customerName",
      formData.name
    );

    localStorage.setItem(
      "customerPhone",
      formData.phone
    );

    localStorage.setItem(
      "customerOrderDetails",
      orderDetails
    );

    // ==============================
    // EMAIL DATA
    // ==============================

    const emailData = {
      customer_name: formData.name,
      customer_phone: formData.phone,

      event_type:
        formData.eventType || "Not specified",

      event_date:
        formData.eventDate || "Not specified",

      delivery_date:
        formData.deliveryDate || "Not specified",

      delivery_time:
        formData.deliveryTime || "Not specified",

      location: formData.location,

      order_details: orderDetails,

      customer_message:
        formData.message ||
        "No additional message.",
    };

    try {
      // ==============================
      // SEND EMAIL
      // ==============================

      await emailjs.send(
        serviceID,
        templateID,
        emailData,
        publicKey
      );

      console.log(
        "Order email sent successfully"
      );

      // ==============================
      // CREATE WHATSAPP MESSAGE
      // ==============================

      const whatsappMessage = `
*NEW ORDER - BAMALICIOUS KITCHEN*

*CUSTOMER INFORMATION*
Name: ${formData.name}
Phone: ${formData.phone}

*ORDER INFORMATION*
Event Type: ${
        formData.eventType ||
        "Not specified"
      }

Event Date: ${
        formData.eventDate ||
        "Not specified"
      }

Delivery Date: ${
        formData.deliveryDate ||
        "Not specified"
      }

Delivery Time: ${
        formData.deliveryTime ||
        "Not specified"
      }

Location: ${formData.location}

*ORDER DETAILS*
${orderDetails}

*CUSTOMER MESSAGE*
${
  formData.message ||
  "No additional message."
}

*PRICE*
Price will be discussed and confirmed on WhatsApp.
`;

      // ==============================
      // OPEN WHATSAPP
      // ==============================

      const whatsappURL =
        `https://wa.me/${whatsappNumber}` +
        `?text=${encodeURIComponent(
          whatsappMessage
        )}`;

      window.open(
        whatsappURL,
        "_blank"
      );

      // ==============================
      // SUCCESS
      // ==============================

      alert(
        "Your order has been prepared successfully. WhatsApp will open with your order message. Please tap Send to complete the WhatsApp order."
      );

      // ==============================
      // CLEAR FORM
      // ==============================

      setFormData({
        name: "",
        phone: "",
        eventType: "",
        eventDate: "",
        deliveryDate: "",
        deliveryTime: "",
        location: "",
        message: "",
      });

      onOrderComplete();
    } catch (error) {
      console.error(
        "Order email failed:",
        error
      );

      console.error(
        "EMAILJS STATUS:",
        error?.status
      );

      console.error(
        "EMAILJS MESSAGE:",
        error?.text
      );

      alert(
        "We could not send your order. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      className="checkout-section"
      id="checkout"
    >
      <div className="checkout-heading">
        <p className="section-label">
          PLACE YOUR ORDER
        </p>

        <h2>
          Let's Make Your
          <span> Order Special</span>
        </h2>

        <p>
          Fill in your details and we'll prepare
          your order for WhatsApp confirmation.
        </p>
      </div>

      <form
        className="checkout-form"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">
            Full Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            WhatsApp Phone Number
          </label>

          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 08012345678"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="eventType">
            Event Type
          </label>

          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
          >
            <option value="">
              Select event type
            </option>

            <option value="Personal Order">
              Personal Order
            </option>

            <option value="Birthday">
              Birthday
            </option>

            <option value="Wedding">
              Wedding
            </option>

            <option value="Naming Ceremony">
              Naming Ceremony
            </option>

            <option value="Corporate Event">
              Corporate Event
            </option>

            <option value="Party">
              Party
            </option>

            <option value="Other">
              Other
            </option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="eventDate">
            Event Date
          </label>

          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="deliveryDate">
            Delivery Date
          </label>

          <input
            type="date"
            id="deliveryDate"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="deliveryTime">
            Preferred Delivery Time
          </label>

          <input
            type="time"
            id="deliveryTime"
            name="deliveryTime"
            value={formData.deliveryTime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="location">
            Delivery Location
          </label>

          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter delivery address"
            required
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="message">
            Additional Message
          </label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us anything else we should know..."
            rows="5"
          ></textarea>
        </div>

        <div className="price-notice full-width">
          <i className="fa-brands fa-whatsapp"></i>

          <div>
            <strong>
              Order through WhatsApp
            </strong>

            <p>
              Your order details will be prepared
              in WhatsApp. Tap Send in WhatsApp
              to send the order to Bamalicious Kitchen.
              Price will be discussed there.
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="checkout-submit"
          disabled={sending}
        >
          {sending ? (
            <>
              <i className="fa-solid fa-spinner fa-spin"></i>
              Preparing Order...
            </>
          ) : (
            <>
              <i className="fa-brands fa-whatsapp"></i>
              Order on WhatsApp
            </>
          )}
        </button>
      </form>
    </section>
  );
}

export default Checkout;