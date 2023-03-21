
import React, { useEffect } from 'react'
import CreatePost from '../../Components/CreatePost/CreatePost';
import MainTimeLine from '../../Components/MainTimeLine/MainTimeLine';
import {useDispatch} from 'react-redux';
import './Timeline.scss';
import { fetchPost } from './timelineApi';

const TimeLine = () => {


const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchPost())
}, [dispatch])

  return (
    <div className='timeline-wrapper'>
        <div className="timeline-middle">
            <CreatePost />
            <MainTimeLine />
        </div>
    </div>
  )
}

export default TimeLine;