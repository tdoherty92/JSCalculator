function App() {
    
    const [expression, setExpression] = React.useState("");
    const [answer, setAnswer] = React.useState(0);

    const display = (symbol) => {
        setExpression((prev) => prev + symbol);
    };

    const calculate = () => {
        setAnswer(eval(expression));
    };

    // all clear - wipes everything
    const allClear = () => {
        setExpression("");
        setAnswer(0);
    };
    // clear - backspace so just remove the last thing
    const clear = () => {
        setExpression(prev => prev
            .split("")
            .slice(0, prev.length - 1)
            .join("")
        );
        setAnswer(0);
    };

    return (
    <div className="container">
        <div className="grid">
            <div className="dis">
                <input type="text" value={expression} placeholder="0" disabled />
                <div className="total">{answer}</div>
            </div>
            <div onClick={allClear} className="padButton AC brown">
                AC
            </div>
            <div onClick={clear} className="padButton C brown">
                C
            </div>
            <div onClick={() => display("/")} className="padButton div">
                /
            </div>
            <div onClick={() => display("*")} className="padButton multiply">
                X
            </div>
            <div onClick={() => display("7")} className="padButton seven dark-gray">
                7
            </div>
            <div onClick={() => display("8")} className="padButton eight dark-gray">
                8
            </div>
            <div onClick={() => display("9")} className="padButton nine dark-gray">
                9
            </div>
            <div onClick={() => display("-")} className="padButton minus">
                -
            </div>
            <div onClick={() => display("4")} className="padButton four dark-gray">
                4
            </div>
            <div onClick={() => display("5")} className="padButton five dark-gray">
                5
            </div>
            <div onClick={() => display("6")} className="padButton six dark-gray">
                6
            </div>
            <div onClick={() => display("+")} className="padButton plus">
                +
            </div>
            <div onClick={() => display("1")} className="padButton one dark-gray">
                1
            </div>
            <div onClick={() => display("2")} className="padButton two dark-gray">
                2
            </div>
            <div onClick={() => display("3")} className="padButton three dark-gray">
                3
            </div>
            <div onClick={calculate} className="padButton equals blue">
                =
            </div>
            <div onClick={() => display("0")} className="padButton zero dark-gray">
                0
            </div>
            <div onClick={() => display(".")} className="padButton point dark-gray">
                .
            </div>


        </div>
        
    </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));