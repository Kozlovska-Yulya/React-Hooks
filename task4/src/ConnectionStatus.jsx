import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const handleOnline = () => {
      setStatus('online');
    };

    const handleOffline = () => {
      setStatus('offline');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div
      className={`status ${
        status === 'online' ? 'status_online' : 'status_offline'
      }`}
    >
      {status === 'online' ? 'online' : 'offline'}
    </div>
  );
};

export default ConnectionStatus;
