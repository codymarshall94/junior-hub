const SlideOver = ({ show, hide, children }: any) => {
  return (
    <div
      className={`${
        show ? "block animate-slideInRight" : "hidden animate-slideOutRight "
      } fixed top-0 right-0 w-1/4 bg-white z-50 shadow-lg overflow-y-auto`}
    
    >
      <div className="flex justify-end items-center p-1">
        <button
          onClick={hide}
          className="focus:outline-none bg-gray-100 p-1 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {children}
    </div>
  );
};

export default SlideOver;
