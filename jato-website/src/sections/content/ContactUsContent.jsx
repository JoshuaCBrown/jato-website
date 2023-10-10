// import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import "./style/ContactUs.css"

export default function ContactUsContent() {
  const [result, setResult] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b3216493-1580-4149-90d6-6ec48ac7e968");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult("Message sent!");
      setSubmitted(true);
    } else {
      console.log("Error", res);
      setResult("An error occured.");
    }
  };
  // useEffect(() => {
  //   if (submitted) {
  //     navigate("/formsuccess");
  //   }
  // }, [submitted]);

  return (
    <div className="contact-container">
      {submitted === true ? (
        <div><h3>{result}</h3></div>
      ) : (
        <div className="contact-form">
          <form onSubmit={onSubmit}>
          <div>
              <label htmlFor="email">Email </label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject" required>
                <option value="booking">Booking</option>
                <option value="collab">Collab</option>
                <option value="licensing">Licensing</option>
                <option value="business">Other business related inquiry</option>
                <option value="hi">Just saying hi</option>
                <option value="other">Other/etc.</option>
                <option value="feedback">General feedback</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message">Message </label>
              <textarea
                name="message"
                id="message"
                rows="10"
                cols="30"
                required
              ></textarea>
            </div>
            <input type="submit" />
          </form>
          <span>{result}</span>
        </div>
      )}
    </div>
  );
}

// const { register, handeSubmit } = useForm();

//   return (
//     <>
//       <form action="https://api.web3forms.com/submit" method="POST">
//         <input
//           type="hidden"
//           name="access_key"
//           value="3216493-1580-4149-90d6-6ec48ac7e968"
//         />
//        {/* <input type="hidden" name="subject" value="JATO.com" {...register("subject")} /> */}
//         <div>
//           <label htmlFor="subject">Subject</label>
//           <select id="subject" name="subject" required>
//             <option value="booking">Booking</option>
//             <option value="collab">Collab</option>
//             <option value="licensing">Licensing</option>
//             <option value="business">Other business related inquiry</option>
//             <option value="hi">Just saying hi</option>
//             <option value="other">Other/etc.</option>
//             <option value="feedback">General feedback</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="email">Email </label>
//           <input type="email" id="email" name="email" required />
//         </div>
//         <div>
//           <label htmlFor="message">Message </label>
//           <textarea name="message" id="message" rows="10" cols="30" required ></textarea>
//         </div>
//         <input type="checkbox" name="botcheck" id="" className="botfilt" />
//         <button type="submit" onClick={formValidation}>Send</button>
//       </form>
//     </>
//   );
// }
//     <form action="https://api.web3forms.com/submit" method="POST">
//     {/* <!-- b3216493-1580-4149-90d6-6ec48ac7e968 -->
//     <!-- REQUIRED: Your Access key here. Don't worry this can be public -->
//     <!-- Create your Access key here: https://web3forms.com/ -->
//     <!-- <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE"> --> */}
//     <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">

//     {/* <!-- Optional: Can be type="hidden" or type="text" for subject --> */}
//     <input type="hidden" name="subject" value="New Submission from Web3Forms">

//     {/* <!-- Optional: From Name you want to see in the email
//           Default is "Notifications". you can overwrite here --> */}
//     <input type="hidden" name="from_name" value="Your Website Name">

//     {/* <!-- Optional: To send the form submission as CC email --> */}
//     <input type="hidden" name="ccemail" value="partner@example.com">

//     {/* <!-- Optional: default replyto will be "email" (if available),
//          you may overwrite here --> */}
//     <input type="hidden" name="replyto" value="customer@example.com">

//     {/* <!-- Required: if submitting without Javascript
//          (because by default web3form outputs json) --> */}

//     {/* <!-- If javascript, use "window.location.hash" for redirects --> */}
//     <input type="hidden" name="redirect" value="https://web3forms.com/success">

//     {/* <!-- Optional: But Recommended: To Prevent SPAM Submission.
//          Make sure its hidden by default --> */}
//

//     {/* <!-- Webhooks: Send your form data to Notion, Google Sheets or Zapier.
//          This feature available to PRO & Starter Plan users only --> */}
//     <input type="hidden" name="webhook" value="WEBHOOK_URL_HERE" />

//     {/* <!-- Google reCaptcha v3: To Prevent SPAM Submission.PRO Plan only --> */}
//     <input type="hidden" name="recaptcha_response" id="recaptchaResponse">

//     {/* <!-- Attachments: Make sure the <form> has enctype="multipart/form-data"
//          This feature available to PRO Plan users only --> */}
//     <input type="file" name="attachment" />

//     {/* <!-- Custom Form Data:
//      Then you can include your own form data you wish to receive in email. --> */}
//     <input type="email" name="email" required>
//     <input type="text" name="First Name" required>
//     <input type="text" name="Phone Number" required>
//     <textarea name="message" cols="30" rows="10" required></textarea>

//     <button type="submit">Submit Form</button>

// </form>

//   )
// };
