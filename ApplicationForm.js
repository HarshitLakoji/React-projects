import React, { useState } from 'react';
import './ApplicationForm.css';
import { Link } from 'react-router-dom'; // only needed if you're using react-router
import logo from "../assets/images/logo1.png"

function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    address: '',
    gender: '',
    category: '',
    programme: '',
    aadhaarNo: '',
    fatherName: '',
    aadhaarCard: null,
    marklist: null,
    photo: null
  });

  const [errors, setErrors] = useState({});
  const [photoPreview, setPhotoPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const programmes = [
    'B.Tech', 'M.Tech', 'MBA', 'B.Sc', 'M.Sc', 'Ph.D', 'Diploma'
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      setFormData({
        ...formData,
        [name]: file
      });

      if (name === 'photo') {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPhotoPreview(reader.result);
        };
        if (file) reader.readAsDataURL(file);
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    const requiredFields = [
      'name', 'phone', 'email', 'dob', 'gender', 'category',
      'programme', 'aadhaarNo', 'fatherName'
    ];

    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required.';
      }
    });

    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits.';
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Submitted Data:', formData);
      setSubmitted(true);
    }
  };

  return (
    <div className="form-container">
      {submitted ? (
        <div className="success-message">
          <h2>Registration Successful!</h2>
          <p>Thank you for applying to GIET University.</p>
          {/* If you're using React Router */}
          <Link to="/" className="home-link">Go Back to Home</Link>

          {/* If you're NOT using React Router, use regular anchor */}
          {/* <a href="/" className="home-link">Go Back to Home</a> */}
        </div>
      ) : (
        <>
          <div className="header">
            <h2>Application Form</h2>
          </div>

          <div className="university-info">
            <div className="logo">
              <img
                src={logo}
                alt="GIET Logo"
              />
            </div>
            <div className="info">
              <h3><strong>GIET University, Gunupur</strong></h3>
              <p>At – Gobriguda, Po- Kharling, Dist. – Rayagada, Odisha -India, 765022</p>
            </div>
            <div className="photo">
              <div className="photo-preview">
                <img
                  src={
                    photoPreview ||
                    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                  }
                  alt="Preview"
                  className="photo-placeholder"
                />
              </div>
              <input name="photo" type="file" accept="image/*" onChange={handleChange} />
            </div>
          </div>

          <form className="application-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-group">
                <input name="name" type="text" placeholder="Name *" value={formData.name} onChange={handleChange} />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div className="input-group">
                <input name="phone" type="text" placeholder="Phone *" value={formData.phone} onChange={handleChange} />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
            </div>

            <div className="row">
              <div className="input-group">
                <input name="email" type="email" placeholder="Email *" value={formData.email} onChange={handleChange} />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="input-group">
                <input name="dob" type="date" value={formData.dob} onChange={handleChange} />
                {errors.dob && <span className="error">{errors.dob}</span>}
              </div>
            </div>

            <textarea
              name="address"
              placeholder="Address"
              className="full-width"
              value={formData.address}
              onChange={handleChange}
            />

            <div className="row">
              <div className="input-group">
                <select name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="">Select Gender *</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && <span className="error">{errors.gender}</span>}
              </div>
              <div className="input-group">
                <select name="category" value={formData.category} onChange={handleChange}>
                  <option value="">Select Category *</option>
                  <option value="General">General</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="OBC">OBC</option>
                  <option value="EWS">EWS</option>
                </select>
                {errors.category && <span className="error">{errors.category}</span>}
              </div>
            </div>

            <div className="row">
              <div className="input-group">
                <select name="programme" value={formData.programme} onChange={handleChange}>
                  <option value="">Select Programme *</option>
                  {programmes.map((prog) => (
                    <option key={prog} value={prog}>{prog}</option>
                  ))}
                </select>
                {errors.programme && <span className="error">{errors.programme}</span>}
              </div>
              <div className="input-group">
                <input name="aadhaarNo" type="text" placeholder="Aadhaar No. *" value={formData.aadhaarNo} onChange={handleChange} />
                {errors.aadhaarNo && <span className="error">{errors.aadhaarNo}</span>}
              </div>
            </div>

            <div className="row">
              <div className="input-group">
                <input name="fatherName" type="text" placeholder="Father's Name *" value={formData.fatherName} onChange={handleChange} />
                {errors.fatherName && <span className="error">{errors.fatherName}</span>}
              </div>
              <div className="file-upload">
                <label>Marklist</label>
                <input name="marklist" type="file" onChange={handleChange} />
              </div>
            </div>

            <div className="file-upload" style={{ marginTop: '10px' }}>
              <label>Aadhaar Card *</label>
              <input name="aadhaarCard" type="file" onChange={handleChange} />
            </div>

            <button type="submit" className="submit-button">SUBMIT</button>
          </form>
        </>
      )}
    </div>
  );
}

export default ApplicationForm;
