import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const handleOffline = () => {
      setStatus('offline');
    };

    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div
      className={`status ${
        status === 'online' ? 'status_online' : 'status_offline'
      }`}
    >
      {status === 'online' ? 'Online' : 'Offline'}
    </div>
  );
};

export default ConnectionStatus;
