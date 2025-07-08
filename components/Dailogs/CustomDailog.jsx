import React, { useRef, useEffect } from "react";

const CustomDailog = ({ isOpen, onClose, children, uotside, width = "max-w-3xl" }) => {
    const dialogRef = useRef();

    // Function to handle click outside dialog
    const handleClickOutside = (event) => {
        if (
            uotside &&
            dialogRef.current &&
            !dialogRef.current.contains(event.target)
        ) {
            onClose();
        }
    };

    useEffect(() => {
        // Add event listener when dialog is open
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        // Clean up event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex z-20 items-center justify-center">
            <div
                ref={dialogRef}
                className={`bg-white rounded-lg overflow-hidden shadow-xl transform transition-all  w-full ${width}`}
            >
                <div>{children}</div>
            </div>
        </div>
    );
};

export default CustomDailog;
