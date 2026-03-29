import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false); // for loading state

  const handleSend = () => {
    if (!name || !email || !message) {
      alert("Please fill out all fields!");
      return;
    }

    setSending(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_n45ri8e", // Service ID
        "template_j3jv3cg", // Template ID
        templateParams,
        "70rVQ9E1jewZ1-zZf" // EmailJS public key
      )
      .then(
        (_response) => {
          alert("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
          setSending(false);
        },
        (error) => {
          console.error("Email send error:", error);
          alert("Failed to send message. Try again later.");
          setSending(false);
        }
      );
  };

  return (
    <section className="w-full bg-black text-white px-4 py-24 flex justify-center">
      <div className="w-full max-w-xl rounded-2xl border border-neutral-700 bg-neutral-950/40 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">Contact Me</h2>
        <p className="text-neutral-400 text-center mt-3 mb-8">
          Have an opportunity or just want to connect? Send me a message.
        </p>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-neutral-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-neutral-500"
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mb-6 px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-neutral-500 resize-none"
        />

        <button
          onClick={handleSend}
          disabled={sending}
          className={`w-full py-3 rounded-xl bg-white text-black hover:bg-neutral-200 transition font-medium ${
            sending ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </div>
    </section>
  );
};

export default Contact;