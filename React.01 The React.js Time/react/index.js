// 
const sayHello = <Welcome name="Noise" />;
ReactDOM.render(
    sayHello,
    document.getElementById('sayhello')
);
function Welcome(props) {
    return <h1>Hello，{props.name}!<br />
        <p>The React.js Time</p>
    </h1>


};
// 
// 
function calendarTick() {
    const calendar = (
        <div>
            <div id="calendar">
                <div id="day">{new Date().getDate()}</div>
                <div id="year-mouth">{new Date().getFullYear()} / {new Date().getMonth() + 1}</div>
                <div id="time-now">{new Date().toLocaleTimeString().split("上午")}</div>
            </div>
        </div>
    );
    ReactDOM.render(
        calendar,
        document.getElementById('calendartick')
    );
}
setInterval(calendarTick, 1000);
// 
//
class Balloon extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            color: "#e4a382"
        }
    }

    changeColor(event){
        this.setState({
           color: event.target.value
        });
      }

    render() {
        const balloonstyle = {
            backgroundColor: this.state.color,
            fontSize: 32 / 2
        };
        return (
            <div id="balloon" style={balloonstyle}>
                <h3>{this.props.ask}</h3>
                <input value={this.state.color} onChange={this.changeColor.bind(this)} />
            </div>
        )
    }
}
ReactDOM.render(<Balloon ask="What color today?" />, document.getElementById('balloon'));
//
//
class PomodoroTimer extends React.Component {

    totalTime(timeOne, timeTwo) {
        return timeOne + timeTwo;
    }

    constructor() {
        super();
        this.state = {
            timeElapsed: 0
        };
    }

    componentDidMount() {
        //確認素材都準備完畢！
        this.setInterval = setInterval(this.elapseTime.bind(this), 1000)
        this.setState({ start: new Date() });
        //一旦 mount 完畢之後，我們就要設定現在的時間
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    elapseTime() {
        // 確認完畢觸發「開始計時」
        var currentTime = new Date();
        // console.log("CURRENT" + currentTime);
        // console.log(this.state.start);
        //timeElapsed = CURRENT TIME - START TIME
        var timeElapsed = Math.floor((currentTime - this.state.start) / 1000);
        console.log("timeElapsed" + timeElapsed);
        this.setState({ timeElapsed: timeElapsed });
        // console.log(this);

        //if timeElapsed >= 25 minutes -> then alert
        if (this.state.timeElapsed >= this.props.workingTime * 60) {
            clearInterval(this.interval);
            alert(" Time up for a break! ");
        }
    }

    render() {
        return (
            <div>This timer runs for {this.props.workingTime} minutes,
                <br />
        followed by rest of {this.props.restingTime} minutes.
                <br />
        For a total time of {this.totalTime(this.props.workingTime, this.props.restingTime)} minutes.
                <br />
        There are {this.state.timeElapsed} seconds elapsed.</div>
        )
    }

}
ReactDOM.render(
    <PomodoroTimer workingTime={25} restingTime={5} />,
    document.getElementById('pomodorotimer')

)
