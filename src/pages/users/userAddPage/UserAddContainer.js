import UserAddPage from ".";

const UserAddContainer = () => {
  const addUser = async (event) => {
    event.preventDefault();

    let user = new Object();

    user.user = event;
  };

  return <UserAddPage></UserAddPage>;
};

export default UserAddContainer;
