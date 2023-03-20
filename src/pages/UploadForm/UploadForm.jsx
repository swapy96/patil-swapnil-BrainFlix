import { useRef } from "react";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import "./UploadForm.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UploadForm() {
  const api = "http://localhost:9999";
  const navigate = useNavigate();
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const { title, description } = formRef.current;

    const uploadVideo = {
      title: title.value,
      description: description.value,
    };

    if (description.value === "" || title.value === "") {
      alert(
        "Video title and description can not be empty- Please add Video Data to Publish OR Click on Cancel to return to Home Page"
      );
    } else {
      upload(uploadVideo);
      alert(
        '        Video uploaded sucessfully!! \n\n\n\n \t\t\tPlease click "OK" to return HOME!'
      );
      navigate("/");
    }
    event.target.reset();
  };
  function upload(video) {
    axios
      .post(`${api}/videos`, video)
      .then((response) => {
        console.log("post request sent to server");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const handleCancel = () => {
    return navigate("/");
  };
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="upload-form">
      <h1 className="upload-form__heading">Upload Video</h1>
      <div className="upload-form__form-element-wrapper">
        <div className="upload-form__img-container">
          <p className="upload-form__form-lable">VIDEO THUMBNAIL</p>
          <img
            name="thumbnailImg"
            className="upload-form__thumbnail-img"
            src={thumbnail}
            alt="thumbnail"
          />
        </div>
        <div className="upload-form__form">
          <label className="upload-form__form-lable" htmlFor="title">
            TITLE YOUR VIDEO
          </label>
          <input
            className="upload-form__inputbox"
            name="title"
            id="title"
            type="text"
            placeholder="Add a title to your video"
          />
          <label className="upload-form__form-lable" htmlFor="decription">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            className="upload-form__textarea"
            name="description"
            id="description"
            cols="5"
            rows="3"
            placeholder="Add a description to your video"
          ></textarea>
        </div>
      </div>
      <div className="btn-wrapper">
        <button className="btn-publish" type="submit">
          PUBLISH
        </button>
        <button onClick={handleCancel} className="btn-cancel">
          CANCEL
        </button>
      </div>
    </form>
  );
}

export default UploadForm;
