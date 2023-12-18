const Modal = ({ deleteHandlerTrue, deleteHandlerFalse, loading }) => {
  return (
    <>
      <div className="flex justify-center align-center fixed inset-0 z-50 bg-black/20 ">
        <div className="relative w-full max-w-sm my-auto bg-white px-[50px] py-5 rounded-[10px] ">
          {/* Button Ok dan Cancel */}
          <div className="flex items-center flex-col gap-[10px]">
            <p className="font-semibold text-center">
              Apakah Kamu yakin ingin menghapus data ini?
            </p>
          </div>
          <div className="w-full flex justify-around gap-4 mt-5">
            <button
              className="btn btn-primary text-white w-24"
              onClick={deleteHandlerFalse}
            >
              Tidak
            </button>
            <button
              className="btn btn-error text-white w-24"
              onClick={deleteHandlerTrue}
              disabled={loading}
            >
              {!loading ? (
                <span>Ya</span>
              ) : (
                <span className="loading loading-spinner loading-xs "></span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
