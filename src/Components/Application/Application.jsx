import React, { useState } from 'react';
import './Application.css';

const Application = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    address: '',
    idNumber: '',
    photograph: null,
    contact: '',
    email: '',
    occupation: '',
    sourceOfFunds: '',
    signature: '',
    kycDocuments: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Perform form submission logic here
  };

  return (
    
    <form onSubmit={handleSubmit} className="kyc-form">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Age/Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Identification Number:</label>
        <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Photograph:</label>
        <input type="file" name="photograph" onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Contact Information:</label>
        <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Occupation:</label>
        <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Source of Funds:</label>
        <input type="text" name="sourceOfFunds" value={formData.sourceOfFunds} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Signature:</label>
        <input type="file" name="signature" onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>KYC Documents:</label>
        <input type="file" name="kycDocuments" onChange={handleChange} multiple required />
      </div>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default Application;
