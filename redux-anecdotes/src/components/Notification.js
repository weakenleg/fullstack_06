import { useSelector, useDispatch } from 'react-redux';
import { clearNotification } from '../reducers/notificationReducer';
import React, { useEffect } from 'react';

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };

  return (
    <div style={style}>
      {notification}
    </div>
  );
};

export default Notification;


