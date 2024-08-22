import { useState } from "react";

//@TODO : Ajouter un verificateur d'email
//@TODO : Ajouter un reCAPTCHA
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiToken = import.meta.env.VITE_API_TOKEN;
    try {
      const response = await fetch(
        "https://connect.mailerlite.com/api/subscribers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${apiToken}`,
          },
          body: JSON.stringify({ email: email }),
        }
      ).then(setEmail(""));

      if (response.ok) {
        setMessage("Merci d'avoir rejoint notre newsletter 🥳");
      } else {
        setMessage(
          "Erreur lors de l'ajout de votre email, merci de réessayer 😥"
        );
      }

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      setMessage("Erreur du serveur, Merci de réessayer");
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center pt-8 w-full px-4"
      >
        <input
          type="email"
          placeholder="Entrez votre email"
          value={email}
          onChange={handleChange}
          className="bg-slate-100 rounded-full w-full sm:w-80 h-12 sm:h-16 font-inter font-normal px-4 sm:px-8 outline-2 outline-blue"
        />
        <button className="btn bg-blue hover:bg-fushia rounded-full w-full sm:w-36 h-12 sm:h-16 text-white font-inter font-semibold hover:scale-110">
          Souscrire
        </button>
      </form>
      <p
        className={`pt-5 text-lg font-montserrat font-bold ${
          message.includes("Erreur") ? "text-red-500" : "text-green-500"
        }`}
      >
        {message}
      </p>
    </>
  );
}
