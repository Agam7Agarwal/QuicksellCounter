
const DisplayCounter = (props) => {
    let {counter = 0} = props;
    return <div className="display-val">Counter Value: <span>{counter}</span></div>
};

export default DisplayCounter;
