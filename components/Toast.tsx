import React, { useEffect } from 'react';
import { ToastNotification } from '../types';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

interface ToastProps {
  notification: ToastNotification;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ notification, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColors = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-indigo-600'
  };

  const icons = {
    success: <CheckCircle size={18} />,
    error: <AlertCircle size={18} />,
    info: <Info size={18} />
  };

  return (
    <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-3 px-6 py-3 rounded-full text-white shadow-xl animate-fade-in-down ${bgColors[notification.type]}`}>
      {icons[notification.type]}
      <span className="font-medium text-sm">{notification.message}</span>
      <button onClick={onClose} className="opacity-80 hover:opacity-100 ml-2">
        <X size={14} />
      </button>
    </div>
  );
};

export default Toast;