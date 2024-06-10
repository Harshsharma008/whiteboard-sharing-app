import CreateRoomForm from "./CreateRoomForm";
import JoinRoomForm from "./JoinRoomForm";
import "./index.css";
const Forms = () => {

    return (
        <div className="row h-100 pt-5">
            <div className="col-md-4 mx-auto mt-5  border d-flex flex-column items-center justify-center rounded-4  p-5  form-box">
                <h1 className="text-primary fw-bold ">Create Room</h1>
                <CreateRoomForm />
            </div>
            <div className="col-md-4 mx-auto mt-5  p-5 border d-flex flex-column items-center justify-center rounded-4  form-box ">
                <h1 className="text-primary fw-bold ">Join Room</h1>
                <JoinRoomForm />
            </div>
        </div>
    )
}

export default Forms;