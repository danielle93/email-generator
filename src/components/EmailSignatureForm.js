import React, { useState } from "react";
import GeneratedSignature from "./GeneratedSignature";
import CopyToClipboard from "react-copy-to-clipboard";
import cultureimg1 from "../img/hab-image-1.jpg";
import cultureimg2 from "../img/hab-image-2.jpg";
import cultureimg3 from "../img/hab-image-3.jpg";

// Import employee headshots
const employeeHeadshots = {};
const context = require.context(
  "../img/employee_headshots",
  false,
  /\.(jpg|jpeg|png)$/
);
context.keys().forEach((key) => {
  const fileName = key.replace("./", "");
  employeeHeadshots[fileName] = context(key);
});
function EmailSignatureForm() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    phoneNumber: "",
    color: "",
  });

  // Function to format the phone number as ###.###.###
  const formatPhoneNumber = (phoneNumber) => {
    // Remove non-numeric characters
    const numericPhoneNumber = phoneNumber.replace(/\D/g, "");

    // Format the numeric phone number as ###.###.###
    return numericPhoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1.$2.$3");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the input is the phone number field
    if (name === "phoneNumber") {
      // Format the phone number as the user types
      const formattedPhoneNumber = formatPhoneNumber(value);
      setFormData({
        ...formData,
        [name]: formattedPhoneNumber,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleColorClick = (color) => {
    setFormData({
      ...formData,
      color,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Construct the filename using the first name and last name
    const fileName = `${formData.firstName
      .toLowerCase()
      .replace(/\s/g, "")}${formData.lastName
      .toLowerCase()
      .replace(/\s/g, "")}H.jpg`;
    alert(fileName);
    // Check if the image exists in the employee_headshots folder
    if (fileName) {
      import(`../img/employee_headshots/${fileName}`)
        .then((employeeImage) => {
          // Simulated results for demonstration
          setTimeout(() => {
            setResults(
              <GeneratedSignature
                fullName={`${formData.firstName} ${formData.lastName}`}
                jobTitle={formData.jobTitle}
                phoneNumber={formData.phoneNumber}
                emailAddress={formData.emailAddress}
                address={formData.address}
                color={formData.color} // Pass the color prop
                employeeImage={employeeImage.default} // Pass the background image
              />
            );
            setLoading(false);
          }, 2000);
        })
        .catch(() => {
          // Handle the case where the image doesn't exist
          setLoading(false);
          setResults(null);
          alert("Employee headshot not found for this name.");
        });
    }
  };

  const handleGoBack = () => {
    setResults(null);
    setCopied(false);
    setFormData({
      firstName: "",
      lastName: "",
      jobTitle: "",
      phoneNumber: "",
      color: "",
    });
  };

  return (
    <div className="container max-width-xl">
      <div className="grid gap-lg justify-center">
        {loading ? (
          <div>Our wizards are creating your signature...</div>
        ) : results ? (
          <>
            <div className="grid gap-md justify-center margin-y-0">
              <div className="col-12 margin-bottom-sm margin-top-lg">
                <h1 className="margin-0 text-lg font-secondary reveal-fx reveal-fx--translate-up">
                  Email Signature Generator
                </h1>
              </div>
            </div>
            <div className="grid gap-md justify-center">
              <div className="col">
                <p>{results}</p>
              </div>
              <div className="col">
                <div
                  className="padding-lg radius-lg"
                  style={{ background: "#E9E3DD", color: "#070F0B" }}
                >
                  <h2 className="text-md font-secondary margin-bottom-xs">
                    Instructions:
                  </h2>
                  <ul className="font-primary">
                    <li className="reveal-fx reveal-fx--translate-up">
                      Click Copy to Clipboard
                    </li>
                    <li className="reveal-fx reveal-fx--translate-up">
                      Outlook &gt; Preferences &gt; Signatures &gt; Edit
                    </li>
                    <li className="reveal-fx reveal-fx--translate-up">
                      Delete all the content and paste your email signature &gt;
                      Save
                    </li>
                    <li className="reveal-fx reveal-fx--translate-up">
                      You can rename the “Standard” email signature to Habitat
                    </li>
                    <li className="reveal-fx reveal-fx--translate-up">
                      Under “Choose Default Signature” Select your email
                      signature for “New Messages” and “Replies/Forward”
                    </li>
                    <li className="reveal-fx reveal-fx--translate-up">
                      You're done!
                    </li>
                  </ul>
                </div>
                <div className="text-right">
                  <CopyToClipboard
                    text={results}
                    onCopy={() => setCopied(true)}
                  >
                    <button className="margin-top-md btn btn--primary padding-y-xs margin-right-sm">
                      {copied ? "HTML Copied!" : "Copy to Clipboard"}
                    </button>
                  </CopyToClipboard>

                  <button
                    className="margin-top-md btn btn--primary padding-y-xs"
                    onClick={handleGoBack}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col margin-top-lg">
              <div className="grid gap-md margin-bottom-0">
                <div
                  className="col radius-lg"
                  style={{
                    backgroundImage: `url(${cultureimg1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    height: "506px",
                  }}
                ></div>
              </div>
              <div className="grid gap-md">
                <div
                  className="col radius-lg"
                  style={{
                    backgroundImage: `url(${cultureimg2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    height: "211px",
                  }}
                ></div>
                <div
                  className="col radius-lg"
                  style={{
                    backgroundImage: `url(${cultureimg3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    height: "211px",
                  }}
                ></div>
              </div>
            </div>
            <div className="col margin-top-lg">
              <h1 className="font-secondary text-lg reveal-fx reveal-fx--translate-up">
                Email Signature Generator
              </h1>

              <div id="emailsigform" className="margin-top-md">
                <form onSubmit={handleSubmit} className="">
                  <div>
                    <label
                      className="block reveal-fx reveal-fx--translate-up"
                      htmlFor="first-name"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block" htmlFor="last-name">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block" htmlFor="job-title">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="job-title"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block" htmlFor="phone-number">
                      Your Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone-number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block">
                      Select your background color:
                    </label>
                    <div className="grid gap-sm">
                      <div className="col">
                        <div
                          className={`bg-mint radius-md padding-x-sm padding-y-xs margin-y-sm reveal-fx reveal-fx--translate-up ${
                            formData.color === "Mint" ? "selected" : ""
                          }`}
                          onClick={() => handleColorClick("Mint")}
                        >
                          <input
                            type="radio"
                            id="mint"
                            name="color"
                            value="Mint"
                            checked={formData.color === "Mint"}
                            onChange={handleChange}
                          />
                          <label htmlFor="mint">Mint</label>
                        </div>

                        <div
                          className={`bg-coral radius-md padding-x-sm padding-y-xs margin-y-sm reveal-fx reveal-fx--translate-up ${
                            formData.color === "Coral" ? "selected" : ""
                          }`}
                          onClick={() => handleColorClick("Coral")}
                        >
                          <input
                            type="radio"
                            id="coral"
                            name="color"
                            value="Coral"
                            checked={formData.color === "Coral"}
                            onChange={handleChange}
                          />
                          <label htmlFor="coral">Coral</label>
                        </div>

                        <div
                          className={`bg-apricot radius-md padding-x-sm padding-y-xs margin-y-sm reveal-fx reveal-fx--translate-up ${
                            formData.color === "Apricot" ? "selected" : ""
                          }`}
                          onClick={() => handleColorClick("Apricot")}
                        >
                          <input
                            type="radio"
                            id="apricot"
                            name="color"
                            value="Apricot"
                            checked={formData.color === "Apricot"}
                            onChange={handleChange}
                          />
                          <label htmlFor="apricot">Apricot</label>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className={`bg-mist radius-md padding-x-sm padding-y-xs margin-y-sm reveal-fx reveal-fx--translate-up ${
                            formData.color === "Mist" ? "selected" : ""
                          }`}
                          onClick={() => handleColorClick("Mist")}
                        >
                          <input
                            type="radio"
                            id="mist"
                            name="color"
                            value="Mist"
                            checked={formData.color === "Mist"}
                            onChange={handleChange}
                          />
                          <label htmlFor="mist">Mist</label>
                        </div>

                        <div
                          className={`bg-lavender radius-md padding-x-sm padding-y-xs margin-y-sm reveal-fx reveal-fx--translate-up ${
                            formData.color === "Lavender" ? "selected" : ""
                          }`}
                          onClick={() => handleColorClick("Lavender")}
                        >
                          <input
                            type="radio"
                            id="lavender"
                            name="color"
                            value="Lavender"
                            checked={formData.color === "Lavender"}
                            onChange={handleChange}
                          />
                          <label htmlFor="lavender">Lavender</label>
                        </div>

                        <div
                          className={`bg-accent radius-md padding-x-sm padding-y-xs margin-y-sm reveal-fx reveal-fx--translate-up ${
                            formData.color === "Tan" ? "selected" : ""
                          }`}
                          onClick={() => handleColorClick("Tan")}
                        >
                          <input
                            type="radio"
                            id="tan"
                            name="color"
                            value="Tan"
                            checked={formData.color === "Tan"}
                            onChange={handleChange}
                          />
                          <label htmlFor="tan">Tan</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn--primary padding-y-xs"
                    type="submit"
                  >
                    Generate Signature
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default EmailSignatureForm;
