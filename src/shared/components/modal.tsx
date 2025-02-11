import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footerContent?: React.ReactNode;
  showCloseButton?: boolean;
}

export function Modal({ isOpen, onClose, title, children, footerContent, showCloseButton = true }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-black/50 fixed inset-0 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div
        ref={modalRef}
        className="bg-white-500 relative m-auto flex max-h-[90vh] w-[95%] transform flex-col rounded-xl shadow-xl transition-all duration-300 ease-out sm:max-h-[85vh] sm:w-auto sm:max-w-lg"
      >
        <div className="flex flex-none items-center justify-between border-b p-2">
          <h2 id="modal-title" className="text-lg font-semibold text-gray-900">
            {title}
          </h2>
          {showCloseButton && (
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-4">{children}</div>

        {(footerContent || showCloseButton) && (
          <div className="flex-none rounded-b-xl border-t bg-white-500 p-4">
            {footerContent || (
              <button
                onClick={onClose}
                className="text-white w-full rounded-lg bg-indigo-600 px-4 py-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close Modal
              </button>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
