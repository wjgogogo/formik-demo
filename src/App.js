import React, {Component} from 'react';
import {Formik, Field, Form, ErrorMessage} from "formik";

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
            <Form>
              <div className="content">
                <div>
                  <label>姓名： </label><Field name="name"/>
                  <ErrorMessage name="name"/>
                  {props.touched.name && props.errors.name && <div>{props.errors.name}</div>}
                </div>
                <div>
                  <label>性别： </label>
                  <Field name="gender" render={({field}) =>
                    <input type="radio" name={field.name} value="male" checked={field.value === "male"}
                           onChange={field.onChange}
                           onBlur={field.onBlur}/>
                  }/>
                  <label htmlFor="male">男</label>
                  <Field name="gender" render={({field}) =>
                    <input type="radio" name={field.name} value="female" checked={field.value === "female"}
                           onChange={field.onChange}
                           onBlur={field.onBlur}/>
                  }/> <label htmlFor="female">女</label>
                  <ErrorMessage name="gender"/>
                </div>
                <div>
                  <label>年龄： </label><Field name="age"/>
                  <ErrorMessage name="age"/>
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
            </Form>
          }
        />
      </div>
    );
  }
}


export default App;
