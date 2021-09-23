const HomePage = ({data}) => {
  const {name, username, email, password} = data
  return (
    <div>
      <h3>
        Olá, {name} de user {username}
      </h3>
      <p>email: {email} </p>
      <p>sua senha é: {password} </p>
    </div>
  );
};

export default HomePage;
