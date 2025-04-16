import React, { createContext, useContext, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToastContainer, { ToastData } from './ToastContainer';
import { ToastType } from './Toast';

interface ToastContextType {
  showToast: (
    message: string,
    options?: {
      title?: string;
      type?: ToastType;
      duration?: number;
    }
  ) => string;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

interface ToastProviderProps {
  children: React.ReactNode;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  maxToasts?: number;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  position = 'bottom-right',
  maxToasts = 5,
}) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const showToast = useCallback(
    (
      message: string,
      options?: {
        title?: string;
        type?: ToastType;
        duration?: number;
      }
    ) => {
      const id = uuidv4();
      const toast: ToastData = {
        id,
        message,
        title: options?.title,
        type: options?.type || 'info',
        duration: options?.duration,
      };

      setToasts((prevToasts) => [...prevToasts, toast]);
      return id;
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      <ToastContainer
        position={position}
        maxToasts={maxToasts}
        toasts={toasts}
        onRemove={removeToast}
      />
    </ToastContext.Provider>
  );
};

export default ToastProvider; 