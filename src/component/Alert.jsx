import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, X } from "lucide-react";

const Alert = ({ type, message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 5000); // Auto-close setelah 5 detik

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div className={`
      fixed top-6 right-6 z-50 w-80 p-4 rounded-lg border 
      ${type === "success" 
        ? "bg-emerald-900/30 border-emerald-500/50" 
        : "bg-red-900/30 border-red-500/50"
      }
      backdrop-blur-sm shadow-lg
      animate-fade-in-up
    `}>
      <div className="flex items-start gap-3">
        {type === "success" ? (
          <CheckCircle2 className="flex-shrink-0 text-emerald-400" size={24} />
        ) : (
          <XCircle className="flex-shrink-0 text-red-400" size={24} />
        )}
        <div className="flex-1">
          <h4 className="font-medium text-white">
            {type === "success" ? "Success!" : "Error!"}
          </h4>
          <p className="text-sm text-gray-300 mt-1">{message}</p>
        </div>
        <button 
          onClick={() => {
            setIsVisible(false);
            onClose();
          }}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>
      </div>
      
      {/* Progress bar */}
      <div className="w-full bg-gray-800/50 h-1 mt-3 rounded-full overflow-hidden">
        <div 
          className={`
            h-full 
            ${type === "success" ? "bg-emerald-500" : "bg-red-500"}
            animate-progress
          `}
        />
      </div>
    </div>
  );
};

export default Alert;