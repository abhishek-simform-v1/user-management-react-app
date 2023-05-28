import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { DummyDataInter } from '../../slice/Slice';

const Table = () => {
  const currentUser = JSON.parse(localStorage.getItem('CurrentData')!); //
  const userData = JSON.parse(localStorage.getItem('UserData')!); //

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
      <div className="profilecontainer">
        <h1>Total Users</h1>
        <div className="profileGrid ">
          {userData.map((data: DummyDataInter, index: number) => (
            <div key={index}>
              <div className="profileCard">
                <div>
                  <img src={data.profile_img || profiler} className="fileImg" />
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
