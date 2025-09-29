"use client";
import { createContext, useContext, useReducer, type ReactNode } from "react";

type ToastType = "success" | "error";

interface ToastState {
  message: string;
  type: ToastType;
  isVisible: boolean;
}

type ToastAction =
  | { type: "SHOW_TOAST"; payload: { message: string; type: ToastType } }
  | { type: "HIDE_TOAST" };

type ToastContextType = {
  state: ToastState;
  showToast: (message: string, type: ToastType) => void;
  hideToast: () => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

const initialState: ToastState = {
  message: "",
  type: "success",
  isVisible: false,
};

function toastReducer(state: ToastState, action: ToastAction): ToastState {
  switch (action.type) {
    case "SHOW_TOAST":
      return {
        message: action.payload.message,
        type: action.payload.type,
        isVisible: true,
      };
    case "HIDE_TOAST":
      return { ...state, isVisible: false };
    default:
      return state;
  }
}

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(toastReducer, initialState);

  const showToast = (message: string, type: ToastType) => {
    dispatch({ type: "SHOW_TOAST", payload: { message, type } });

    // hides after 3s
    setTimeout(() => {
      dispatch({ type: "HIDE_TOAST" });
    }, 3000);
  };

  const hideToast = () => {
    dispatch({ type: "HIDE_TOAST" });
  };

  return (
    <ToastContext.Provider value={{ state, showToast, hideToast }}>
      {children}

      {state.isVisible && (
        <div className="fixed w-[90vw] sm:w-fit bottom-20 left-1/2 -translate-x-1/2 z-50">
          <div
            className={`text-center px-6 py-1 rounded-sm shadow-md text-[14px] font-medium transition-all duration-300 ${
              state.type === "success"
                ? "bg-[#20e357]  text-white"
                : "bg-[#fa1b1b]  text-white"
            }`}
          >
            {state.message}
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
