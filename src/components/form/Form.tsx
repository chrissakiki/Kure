import React from "react";
import "./form.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Props {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}
const Form: React.FC<Props> = ({ setShowForm }) => {
  const servicesObj = [
    "Deep Tissue",
    "Trigger Point",
    "Sports",
    "Swedish",
    "Relaxing",
    "Athletic Recovery",
    "Flexology",
    "Reflexology",
    "Anti Cellulite",
    "Prenatal",
  ];
  //   let packageObj = ["60 minutes", "90 minutes", "Couple"];

  const [packageObj, setPackageObj] = React.useState<string[]>([]);
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [service, setService] = React.useState("Deep Tissue");
  const [selectedPackage, setSelectedPackage] = React.useState("60 minutes");
  const [selectedDate, setSelectedDate] = React.useState("");
  const [selectedTime, setSelectedTime] = React.useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      !fullName ||
      !email ||
      !service ||
      !selectedPackage ||
      !selectedDate ||
      !selectedTime
    ) {
      return toast.error("Please provide all values.");
    }

    const message = encodeURIComponent(
      `Hi, I'm ${fullName} and I Would love to book an appointment. \nEmail: ${email} \nService: ${service}. \nPackage: ${selectedPackage}. \nDate: ${selectedDate} | ${selectedTime}`
    );

    window.location.replace(`https://wa.me/96176577070?text=${message}`);
  };

  React.useEffect(() => {
    if (service === "Reflexology") {
      setPackageObj(["40 minutes"]);
      return setSelectedPackage("40 minutes");
    }

    if (service === "Anti Cellulite") {
      setPackageObj(["50 minutes"]);
      return setSelectedPackage("50 minutes");
    }

    setPackageObj(["60 minutes", "90 minutes", "Couple"]);
    setSelectedPackage("60 minutes");
  }, [service]);
  return (
    <div className="form-wrapper">
      <form className="container" onSubmit={handleSubmit}>
        <div className="header">
          <h2>Book your appointment</h2>
          <button className="close" onClick={() => setShowForm(false)}>
            X
          </button>
        </div>
        <div className="half-select">
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              placeholder="John..."
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              required
              placeholder="John@hotmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="half-select">
          <div className="form-group">
            <label>Service:</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              {servicesObj.map((serv) => (
                <option key={serv} value={serv}>
                  {serv}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Package:</label>
            <select
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value)}
              required
            >
              {packageObj.map((pack) => {
                return (
                  <option key={pack} value={pack}>
                    {pack}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="half-date">
          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Time:</label>
            <input
              type="time"
              onChange={(e) => setSelectedTime(e.target.value)}
              min="08:00"
              max="20:00"
              required
            />
          </div>
        </div>

        <button className="submit" type="submit">
          Submit
        </button>
      </form>
      <span style={{ zIndex: 2020202 }}>
        <ToastContainer />
      </span>
    </div>
  );
};

export default Form;
