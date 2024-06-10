const CreateRoomForm = () => {
    return (
        <form className="form col-md-12 mt-5" >
            <div className="form-group my-2">
                <input
                    type="text"
                    placeholder="Name"
                    className="form-control"

                />
            </div>
            <div className="input-group my-2 border d-flex align-items-center">
                <input
                    type="text"
                    disabled
                    className="form-control border-0 outline-0"
                    placeholder="Generate room code"
                />
                <div className="input-group-append d-flex gap-1">
                    <button
                        className="btn btn-outline-primary me-2 border-1 btn-sm"
                        type="button"

                    >Generate </button>
                    <button
                        className="btn btn-outline-danger me-1  btn-sm"
                        type="button"
                    >Copy </button>
                </div>
            </div>
            <button type="submit" className="mt-4 btn-primary btn-block form-control">Submit</button>
        </form>


    )
}

export default CreateRoomForm;