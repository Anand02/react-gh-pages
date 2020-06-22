import React from "react";
import { Form, DatePicker, Input, Button } from "antd";

export const AddTodoForm = Form.create({ name: "form_in_modal" })(
  class extends React.Component {
    render() {
      const { form, handleSubmit, confirmLoading } = this.props;
      const { getFieldDecorator } = form;

      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      };
      return (
        <Form {...formItemLayout} onSubmit={handleSubmit}>
          <Form.Item label="Action">
            {getFieldDecorator("action")(<Input placeholder="please add action " />)}
          </Form.Item>
          <Form.Item label="DateAdded">
            {getFieldDecorator("dateadded")(
              <DatePicker showTime format="YYYY-MM-DD" />
            )}
          </Form.Item>
        </Form>
      );
    }
  }
);
