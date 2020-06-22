import React from "react";
import { Modal, Button } from "antd";
import { AddTodoForm } from './addtodo';
import { AddUserForm } from './adduser';

export class NewForm extends React.Component {
  render() {
    const {
      visible,
      onCancel,
      onCreate,
      addType,
      confirmLoading,
      wrappedComponentRef
    } = this.props;

    return (
      <Modal
        title={"New Form Add " + addType}
        visible={visible}
        confirmLoading={confirmLoading}
        onCancel={onCancel}
        onOk={onCreate}
        footer={[
          <Button key="back" onClick={onCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={confirmLoading}
            onClick={onCreate}
          >
            Save
          </Button>
        ]}
      >
        {addType === "User" ? (
          <AddUserForm
            wrappedComponentRef={wrappedComponentRef}
            handleSubmit={onCreate}
          />
        ) : (
          <AddTodoForm
            wrappedComponentRef={wrappedComponentRef}
            handleSubmit={onCreate}
          />
        )}
      </Modal>
    );
  }
}
