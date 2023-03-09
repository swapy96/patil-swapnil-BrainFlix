import React from 'react'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import commentAvatar from '../../assets/images/icon/avatar.png'
import './Comments.scss'

function Comments(props) {

    // let commentsArray=videoData[0].comments
    // console.log('inside the Comments jsx',commentsArray)
  return (
    <section>
        <div className="communication">

            <p className='communication__comment-count'>3 Comments</p>
            
            <form id="comment-form" action="" className="form">
                <div className="form__img-wrapper"><img className="avatar-mobile-view--comment" src={avatar} alt="avatar icon" />
                </div>
                
               <div className="form__wrapper">

                    <h2 className="communication__heading">JOIN THE CONVERSATION</h2>
                    <textarea className="form__ta-comment" name="comment" id="comment" cols="30" rows="10" placeholder="Add a new comment"></textarea>
        
                    <button type="submit" className="btn-comment btn-comment--tb">COMMENT</button>
               
               </div>
            </form>              
        </div>
        <div className="post">
            <ul className="post__list">
                {/* <!-- list items will be created dynamically in js --> */}
                <li className="post__item">
                    <div className="form__img-wrapper--posted-comment">
                        <img className="avatar-mobile-view--comment" src={commentAvatar} alt='avatar img'/>
                    </div>
                    <div className="post__wrapper">
                        <div className="post__name-dt-contatiner">
                            <span className="post__name">{props.videoData[0].comments[0].name}</span>
                            <span className="post__date">{new Date(props.videoData[0].comments[0].timestamp).toLocaleDateString()}</span>
                        </div>
                    <div className="post__comment">{props.videoData[0].comments[0].comment}</div>
                    </div>
                </li>
                <li className="post__item">
                    <div className="form__img-wrapper--posted-comment">
                        <img className="avatar-mobile-view--comment" src={commentAvatar} alt='avatar img'/>
                    </div>
                    <div className="post__wrapper">
                        <div className="post__name-dt-contatiner">
                            <span className="post__name">{props.videoData[0].comments[1].name}</span>
                            <span className="post__date">{new Date(props.videoData[0].comments[1].timestamp).toLocaleDateString()}</span>
                        </div>
                    <div className="post__comment">{props.videoData[0].comments[1].comment}</div>
                    </div>
                </li>
                <li className="post__item">
                    <div className="form__img-wrapper--posted-comment">
                        <img className="avatar-mobile-view--comment" src={commentAvatar} alt='avatar img'/>
                    </div>
                    <div className="post__wrapper">
                        <div className="post__name-dt-contatiner">
                            <span className="post__name">{props.videoData[0].comments[2].name}</span>
                            <span className="post__date">{new Date(props.videoData[0].comments[2].timestamp).toLocaleDateString()}</span>
                        </div>
                        <div className="post__comment">{props.videoData[0].comments[2].comment}</div>
                    </div>
                </li>

            </ul>
        </div>
        

    </section>
  )
}

export default Comments