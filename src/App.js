import React, {Component} from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="app">
        <form>
          <div className="content">
            <div>
              <label>姓名： </label><input type="text" id="name" name="name"/>
            </div>
            <div>
              <label>性别： </label>
              <input type="radio" id="male" name="gender"/> <label htmlFor="male">男</label>
              <input type="radio" id="female" name="gender"/> <label htmlFor="female">女</label>
            </div>
            <div>
              <label>年龄： </label><input type="number" id="age" name="age"/>
            </div>
            <div>
              <label>地址： </label>
              <div className="address">
                <input type="text" id="address" name="address"/>
                <button type="button">+</button>
              </div>
            </div>
            <div  className="submit-area">
              <button type="submit">提交</button>
            </div>
          </div>
          <div className="content" style={{backgroundColor:"#f6f8fa"}}>
            <pre className="debug">

            </pre>
          </div>
        </form>

      </div>
    );
  }
}


export default App;
