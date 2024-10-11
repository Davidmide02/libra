const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-green-500 to-indigo-600 animate-spin-slow rounded-full">
        <div className="w-12 h-12 bg-white rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default Loading;
