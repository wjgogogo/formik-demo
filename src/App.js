import React, {Component} from 'react';
import {Formik, Field} from "formik";

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Formik
          initialValues={{
            name: "",
            gender: "",
            age: ""
          }}
          validate={values => {
            let errors = {};
            if (values.name.length === 0) {
              errors.name = "Name can not be empty"
            }
            if (values.gender.length === 0) {
              errors.gender = "You must choose a gender"
            }

            if (values.age <= 0 || values.age % 1 !== 0) {
              errors.age = "Age must be a Positive Integer"
            }
            return errors;
          }}
          onSubmit={(values) => {
            console.log(values)
          }}
          render={props =>
            <form onSubmit={props.handleSubmit}>
              <div className="content">
                <div>
                  <label>姓名： </label><input type="text" id="name" name="name" value={props.values.name}
                                            onChange={props.handleChange} onBlur={props.handleBlur}/>
                </div>
                <div>
                  <label>性别： </label>
                  <input type="radio" id="male" value="male" name="gender" onChange={props.handleChange}
                         onBlur={props.handleBlur}/> <label htmlFor="male">男</label>
                  <input type="radio" id="female" value="female" name="gender" onChange={props.handleChange}
                         onBlur={props.handleBlur}/> <label htmlFor="female">女</label>
                </div>
                <div>
                  <label>年龄： </label><input type="number" id="age" name="age" value={props.values.age}
                                            onChange={props.handleChange} onBlur={props.handleBlur}/>
                </div>
                <div className="submit-area">
                  <button type="submit">提交</button>
                </div>
              </div>
              <div className="content" style={{backgroundColor: "#f6f8fa"}}>
            <pre className="debug">
              {JSON.stringify(props, null, 4)}
            </pre>
              </div>
            </form>
          }
        />
      </div>
    );
  }
}


export default App;
