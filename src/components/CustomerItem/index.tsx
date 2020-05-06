import React, { useState } from "react";
import { Tag, List, Button, Popconfirm } from "antd";

import { Typography } from "antd";
import { Collapse } from "antd";
import "./styles.less";
import { Customer } from "store/customer/models/customer.model";
import { Input } from "antd";

const { TextArea } = Input;
const { Panel } = Collapse;
const { Title, Paragraph } = Typography;

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

  const handleCustomerEdit = () => {
    onCustomerEdit({
      ...customer,
      company: company,
      about: about,
      industry: industry,
    });
    setEditMode(!editMode);
  };

  const getActionButtons = () => {
    if (editMode) {
      return [
        <Button
          onClick={() => {
            setEditMode(!editMode);
          }}
          className="remove-customer-button"
        >
          {editMode ? "Cancel" : "Edit"}
        </Button>,
        <Button onClick={handleCustomerEdit} className="remove-customer-button">
          Apply
        </Button>,
      ];
    } else {
      return [
        <Popconfirm
          title="Are you sure you want to delete?"
          onConfirm={() => {
            onCustomerRemoval(customer);
          }}
        >
          <Button color="red" className="remove-customer-button">
            Delete
          </Button>
        </Popconfirm>,
        <Button
          onClick={() => {
            setEditMode(!editMode);
          }}
          className="remove-customer-button"
        >
          {editMode ? "Cancel" : "Edit"}
        </Button>,
      ];
    }
  };

  return (
    <List.Item
      actions={getActionButtons()}
      className="list-item"
      key={customer._id}
    >
      <div className="customer-item">
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
                  style={{ marginRight: "8px" }}
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
              autoSize={{ minRows: 3, maxRows: 5 }}
              style={{ marginBottom: "14px", marginTop: "16px" }}
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
                {customer.projects.map((item, index) => {
                  return (
                    <ProjectItem
                      key={index}
                      name={item.name}
                      enddate={item.enddate}
                    />
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
    <div className="project-item-wrapper">
      <div>{name}</div>
      <div>{enddate}</div>
    </div>
  );
};
