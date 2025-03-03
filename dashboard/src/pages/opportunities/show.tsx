import React from "react";
import { IResourceComponentsProps, useShow, useOne } from "@refinedev/core";
import {
  Show,
  TagField,
  TextField,
  DateField,
  BooleanField,
} from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const OpportunityShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: organisationData, isLoading: organisationIsLoading } = useOne({
    resource: "organisations",
    id: record?.organisation || "",
    queryOptions: {
      enabled: !!record,
    },
  });

  const { data: userData, isLoading: userIsLoading } = useOne({
    resource: "users",
    id: record?.user || "",
    queryOptions: {
      enabled: !!record,
    },
  });

  const { data: opportunityTypeData, isLoading: opportunityTypeIsLoading } =
    useOne({
      resource: "opportunity_types",
      id: record?.opportunity_type || "",
      queryOptions: {
        enabled: !!record,
      },
    });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Organisation</Title>
      {organisationIsLoading ? (
        <>Loading...</>
      ) : (
        <>{organisationData?.data?.name}</>
      )}
      <Title level={5}>Contributeur</Title>
      {userIsLoading ? <>Loading...</> : <>{userData?.data?.username}</>}
      <Title level={5}>Titre</Title>
      <TextField value={record?.title} />
      <Title level={5}>Date de début</Title>
      <DateField value={record?.beginning_date} />
      <Title level={5}>Date de fin</Title>
      <DateField value={record?.ending_date} />
      <Title level={5}>Type d'opportunité</Title>
      {opportunityTypeIsLoading ? (
        <>Loading...</>
      ) : (
        <>{opportunityTypeData?.data?.name}</>
      )}
      <Title level={5}>Acteur Cible</Title>
      <TextField value={record?.target_people} />
      <Title level={5}>Pays cible</Title>
      <TextField value={record?.target_country} />
      <Title level={5}>Secteur d'activité</Title>
      <TextField value={record?.activity_area} />
      <Title level={5}>Description</Title>
      <TextField value={record?.description} />
      <Title level={5}>Éligibilité</Title>
      <TextField value={record?.eligibility} />
      <Title level={5}>Processus</Title>
      <TextField value={record?.processus} />
      <Title level={5}>Bénefices</Title>
      <TextField value={record?.beneficies} />
      <Title level={5}>Lien d'inscription</Title>
      <TextField value={record?.registration_link} />
      <Title level={5}>Est Récurrent</Title>
      <BooleanField value={record?.isRecurrent} />
      <Title level={5}>Fréquence</Title>
      <TextField value={record?.frequency} />
    </Show>
  );
};
