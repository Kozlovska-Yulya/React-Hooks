import React, { useEffect, useState } from 'react';

const User = ({ match }) => {
  useEffect(() => {
    fetch(`https://api.github.com/users/${match.params.userId}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error();
      })
      .then((userData) => {
        setUserData(userData);
      });
  }, [match.params.userId]);

  const [userData, setUserData] = useState(null);
  if (!userData) {
    return null;
  }

  const { name, location, avatar_url } = userData;
  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
