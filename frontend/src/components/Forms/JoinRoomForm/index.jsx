
const JoinRoomForm = () => {
    return (
        <form className="form col-md-12 mt-5" >
            <div className="form-group my-2">
                <input
                    type="text"
                    placeholder="Enter your Name"
                    className="form-control my-2 "

                />
            </div>
            <div className="form-group m">
                <input
                    type="text"

                    className="form-control my-2"
                    placeholder="Enter Room code"
                />

            </div>
            <button type="submit" className="mt-4 btn-primary btn-block form-control">Join Room</button>
        </form>
    )
}

export default JoinRoomForm;