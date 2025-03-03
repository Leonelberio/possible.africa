import React from "react";
import { IResourceComponentsProps } from "@refinedev/core";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, DatePicker, Select } from "antd";
import dayjs from "dayjs";
import { Option } from "antd/es/mentions";

export const JobEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, queryResult } = useForm();

  const jobsData = queryResult?.data?.data;

  const { selectProps: organisationSelectProps } = useSelect({
    resource: "organisations",
    optionValue: "_id",
    optionLabel: "name",
    defaultValue: jobsData?.id,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Titre"
          name={["title"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name={["description"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Organisation"
          name={["organisation", "_id"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...organisationSelectProps} />
        </Form.Item>
        <Form.Item
          label="Type"
          name={["type"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select defaultValue={jobsData?.type}>
            <Option value="CDI">CDI</Option>
            <Option value="CDD">CDD</Option>
            <Option value="Stage">Stage</Option>
            <Option value="Alternance">Alternance</Option>
            <Option value="Freelance">Freelance</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Salaire"
          name={["salary"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Date de début"
          name={["beginning_date"]}
          rules={[
            {
              required: true,
            },
          ]}
          getValueProps={(value) => ({
            value: value ? dayjs(value) : undefined,
          })}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Date de fin"
          name={["ending_date"]}
          rules={[
            {
              required: true,
            },
          ]}
          getValueProps={(value) => ({
            value: value ? dayjs(value) : undefined,
          })}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Emplacement"
          name={["location"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Compétences"
          name={["skills"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};
