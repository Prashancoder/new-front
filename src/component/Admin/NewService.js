import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createService } from "../../actions/serviceAction";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { AccountTree, Description, Storage, Spellcheck } from "@material-ui/icons";
import Sidebar from "./Sidebar";
import "./NewService.css";

const NewService = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.newService);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const createServiceSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);

    images.forEach((image) => {
      myForm.append("images", image);
    });

    dispatch(createService(myForm))
      .then(() => {
        alert.success("Service Created Successfully");
        navigate("/admin/services");
      })
      .catch((error) => {
        alert.error(error);
      });
  };

  const createServiceImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <MetaData title="Create Service" />
      <div className="dashboard">
        <Sidebar />
        <div className="newServiceContainer">
          <form
            className="createServiceForm"
            encType="multipart/form-data"
            onSubmit={createServiceSubmitHandler}
          >
            <h1>Create Service</h1>

            <div>
              <Spellcheck />
              <input
                type="text"
                placeholder="Service Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <AccountTree />
              <input
                type="number"
                placeholder="Price"
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
              <Description />
              <textarea
                placeholder="Service Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div id="createServiceFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createServiceImagesChange}
                multiple
              />
            </div>

            <div id="createServiceFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Service Preview" />
              ))}
            </div>

            <button
              id="createServiceBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewService; 