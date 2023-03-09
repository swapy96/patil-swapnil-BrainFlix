import React from 'react'
import './UploadForm.scss'
import thumbnail from '../../assets/images/Upload-video-preview.jpg'

function UploadForm() {
  return (
    <section className='upload-form'>
        <h1 className='upload-form__heading'>Upload Video</h1>
        <div className='upload-form__form-element-wrapper'>
            <div className='upload-form__img-container'>
                <p className='upload-form__form-lable'>VIDEO THUMBNAIL</p>
                <img className='upload-form__thumbnail-img' src={thumbnail} alt="thumbnail image" />
            </div>
            <form className='upload-form__form'>
                <label className='upload-form__form-lable' htmlFor="title">TITLE YOUR VIDEO</label>
                <input className='upload-form__inputbox' name='title' id='title' type="text" placeholder='Add a title to your video' />
                <label className='upload-form__form-lable' htmlFor="decription">ADD A VIDEO DESCRIPTION</label>
                <textarea className='upload-form__textarea' name="description" id="description" cols="5" rows="10 placeholder='Add a description to your video'"></textarea>

            </form>
        </div>
        <div>
            <button className='btn-publish' type="submit">PUBLISH</button>
            <button className='btn-cancel'>CANCEL</button>
        </div>


    </section>
  )
}

export default UploadForm