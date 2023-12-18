import { useState } from "react";
import { useEffect } from "react";
import { getAllUser } from "../services/getAllUser";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../services/deleteUser";
import Modal from "../../../components/Modal";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllDataUser = async () => {
      try {
        const result = await getAllUser();
        setUsers(() => result.data.data);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllDataUser();
  }, []);

  const [confirmDel, setConfirmDel] = useState({
    show: false,
    id: null,
  });

  const deleteHandlerFalse = () => {
    setConfirmDel({
      show: false,
      id: null,
    });
  };

  const deleteHandlerTrue = async () => {
    if (!confirmDel.show || !confirmDel.id) return;
    setLoading(true);
    try {
      const result = await deleteUser(confirmDel.id);
      if (result?.response?.data) {
        setLoading(() => false);
        return;
      }
      setLoading(() => false);

      setTimeout(() => {
        if (result) {
          window.location.reload();
        }
      });
      return clearTimeout;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="overflow-x-auto border rounded-md shadow-md">
        <table className="table">
          <thead>
            <tr className="text-white text-base bg-primary">
              <th></th>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user.id} className="hover text-base">
                <th className="text-center">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.email}</td>
                <td className="flex justify-center gap-4">
                  <button
                    className="btn btn-info text-white btn-sm"
                    onClick={() => navigate(`${user.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-error text-white btn-sm"
                    onClick={() => setConfirmDel({ show: true, id: user.id })}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {confirmDel.show && (
          <Modal
            deleteHandlerFalse={deleteHandlerFalse}
            deleteHandlerTrue={deleteHandlerTrue}
            loading={loading}
          />
        )}
      </div>
    </>
  );
};

export default UsersTable;
