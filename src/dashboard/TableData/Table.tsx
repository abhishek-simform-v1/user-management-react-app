import { memo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { DummyDataInter } from "../../slice/Slice";

const Table = () => {
  const data: DummyDataInter[] = useAppSelector((state) => state.user.users);
  const currentUser: DummyDataInter = useAppSelector(
    (state) => state.user.currentUser
  );

  const state = useAppSelector((state) => state.user.logedIn);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>{currentUser.name}</div>
      <div>{currentUser.name}</div>
      <div>{currentUser.name}</div>
      <div>{currentUser.name}</div>
      <div>{currentUser.name}</div>
      <p>
        {data.map((data) => (
          <p>
            <img src={data.profile_img} />
          </p>
        ))}
      </p>
    </>
  );
};

export default memo(Table);
