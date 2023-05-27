import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { DummyDataInter } from '../../slice/Slice';
import { userData } from '../../validation/validationScema';
import { currentUser } from '../../validation/validationScema';
const Table = () => {
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
              <div>
                <h3>User Name :-</h3>
                <p>{currentUser.name}</p>
              </div>
              <div>
                <h3>User Email :-</h3>
                <p>{currentUser.email}</p>
              </div>
              <div>
                <h3>User Phone Number :-</h3>
                <p>{currentUser.phone_number}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profilecontainer">
        <h1>Total Users</h1>
        <div className="profileGrid ">
          {userData.map((data: DummyDataInter, index: number) => (
            <div key={index}>
              <div className="profileCard">
                <div>
                  <img src={data.profile_img} className="fileImg" />
                </div>
                <div>
                  <div>
                    <h3>User Name :-</h3>
                    <p>{data.name}</p>
                  </div>
                  <div>
                    <h3>User Email :-</h3>
                    <p>{data.email}</p>
                  </div>
                  <div>
                    <h3>User Phone Number :-</h3>
                    <p>{data.phone_number}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(Table);
