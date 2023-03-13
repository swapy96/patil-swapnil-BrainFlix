import React from 'react'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import commentAvatar from '../../assets/images/icon/avatar.png'
import './Comments.scss'

function Comments({selectedVideoComments}) {
  return (
    <section>
        <div className="communication">

            <p className='communication__comment-count'>{selectedVideoComments.length} Comments</p>
            
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
                {selectedVideoComments.map((comment)=>{
                    return (
                        <li key= {comment.id} className="post__item">
                            <div className="form__img-wrapper--posted-comment">
                                <img className="avatar-mobile-view--comment" src={commentAvatar} alt='avatar img'/>
                            </div>
                            <div className="post__wrapper">
                                <div className="post__name-dt-contatiner">
                                    <span className="post__name">{comment.name}</span>
                                    <span className="post__date">{new Date(comment.timestamp).toLocaleDateString()}</span>
                                </div>
                                <div className="post__comment">{comment.comment}</div>
                            </div>
                        </li>
                        )
                    }
                )}

            </ul>
        </div>
        
    </section>
  )
}

export default Comments