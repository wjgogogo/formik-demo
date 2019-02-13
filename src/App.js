import React, {Component} from 'react';
import {Formik, Field, Form, ErrorMessage, FieldArray} from "formik";
import * as Yup from "yup";

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Formik
          initialValues={{
            name: "",
            gender: "",
            age: "",
            addresses: [""]
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().trim().required("Name can not be empty"),
            gender: Yup.string().required("You must choose a gender"),
            age: Yup.number().moreThan(0, "Age must be greater than 0").integer("Age must be a integer"),
            addresses: Yup.array().compact().min(1, "Addresses must have 1 address at least")
          })}
          onSubmit={(values) => {
            console.log(values)
          }}
          render={props =>
            <Form>
              <div className="content">
                <div>
                  <label>姓名： </label><Field name="name"/>
                  <ErrorMessage name="name" component="div" className="error"/>
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
                  <ErrorMessage name="gender" component="div" className="error"/>
                </div>
                <div>
                  <label>年龄： </label><Field name="age"/>
                  <ErrorMessage name="age" component="div" className="error"/>
                </div>
                <div>
                  <label>地址： </label>
                  <FieldArray name="addresses" render={arrayHelper =>
                    <div>
                      {props.values.addresses.map((address, index) =>
                        <div className="address">
                          <Field name={`addresses.${index}`}/>
                          <div className="address_add" onClick={() => {
                            arrayHelper.push("")
                          }}>+
                          </div>
                        </div>
                      )}
                    </div>
                  }/>
                  <ErrorMessage name="addresses" component="div" className="error"/>
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
