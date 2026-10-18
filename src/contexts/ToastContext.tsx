import { createContext, useCallback, useEffect, useRef, useState, type ReactNode } from 'react'

interface ToastState {
  title: string
  message: string
  visible: boolean
}

interface ToastContextValue {
  showToast: (title: string, message: string) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const ToastContext = createContext<ToastContextValue | null>(null)

const TOAST_DURATION_MS = 4000

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastState>({ title: '', message: '', visible: false })
  const timerRef = useRef<number | undefined>(undefined)

  const showToast = useCallback((title: string, message: string) => {
    window.clearTimeout(timerRef.current)
    setToast({ title, message, visible: true })
    timerRef.current = window.setTimeout(
      () => setToast((prev) => ({ ...prev, visible: false })),
      TOAST_DURATION_MS,
    )
  }, [])

  useEffect(() => () => window.clearTimeout(timerRef.current), [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 right-6 z-50 bg-brand-slateDeep text-white px-5 py-4 rounded-2xl shadow-2xl border border-brand-crimson/50 flex items-center gap-3.5 transition-all duration-300 ${
          toast.visible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-9 h-9 rounded-full bg-brand-crimson text-white flex items-center justify-center shrink-0">
          <i className="fa-solid fa-check" />
        </div>
        <div>
          <h5 className="text-sm font-bold text-white">{toast.title}</h5>
          <p className="text-xs text-slate-300">{toast.message}</p>
        </div>
      </div>
    </ToastContext.Provider>
  )
}
