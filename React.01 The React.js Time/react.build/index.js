"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 
var sayHello = React.createElement(Welcome, { name: "Noise" });
ReactDOM.render(sayHello, document.getElementById('sayhello'));
function Welcome(props) {
    return React.createElement(
        "h1",
        null,
        "Hello\uFF0C",
        props.name,
        "!",
        React.createElement("br", null),
        React.createElement(
            "p",
            null,
            "The React.js Time"
        )
    );
};
// 
// 
function calendarTick() {
    var calendar = React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { id: "calendar" },
            React.createElement(
                "div",
                { id: "day" },
                new Date().getDate()
            ),
            React.createElement(
                "div",
                { id: "year-mouth" },
                new Date().getFullYear(),
                " / ",
                new Date().getMonth() + 1
            ),
            React.createElement(
                "div",
                { id: "time-now" },
                new Date().toLocaleTimeString().split("上午")
            )
        )
    );
    ReactDOM.render(calendar, document.getElementById('calendartick'));
}
setInterval(calendarTick, 1000);
// 
//

var Balloon = function (_React$Component) {
    _inherits(Balloon, _React$Component);

    function Balloon(props) {
        _classCallCheck(this, Balloon);

        var _this = _possibleConstructorReturn(this, (Balloon.__proto__ || Object.getPrototypeOf(Balloon)).call(this, props));

        _this.state = {
            color: "#e4a382"
        };
        return _this;
    }

    _createClass(Balloon, [{
        key: "changeColor",
        value: function changeColor(event) {
            this.setState({
                color: event.target.value
            });
        }
    }, {
        key: "render",
        value: function render() {
            var balloonstyle = {
                backgroundColor: this.state.color,
                fontSize: 32 / 2
            };
            return React.createElement(
                "div",
                { id: "balloon", style: balloonstyle },
                React.createElement(
                    "h3",
                    null,
                    this.props.ask
                ),
                React.createElement("input", { value: this.state.color, onChange: this.changeColor.bind(this) })
            );
        }
    }]);

    return Balloon;
}(React.Component);

ReactDOM.render(React.createElement(Balloon, { ask: "What color today?" }), document.getElementById('balloon'));
//
//

var PomodoroTimer = function (_React$Component2) {
    _inherits(PomodoroTimer, _React$Component2);

    _createClass(PomodoroTimer, [{
        key: "totalTime",
        value: function totalTime(timeOne, timeTwo) {
            return timeOne + timeTwo;
        }
    }]);

    function PomodoroTimer() {
        _classCallCheck(this, PomodoroTimer);

        var _this2 = _possibleConstructorReturn(this, (PomodoroTimer.__proto__ || Object.getPrototypeOf(PomodoroTimer)).call(this));

        _this2.state = {
            timeElapsed: 0
        };
        return _this2;
    }

    _createClass(PomodoroTimer, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            //確認素材都準備完畢！
            this.setInterval = setInterval(this.elapseTime.bind(this), 1000);
            this.setState({ start: new Date() });
            //一旦 mount 完畢之後，我們就要設定現在的時間
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.interval);
        }
    }, {
        key: "elapseTime",
        value: function elapseTime() {
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
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                "This timer runs for ",
                this.props.workingTime,
                " minutes,",
                React.createElement("br", null),
                "followed by rest of ",
                this.props.restingTime,
                " minutes.",
                React.createElement("br", null),
                "For a total time of ",
                this.totalTime(this.props.workingTime, this.props.restingTime),
                " minutes.",
                React.createElement("br", null),
                "There are ",
                this.state.timeElapsed,
                " seconds elapsed."
            );
        }
    }]);

    return PomodoroTimer;
}(React.Component);

ReactDOM.render(React.createElement(PomodoroTimer, { workingTime: 25, restingTime: 5 }), document.getElementById('pomodorotimer'));