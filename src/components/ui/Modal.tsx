import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useModalBehavior } from '../../hooks/useModalBehavior'

interface ModalProps {
  open: boolean
  onClose: () => void
  labelledBy: string
  overlayClassName?: string
  children: ReactNode
}

export function Modal({ open, onClose, labelledBy, overlayClassName = 'bg-black/80', children }: ModalProps) {
  useModalBehavior(open, onClose)

  if (!open) return null

  // Rendered in document.body so ancestors with transform/animation
  // cannot break the fixed positioning relative to the viewport.
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
      className={`fixed inset-0 z-[100] backdrop-blur-sm flex items-center justify-center p-4 animate-view-in ${overlayClassName}`}
      onClick={onClose}
    >
      <div className="contents" onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body,
  )
}

export function ModalCloseButton({ onClick, className = '' }: { onClick: () => void; className?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Cerrar"
      className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors ${className}`}
    >
      <i className="fa-solid fa-xmark text-lg" />
    </button>
  )
}
