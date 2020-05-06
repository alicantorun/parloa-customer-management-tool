import React from "react";
import { Form, Row, Col, Button, Input } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

import "./styles.less";
import { Customer } from "store/customer/models/customer.model";
import TextArea from "antd/lib/input/TextArea";

interface AddCustomerFormProps {
  onFormSubmit: (customer: Customer) => void;
}

export const AddCustomerForm: React.FC<AddCustomerFormProps> = ({
  onFormSubmit,
}) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    onFormSubmit({
      company: form.getFieldValue("company"),
      industry: form.getFieldValue("industry"),
      about: form.getFieldValue("about"),
      projects: [],
    });
    form.resetFields();
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="horizontal"
      className="customer-form"
    >
      <Row gutter={20}>
        <Col xs={24} sm={24} md={17} lg={19} xl={20}>
          <Form.Item style={{ marginBottom: 0 }}>
            <Form.Item
              name={"company"}
              rules={[{ required: true }]}
              style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
              <Input placeholder="Input customer name" />
            </Form.Item>
            <Form.Item
              name={"industry"}
              rules={[{ required: true }]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                margin: "0 8px",
              }}
            >
              <Input placeholder="Input customer industry" />
            </Form.Item>
          </Form.Item>
          <Form.Item
            name={"about"}
            rules={[{ required: true }]}
            style={{ display: "inline-block", width: "calc(100% - 8px)" }}
          >
            <TextArea placeholder="Input customer info" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={7} lg={5} xl={4}>
          <Button type="primary" htmlType="submit" block>
            <PlusCircleFilled />
            Add customer
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
