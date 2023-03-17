import React, { useContext, useEffect, useState } from 'react'
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import { Fab } from '@mui/material';
import {IoMdAdd} from 'react-icons/io';
import axios from 'axios';
import {BsCheckCircleFill} from 'react-icons/bs';
import UserContext from '../../context/UserContextProvider';
import ReviewIcon from '../../assest/review.svg';
import {MdDelete, MdEdit} from 'react-icons/md';
import domain from '../../util/domain';

SwiperCore.use([Autoplay]);


const Testimonials = () => {
  const {user} = useContext(UserContext);
  const[note, setNote] = useState({
    name: "",
    review: "",
    error: null,
    msg: null,
    dlt: null,
    id: null
  });
  const[data1, setData1] = useState();
  const[update, setUpdate] = useState(false);
 
  const{name, review, error, msg, dlt, id } = note;
  const{role} = user || {};
  
  function handleChange(event){
    const{name, value} = event.target;
    setNote({
      ...note,
      [name]: value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(name === "" || review === ""){
      return
    }

    try {
      setNote({...note,error: null,msg:null,dlt:null});

      await axios.post(`${domain}/review/create`, {name, review},{withCredentials:true});

      setNote({...note, name:"",review:"", msg: "Review Added Successfully"});
      getReviews();
    } catch (error) {
      setNote({
        ...note,
        error: error.response.data.error,
      })
    }
  }

  async function getReviews() {
    try {
      await axios.get(`${domain}/review/`)
      .then(response => setData1(response.data))
    } catch (error) {
      setNote({
        ...note,
        error: error.response.data.error
      })
    }
  }

  useEffect(() => {
    getReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  async function handleDelete(id) {
    try {
      await axios.delete(`${domain}/review/delete/${id}`);
      setNote({ ...note, name: "", review: "", dlt: "Review Deleted Successfully" });
      window.location.reload();
    } catch (error) {
      setNote({
        ...note,
        error: error.response.data.error
      });
    }
  }

  const handleUpdate = async(_id,r_name,r_review) => {
    try {
        setNote({
          ...note,
          id: _id,
          name: r_name,
          review: r_review
        });
        
        setUpdate(true);


    } catch (error) {
      setNote({
        ...note,
        error: error.response.data.error
      })
    }
  }

  const Update = async(__id) => {
    try {
      await axios.put(`${domain}/review/update/${__id}`, {name, review});
      setNote({...note, name:"",review:"", msg: "Review Updated Successfully"});
      setUpdate(false);
      getReviews();
    } catch (error) {
      setNote({
        ...note,
        error: error.response.data.error
      })
    }
  }


  return (
    <section id="testimonials">
      <h5 className='tst_header first'>Review from clients</h5>
      <h2 className='tst_header second'>Testimonials</h2>

      <Swiper
      className='testimonial__container'
        modules={[Pagination]}
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{
          delay: 5000
        }}
        
      >
        {data1?.map(({name, review, _id}, index) => {
          return(
            <SwiperSlide key={index} className="testimonials">
              <h5 className='client__review'>{review}</h5>
              <small className='client__name'>~ {name}</small>
              {role === 'admin' ? 
                <button className='btn client__delete' onClick={() => {handleDelete(_id)}}> <MdDelete size="18px"/> </button>
              :null
              }
              {
                role === 'admin' ?
                <button className="btn client__update" onClick={() => {handleUpdate(_id,name,review)}}> <MdEdit size="18px" /> </button>
                :null
              }
            </SwiperSlide>
          )
        })}
      </Swiper>

      {dlt?<p className="message-delete"> <BsCheckCircleFill size="20px" style={{marginTop:'5px'}}/>  {dlt}</p> : null}


      {role === 'admin'?
      <div className="review-form">
        <input type="text" name='name' placeholder='Name of the Client' onChange={handleChange} value={name}/>
        <textarea name='review' placeholder='Review...' onChange={handleChange} value={review} rows="4"/>

        {update ?
          <Fab>
            <MdEdit onClick={() => {Update(id)}}/>
          </Fab> 
        :
          <Fab onClick={handleSubmit}>
            <IoMdAdd />
          </Fab>
        }
      </div>
      :<img src={ReviewIcon} height="200px" width="200px" className='review-icon' alt='404'/>}

      {
        msg ? <p className="message"> <BsCheckCircleFill size="20px" style={{marginTop:'5px'}}/>  {msg}</p> : null
      }

      {
        error ? <p className="message-delete">{error}</p>
        :null
      }
    
      
    </section>
  )
}

export default Testimonials