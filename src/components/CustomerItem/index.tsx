import React, { useState } from "react";
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { Typography, Divider } from "antd";
import { Collapse } from "antd";
import "./styles.less";
import { Customer } from "store/customer/models/customer.model";
import { Form, Row, Col, Input } from "antd";
const { TextArea } = Input;

const { Panel } = Collapse;
const { Title, Paragraph, Text } = Typography;

interface CustomerItemProps {
  customer: Customer;
  onCustomerRemoval: (customer: Customer) => void;
  onCustomerEdit: (customer: Customer) => void;
}

interface ProjectItemProps {
  name?: string;
  enddate?: string;
}

export const CustomerItem: React.FC<CustomerItemProps> = ({
  customer,
  onCustomerRemoval,
  onCustomerEdit,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [company, setCompany] = useState(customer.company);
  const [about, setAbout] = useState(customer.about);
  const [industry, setIndustry] = useState(customer.industry);
  const getTagColor = () => {
    return customer.industry === "travel"
      ? "green"
      : customer.industry === "insurance"
      ? "blue"
      : customer.industry === "finance"
      ? "red"
      : "purple";
  };

  return (
    <List.Item
      actions={[
        editMode ? null : (
          <Popconfirm
            title="Are you sure you want to delete?"
            onConfirm={() => {
              onCustomerRemoval(customer);
            }}
          >
            <Button className="remove-customer-button">X</Button>
          </Popconfirm>
        ),
        <Button
          onClick={() => {
            setEditMode(!editMode);
          }}
          className="remove-customer-button"
        >
          {editMode ? "Cancel" : "Edit"}
        </Button>,
        editMode ? (
          <Button
            onClick={() => {
              onCustomerEdit({
                ...customer,
                company: company,
                about: about,
                industry: industry,
              });
              setEditMode(!editMode);
            }}
            className="remove-customer-button"
          >
            Confirm
          </Button>
        ) : null,
      ]}
      className="list-item"
      key={customer._id}
    >
      <div
        style={{ flexDirection: "column", width: "100%" }}
        className="customer-item"
      >
        <Typography style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {editMode ? (
              <>
                <Input
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                  defaultValue={customer.company}
                />
              </>
            ) : (
              <Title level={3}>{customer.company}</Title>
            )}

            {editMode ? (
              <Input
                defaultValue={customer.industry}
                onChange={(e) => {
                  setIndustry(e.target.value);
                }}
              />
            ) : (
              <Tag color={getTagColor()} className="customer-tag">
                {customer.industry}
              </Tag>
            )}
          </div>
          {editMode ? (
            <TextArea
              style={{ marginBottom: "14px" }}
              defaultValue={customer.about}
              onChange={(e) => {
                setAbout(e.target.value);
              }}
            />
          ) : (
            <Paragraph>{customer.about}</Paragraph>
          )}
        </Typography>
        {customer.projects.length >= 1 && (
          <div style={{ width: "100%" }}>
            <Collapse
              accordion
              className="site-collapse-custom-collapse"
              bordered={false}
            >
              <Panel
                header="Projects"
                key="1"
                className="site-collapse-custom-panel"
              >
                {customer.projects.map((item) => {
                  return (
                    <ProjectItem name={item.name} enddate={item.enddate} />
                  );
                })}
              </Panel>
            </Collapse>
          </div>
        )}
      </div>
    </List.Item>
  );
};

const ProjectItem: React.FC<ProjectItemProps> = ({ name, enddate }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>{name}</div>
      <div>{enddate}</div>
    </div>
  );
};
