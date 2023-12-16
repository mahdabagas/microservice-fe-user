const RegisterForm = () => {
  return (
    <>
      <form className="max-w-md border rounded-md p-4">
        <h1 className="text-lg font-medium">Registrasi</h1>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Nama</span>
          </div>
          <input
            id="nama"
            type="text"
            placeholder="Masukan nama"
            className="input input-bordered input-primary w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            id="email"
            type="text"
            placeholder="example@email.com"
            className="input input-bordered input-primary w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            id="password"
            type="text"
            placeholder="********"
            className="input input-bordered input-primary w-full"
          />
        </label>
        <button type="submit" className="btn btn-primary btn-md mt-4 w-full">
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
