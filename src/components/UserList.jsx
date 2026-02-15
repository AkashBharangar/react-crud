const UserList = ({ users, onEdit, onDelete }) => {
    return (
        <table border="1" cellPadding="10">
            <thead>
                <tr>
                    {users.length > 0 &&
                        Object.keys(users[0]).map((key) =>
                            key !== "id" ? <th key={key}>{key}</th> : null
                        )}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        {Object.entries(user).map(([key, value]) =>
                            key !== "id" ? <td key={key}>{value}</td> : null
                        )}
                        <td>
                            <button
                                className="edit-btn"
                                onClick={() => onEdit(user)}
                            >
                                Edit
                            </button>
                            <button
                                className="delete-btn"
                                onClick={() => onDelete(user.id)}
                            >
                                Delete
                            </button>
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserList;
