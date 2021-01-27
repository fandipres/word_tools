'use strict';

class App extends React.Component {
    render() {
        return (
            <div>
                <MainPost></MainPost>
                <Footer></Footer>
            </div>
        );
    }
}

class MainPost extends React.Component {
    constructor() {
        super()
        this.state = { choosenSection: 1 }
    }
    chooseOne = () => {
        this.setState({ choosenSection: 1 });
    }
    chooseTwo = () => {
        this.setState({ choosenSection: 2 });
    }
    chooseThree = () => {
        this.setState({ choosenSection: 3 });
    }
    chooseFour = () => {
        this.setState({ choosenSection: 4 });
    }
    chooseFive = () => {
        this.setState({ choosenSection: 5 });
    }
    chooseSix = () => {
        this.setState({ choosenSection: 6 });
    }
    render() {
        let choosenSection = this.state.choosenSection;
        let showSection = null

        if (choosenSection == 1)
            showSection = <SectionOne></SectionOne>
        else if (choosenSection == 2)
            showSection = <SectionTwo></SectionTwo>
        else if (choosenSection == 3)
            showSection = <SectionThree></SectionThree>
        else if (choosenSection == 4)
            showSection = <SectionFour></SectionFour>
        else if (choosenSection == 5)
            showSection = <SectionFive></SectionFive>
        else
            showSection = <SectionSix></SectionSix>

        return (
            <div>
                <div className="col-sm-3 sidenav">
                    <h4>F2E Team - Web Tools</h4>
                    <ul id="uid" className="nav nav-pills nav-stacked">
                        <li className="nav-item active"><a href="#" onClick={this.chooseOne}>Hello World</a></li>
                        <li className="nav-item"><a href="#" onClick={this.chooseTwo}>Word Tools</a></li>
                        <li className="nav-item"><a href="#" onClick={this.chooseThree}>Text to HTML</a></li>
                        <li className="nav-item"><a href="#" onClick={this.chooseFour}>Password Generator</a></li>
                        <li className="nav-item"><a href="#" onClick={this.chooseFive}>Random Number</a></li>
                        <li className="nav-item"><a href="#" onClick={this.chooseSix}>Our Teams</a></li>
                    </ul>
                </div>
                <div className="col-sm-9">
                    {showSection}
                </div>
            </div>
        );
    }
}

class SectionOne extends React.Component {
    render() {
        return (
            <section id="section1">
                <h2>Hello World!</h2>
                <p>Aplikasi ini merupakan aplikasi berbasis web yang dapat kamu pergunakan untuk membantu kamu dalam menyelesaikan pekerjaan yang kamu miliki. Pada dasarnya aplikasi ini berisi kumpulan-kumpulan tools yang dibangun dengan menggunakan bahasa pemrograman Javascript.</p>
                <p>Adapun beberapa tools yang telah kami sediakan, yaitu:<br />
                1. Word Tools<br />
                2. Text to HTML<br />
                3. Password Generator<br /></p>
                <p>Enjoooy!</p>
            </section>
        );
    }
}

class SectionTwo extends React.Component {
    constructor() {
        super()
        this.state = { value: "", charCount: 0 }
        this.sentenceCase = this.sentenceCase.bind(this)
        this.capitalizedCase = this.capitalizedCase.bind(this)
        this.lowerCase = this.lowerCase.bind(this)
        this.upperCase = this.upperCase.bind(this)
        this.reverseWord = this.reverseWord.bind(this)
        this.clearCase = this.clearCase.bind(this)
    }
    hitungKarakter = (e) => {
        var value = e.target.value
        var count = value.length
        this.setState({ value: value, charCount: count })
    }
    sentenceCase = () => {
        var result = "";
        var dot = 0;
        for (let i = 0; i < this.state.value.length; i++) {
            if (i == 0 || dot == 1) {
                if (this.state.value[i] == " ") {
                    result += " ";
                    dot = 1;
                }
                else {
                    result += this.state.value[i].toUpperCase();
                    dot = 0;
                }
            }
            else {
                if (this.state.value[i] == '.') {
                    dot = 1;
                }
                result += this.state.value[i].toLowerCase();
            }
        }

        this.setState({ value: result, charCount: this.state.charCount })
    }
    capitalizedCase = () => {
        var result = "";
        var space = 0;
        for (let i = 0; i < this.state.value.length; i++) {
            if (i == 0 || space == 1) {
                result += this.state.value[i].toUpperCase();
                space = 0;
            }
            else {
                if (this.state.value[i] == ' ') {
                    space = 1;
                }
                result += this.state.value[i].toLowerCase();
            }
        }
        this.setState({ value: result, charCount: this.state.charCount })
    }
    lowerCase = () => {
        this.setState({ value: this.state.value.toLowerCase(), charCount: this.state.charCount })
    }
    upperCase = () => {
        this.setState({ value: this.state.value.toUpperCase(), charCount: this.state.charCount })
    }
    inverseCase = () => {
        var result = ""
        var character = ''
        var i = 0;
        while(i <= this.state.value.length) {
            character = this.state.value.charAt(i)
            if(!isNaN(character * 1))
                result += character
            else{
                if(character == character.toUpperCase())
                    result += character.toLowerCase()
                else
                    result += character.toUpperCase()
            }
            i++;
        }
        this.setState({ value: result, charCount: this.state.charCount })
    }
    reverseWord = () => {
        var result = ""
        var reverseCase = Array.from(this.state.value)
        reverseCase.reverse()
        var iterator = reverseCase.keys()
        for (const key of iterator) {
            result += reverseCase[key];
        }
        this.setState({ value: result, charCount: this.state.charCount })
    }
    clearCase = () => {
        this.setState({ value: "", charCount: 0 })
    }
    render() {
        let charCount = this.state.charCount;
        return (
            <section id="section2">
                <h2>Word Tools</h2>
                <h5>Jumlah Karakter : {charCount}</h5>
                <div className="form-group">
                    <textarea value={this.state.value} className="form-control" rows="10" id="teks" onChange={this.hitungKarakter.bind(this)}></textarea>
                </div>
                <div className="myButton">
                    <h4>Convert String</h4>
                    <button type="button" className="btn btn-primary" onClick={this.sentenceCase}>Sentence Case</button>
                    <button type="button" className="btn btn-primary" onClick={this.capitalizedCase}>Capitalized Case</button>
                    <button type="button" className="btn btn-primary" onClick={this.lowerCase}>Lower Case</button>
                    <button type="button" className="btn btn-primary" onClick={this.upperCase}>Upper Case</button>
                </div>
                <div className="myButton">
                    <h4>Another Tools</h4>
                    <button type="button" className="btn btn-primary" onClick={this.inverseCase}>Inverse Case</button>
                    <button type="button" className="btn btn-primary" onClick={this.reverseWord}>Reverse Word</button>
                </div>
                <div className="myButton">
                    <h4>Clear</h4>
                    <button type="button" className="btn btn-primary" onClick={this.clearCase}>Clear</button>
                </div>
            </section>
        );
    }
}

class SectionThree extends React.Component {
    constructor() {
        super()
        this.state = { value: "", result: "" }
        this.readText = this.readText.bind(this)
        this.texttoHTML = this.texttoHTML.bind(this)
        this.resetCase = this.resetCase.bind(this)
        this.clearCase = this.clearCase.bind(this)
    }
    readText = (e) => {
        var value = e.target.value
        this.setState({ value: value, result: this.state.result })
    }
    texttoHTML = () => {
        var result = "";
        var myHTML = ["&", "<", ">", "\'", "\"", " "];
        var codeHTML = ["&amp;", "&lt;", "&gt;", "&apos;", "&quot", "&nbsp;"];

        for (var i = 0; i < this.state.value.length; i++) {
            if (myHTML.indexOf(this.state.value[i]) != -1) {
                result += codeHTML[myHTML.indexOf(this.state.value[i])];
            }
            else {
                result += this.state.value[i];
            }
        }
        this.setState({ value: this.state.value, result: result })
    }
    resetCase = () => {
        this.setState({ value: "", result: this.state.result })
    }
    clearCase = () => {
        this.setState({ value: this.state.value, result: "" })
    }
    render() {
        return (
            <section id="section3">
                <h2>Text to HTML</h2>
                <div className="form-group">
                    <h4>Convert to HTML</h4>
                    <textarea value={this.state.value} className="form-control" rows="8" id="teks" onChange={this.readText.bind(this)}></textarea>
                </div>
                <div className="myButton">
                    <button type="button" className="btn btn-primary" onClick={this.texttoHTML}>Text to HTML</button>
                    <button type="button" className="btn btn-primary" onClick={this.resetCase}>Reset</button>
                </div>
                <div className="form-group">
                    <h4>Result in HTML</h4>
                    <textarea value={this.state.result} className="form-control" rows="8" id="teks"></textarea>
                </div>
                <div className="myButton">
                    <button type="button" className="btn btn-primary" onClick={this.clearCase}>Clear</button>
                </div>
            </section>
        )
    };
}

class SectionFour extends React.Component {
    constructor() {
        super()
        this.state = { passwordLength: "", value: "" }
        this.readText = this.readText.bind(this)
        this.generatePassword = this.generatePassword.bind(this)
        this.clearCase = this.clearCase.bind(this)
    }
    readText = (e) => {
        var value = e.target.value
        this.setState({ passwordLength: value, value: this.state.value })
    }
    generatePassword = () => {
        var result = ""
        var choose = "~`!@#$%^&*()_-+={[}]|\:;<,>.?/1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

        for (var i = 0; i < parseInt(this.state.passwordLength); i++) {
            result += choose[Math.floor(Math.random() * 91) + 1]
        }
        this.setState({ passwordLength: this.state.passwordLength, value: result })
    }
    clearCase = () => {
        this.setState({ passwordLength: "", value: "" })
    }
    render() {
        return (
            <section id="section4">
                <h2>Password Generator</h2>
                <h4>Generate Password</h4>
                <div className="row">
                    <div className="col-sm-3" style={{ "paddingBottom": "10px" }}>
                        <input value={this.state.passwordLength} type="text" className="form-control" id="formGroupExampleInput" placeholder="Panjang Password" onChange={this.readText.bind(this)} />
                    </div>
                    <div className="myButton">
                        <button type="button" className="btn btn-primary" onClick={this.generatePassword}>Generate</button>
                        <button type="button" className="btn btn-primary" onClick={this.clearCase}>Clear</button>
                    </div>
                </div>
                <div className="form-group">
                    <textarea value={this.state.value} className="form-control" rows="8" id="teks"></textarea>
                </div>
            </section>
        )
    };
}

class SectionFive extends React.Component {
    constructor() {
        super()
        this.state = { number1: "", number2: "", value: "" }
        this.readText1 = this.readText1.bind(this)
        this.readText2 = this.readText2.bind(this)
        this.randomNumber = this.randomNumber.bind(this)
        this.clearCase = this.clearCase.bind(this)
    }
    readText1 = (e) => {
        var value = e.target.value
        this.setState({ number1: value, number2: this.state.number2, value: this.state.value })
    }
    readText2 = (e) => {
        var value = e.target.value
        this.setState({ number1: this.state.number1, number2: value, value: this.state.value })
    }
    randomNumber = () => {
        var num1 = parseInt(this.state.number1)
        var num2 = parseInt(this.state.number2)
        var result = num1 + Math.floor(Math.random() * (num2 - num1 + 1))
        this.setState({ number1: this.state.number1, number2: this.state.number2, value: result })
    }
    clearCase = () => {
        this.setState({ number1: "", number2: "", value: "" })
    }
    render() {
        return (
            <section id="section5">
                <h2>Random Number</h2>
                <h4>Pick Random Number</h4>
                <div className="row">
                    <div className="col-sm-3" style={{ "paddingBottom": "10px" }}>
                        <input value={this.state.number1} type="text" className="form-control" id="formGroupExampleInput" placeholder="Batas Bawah" onChange={this.readText1.bind(this)} />
                    </div>
                    <div className="col-sm-3" style={{ "paddingBottom": "10px", "paddingLeft": "0" }}>
                        <input value={this.state.number2} type="text" className="form-control" id="formGroupExampleInput" placeholder="Batas Atas" onChange={this.readText2.bind(this)} />
                    </div>
                    <div className="myButton">
                        <button type="button" className="btn btn-primary" onClick={this.randomNumber}>Random</button>
                        <button type="button" className="btn btn-primary" onClick={this.clearCase}>Clear</button>
                    </div>
                </div>
                <div className="form-group">
                    <textarea value={this.state.value} className="form-control" rows="8" id="teks"></textarea>
                </div>
            </section>
        )
    };
}

class SectionSix extends React.Component {
    constructor() {
        super()
        this.state = {
            teams: [{ nim: "181114290", nama: "Ebnu Mulkan Arsie", pic: "img/Ebnu.jpg", quotes: "Hidup itu ga perlu quotes-quotes.Jalani, berusaha, syukurin, kalau ada ya ada kalau ga ada jangan di paksakan." },
            { nim: "181112159", nama: "Fandi Presly Simamora", pic: "img/Fandi.jpg", quotes: "Hobi berbagi cerita lewat tulisan :)." },
            { nim: "181114087", nama: "Mhd. Dwi Al Fiqri", pic: "img/Fiqri.jpeg", quotes: "Live is never flat." }]
        };
    }
    render() {
        const { teams } = this.state
        return (
            <section id="section5">
                <h2>Our Teams</h2>
                <div className="row">
                    {teams.map((team, index) => (
                        <div className="col-md-3" key={index}>
                            <div className="thumbnail">
                                <img src={team.pic} />
                                <div className="caption">
                                    <h5 style={{ "fontWeight": "bold", marginBottom: 0 }}>{team.nama}</h5>
                                    <h5 style={{ "fontWeight": "bold", marginTop: 0 }}>{team.nim}</h5>
                                    <p>{team.quotes}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer className="container-fluid">
                <p>Created with <i className="fas fa-heart"></i> by <b>F2E Team</b></p>
            </footer>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"))