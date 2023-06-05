import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { DummyDataInter } from "../../slice/Slice";
import { Navigate, useNavigate } from "react-router-dom";

const Table = () => {
  const currentUser = JSON.parse(localStorage.getItem("CurrentData")!); //

  return (
    <>
      <div className="profilecontainer">
        <h1>Current Users</h1>

        <div className="profileGrid ">
          <div className="profileCard CurrentUserCard">
            <div>
              <img src={currentUser.profile_img} className="fileImg" />
            </div>

            <div>
              <h2>
                Hello <span>{currentUser.name}</span>, you are registered with
                the email id <span>{currentUser.email}</span> and phone number -
                <span>{currentUser.phone_number}</span>
                &nbsp; Along with a logout button on the top right.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Table);
