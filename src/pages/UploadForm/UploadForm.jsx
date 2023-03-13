import React from 'react'
import './UploadForm.scss'
import thumbnail from '../../assets/images/Upload-video-preview.jpg'
import { useNavigate } from 'react-router-dom'

function UploadForm() {
    const navigate=useNavigate();

    const handleSubmit=()=>{
        alert('        Video uploaded sucessfully!! \n\n\n\n \t\t\tPlease click "OK" to return HOME!');
        return navigate("/");
    }
  return (
    <section className='upload-form'>
        <h1 className='upload-form__heading'>Upload Video</h1>
        <div className='upload-form__form-element-wrapper'>
            <div className='upload-form__img-container'>
                <p className='upload-form__form-lable'>VIDEO THUMBNAIL</p>
                <img className='upload-form__thumbnail-img' src={thumbnail} alt="thumbnail" />
            </div>
            <form className='upload-form__form'>
                <label className='upload-form__form-lable' htmlFor="title">TITLE YOUR VIDEO</label>
                <input className='upload-form__inputbox' name='title' id='title' type="text" placeholder='Add a title to your video' />
                <label className='upload-form__form-lable' htmlFor="decription">ADD A VIDEO DESCRIPTION</label>
                <textarea className='upload-form__textarea' name="description" id="description" cols="5" rows="3" placeholder="Add a description to your video"></textarea>
            </form>
        </div>
        <div className='btn-wrapper'>
            <button onClick={handleSubmit} className='btn-publish' type="submit">PUBLISH</button>
            <button className='btn-cancel'>CANCEL</button>
        </div>


    </section>
  )
}

export default UploadForm