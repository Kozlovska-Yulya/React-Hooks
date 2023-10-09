import React, { useState, useEffect } from 'react';

function ConnectionStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleNetworkChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleNetworkChange);
    window.addEventListener('offline', handleNetworkChange);

    return () => {
      window.removeEventListener('online', handleNetworkChange);
      window.removeEventListener('offline', handleNetworkChange);
    };
  }, []);

  return (
    <div className={`status ${isOnline ? 'status_online' : 'status_offline'}`}>
      {isOnline ? 'Online' : 'Offline'}
    </div>
  );
}

export default ConnectionStatus;
