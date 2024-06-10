import { useState } from "react";
import "./index.css"
import WhiteBoard from "../../components/Whiteboard"

const RoomPage = () => {
    const [tool, setTool] = useState("pencil");
    const [color, setColor] = useState("black");
    return (
        <div className="container-fluid">
            <div className="row">
                <h1 className="display-5 pt-4 pb-3 text-center">
                    React Drawing App - users online:
                    {/* {userNo} */}
                </h1>
            </div>
            <div className="row justify-content-center align-items-center text-center py-2">
                <div className="col-md-2">
                    <div className="color-picker d-flex align-items-center justify-content-center">
                        Color Picker : &nbsp;
                        <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="tools"
                            id="pencil"
                            value="pencil"
                            checked={tool === "pencil"}
                            onClick={(e) => setTool(e.target.value)}
                            readOnly={true}
                        />
                        <label className="form-check-label" htmlFor="pencil">
                            Pencil
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="tools"
                            id="line"
                            value="line"
                            checked={tool === "line"}
                            onClick={(e) => setTool(e.target.value)}
                            readOnly={true}
                        />
                        <label className="form-check-label" htmlFor="line">
                            Line
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="tools"
                            id="rect"
                            value="rect"
                            checked={tool === "rect"}
                            onClick={(e) => setTool(e.target.value)}
                            readOnly={true}
                        />
                        <label className="form-check-label" htmlFor="rect">
                            Rectangle
                        </label>
                    </div>
                </div>

                <div className="col-md-2">
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                    // disabled={elements.length === 0}
                    // onClick={() => undo()}
                    >
                        Undo
                    </button>
                    &nbsp;&nbsp;
                    <button
                        type="button"
                        className="btn btn-outline-primary ml-1"
                    // disabled={history.length < 1}
                    // onClick={() => redo()}
                    >
                        Redo
                    </button>
                </div>
                <div className="col-md-1">
                    <div className="color-picker d-flex align-items-center justify-content-center">
                        <input
                            type="button"
                            className="btn btn-danger"
                            value="clear canvas"
                        // onClick={clearCanvas}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                {/* <Canvas
                    canvasRef={canvasRef}
                    ctx={ctx}
                    color={color}
                    setElements={setElements}
                    elements={elements}
                    tool={tool}
                    socket={socket}
                /> */}
                <WhiteBoard />

            </div>
        </div>

    )
}

export default RoomPage;