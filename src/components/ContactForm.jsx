// import React from 'react'
// import "./ContactForm.css"

// const ContactForm = () => {
//   return (
//     <>
//     <div className='contact-form-content'>
//         <form>
//         <div className='name-container'>
//           <input type="text" name="firstname" placeholder='First Name' />
//           <input type="text" name="lastname" placeholder='Last Name' />
//         </div>
//         <input type="text" name='email' placeholder='Email Address' />
//         <textarea type="text" name="message" placeholder='Massage' rows={4}/>
//        <button><b>SEND</b></button>
//         </form>
//     </div>  
//     </>
//   )
// }

// export default ContactForm




import React, { useState } from 'react';
import "./ContactForm.css";
import Swal from 'sweetalert2';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Form Data Submitted:", formData); // Log the form data being submitted

    setLoading(true); // Set loading to true when submission starts

    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log("Response Status:", response.status); // Log the response status

      if (response.ok) {
        const responseData = await response.json(); // Get response data
        console.log("Response Body:", responseData); // Log the response body if needed

        // SweetAlert for success
        await Swal.fire({
          title: 'Success!',
          text: 'Message sent successfully!',
          icon: 'success',
          confirmButtonText: 'Okay'
        });

        setFormData({ firstname: '', lastname: '', email: '', message: '' }); // Reset form
      } else {
        const errorMessage = await response.text(); // Get error message from response
        console.error("Error Response:", errorMessage); // Log the error response

        // SweetAlert for error
        await Swal.fire({
          title: 'Error!',
          text: 'Error sending message. Please try again.',
          icon: 'error',
          confirmButtonText: 'Okay'
        });
      }
    } catch (error) {
      console.error('Error during fetch:', error); // Log error during fetch

      // SweetAlert for catch error
      await Swal.fire({
        title: 'Error!',
        text: 'Error sending message. Please check your console for details.',
        icon: 'error',
        confirmButtonText: 'Okay'
      });
    } finally {
      setLoading(false); // Reset loading state after submission
    }
  };

  return (
    <div className='contact-form-content'>
      <form onSubmit={handleSubmit}>
        <div className='name-container'>
          <input 
            type="text" 
            name="firstname" 
            placeholder='First Name' 
            value={formData.firstname} 
            onChange={handleChange}
            required
          />
          <input 
            type="text" 
            name="lastname" 
            placeholder='Last Name' 
            value={formData.lastname} 
            onChange={handleChange}
            required
          />
        </div>
        <input 
          type="text" 
          name='email' 
          placeholder='Email Address' 
          value={formData.email} 
          onChange={handleChange}
          required
        />
        <textarea 
          name="message" 
          placeholder='Message' 
          rows={4} 
          value={formData.message} 
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? (
            <span className="loader"></span> // Loader component or spinner
          ) : (
            'SEND'
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;