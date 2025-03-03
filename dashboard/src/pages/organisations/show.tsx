import React from "react";
import { IResourceComponentsProps, useShow } from "@refinedev/core";
import {
  Show,
  TagField,
  TextField,
  EmailField,
  BooleanField,
} from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const OrganisationShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Nom</Title>
      <TextField value={record?.name} />
      <Title level={5}>Type</Title>
      <TextField value={record?.type?.name} />
      <Title level={5}>Contributeur</Title>
      <TextField value={record?.contributeur?.username} />
      <Title level={5}>Contact</Title>
      <BooleanField value={record?.owner} />
      <Title level={5}>Description</Title>
      <TextField value={record?.description} />
      <Title level={5}>Email</Title>
      <EmailField value={record?.email} />
      <Title level={5}>Telephone</Title>
      <TextField value={record?.telephone} />
      <Title level={5}>Site Web</Title>
      <TextField value={record?.site_web} />
      <Title level={5}>Url Linkedin</Title>
      <TextField value={record?.linkedin_url} />
      <Title level={5}>Adresse</Title>
      <TextField value={record?.adresse} />
    </Show>
  );
};
