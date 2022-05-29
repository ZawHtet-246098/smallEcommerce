import React from "react";
import { Alert } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import { uiSliceActions } from "../store/ui-slice";

const Notification = ({ type, message }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(uiSliceActions.showNotification({ open: "false" }));
  };
  const notification = useSelector((state) => state.ui.notification);
  return (
    <div>
      {notification && (
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      )}
    </div>
  );
};

export default Notification;
