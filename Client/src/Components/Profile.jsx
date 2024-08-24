import React, { useState, useEffect, useRef } from "react";
import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserImage from "./images/Profile-icon.png";

export default function Profile() {
  const [image, setImage] = useState(localStorage.getItem("userImage") || UserImage);
  const editRef = useRef(null);
  const nameRef = useRef(null);
  const aboutRef = useRef(null);
  const addressRef = useRef(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("userImage");
    if (savedImage) {
      setImage(savedImage);
    }

    // Load saved details
    const savedName = localStorage.getItem("Name") || "Your Name";
    const savedAbout = localStorage.getItem("About") || "About yourself";
    const savedAddress = localStorage.getItem("Address") || "Save Address";
    
    if (nameRef.current) nameRef.current.innerText = savedName;
    if (aboutRef.current) aboutRef.current.innerText = savedAbout;
    if (addressRef.current) addressRef.current.innerText = savedAddress;
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      localStorage.setItem("userImage", reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleEdit = () => {
    if (editRef.current) {
      editRef.current.style.display = editRef.current.style.display === "none" ? "block" : "none";
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const about = document.getElementById("Bio").value;
    const address = document.getElementById("Address").value;

    localStorage.setItem("Name", name);
    localStorage.setItem("About", about);
    localStorage.setItem("Address", address);

    if (nameRef.current) nameRef.current.innerText = name;
    if (aboutRef.current) aboutRef.current.innerText = about;
    if (addressRef.current) addressRef.current.innerText = address;

    handleEdit(); // Close the edit form after saving
  };

  const handleClose = (e) => {
    e.preventDefault();
    handleEdit();
  };

  return (
    <>
      <section id="Profile">
        <div className="Display">
          <div className="profile col-lg-6 col-md-12 col-sm-12" id="Centered">
            <h1>Profile</h1>
            <div className="card221">
              <div className="card2">
                <div className="pic p-2">
                  <input
                    type="file"
                    id="fileInput"
                    name="fileInput"
                    accept=".jpg,.png,.pdf"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                  <img
                    src={image}
                    alt="User"
                    id="UserPic"
                    onClick={handleImageClick}
                    
                  />
                </div>
                <div className="details">
                  <h2 ref={nameRef} id="name1">Your Name</h2>
                  <p ref={aboutRef} id="About1">About yourself</p>
                  <p ref={addressRef} id="Address1">Save Address</p>
                </div>
              </div>
            </div>
            <button className="btn btn-primary btn-outline-dark col-md-6 m-2" id="edit" onClick={handleEdit}>
              Edit
            </button>
            <br /><br /><br />
          </div>
          <div className="details col-lg-6 col-md-12 col-sm-12 px-2" id="details" ref={editRef} style={{ display: 'none' }}>
            <div className="form-card1">
              <div className="form-card2">
                <form className="form">
                  <p className="form-heading">Changes</p>
                  <div className="form-field">
                    <input required placeholder="Name" className="input-field" type="text" id="name" />
                  </div>
                  <div className="form-field">
                    <input required placeholder="Bio" className="input-field" type="text" id="Bio" />
                  </div>
                  <div className="form-field">
                    <textarea
                      required
                      placeholder="Address"
                      cols="30"
                      rows="3"
                      className="input-field"
                      id="Address"
                    ></textarea>
                  </div>
                  <button className="sendMessage-btn" onClick={handleSave}>Save</button>
                  <button className="sendMessage-btn" onClick={handleClose}>Close</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
