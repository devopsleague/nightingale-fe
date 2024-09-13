import React from 'react';
import { Form } from 'antd';
import _ from 'lodash';
import { DatasourceCateEnum } from '@/utils/constant';
// @ts-ignore
import * as MySQLMeta from 'plus:/datasource/mysql/components/Meta';
// @ts-ignore
import * as CKMeta from 'plus:/datasource/clickHouse/components/Meta';

export default function index() {
  const datasourceCate = Form.useWatch('cate');
  const datasourceValue = Form.useWatch('datasource_ids');

  if (datasourceCate === DatasourceCateEnum.mysql && datasourceValue !== undefined) {
    const realDatasourceValue = _.isArray(datasourceValue) ? _.head(datasourceValue) : datasourceValue;
    return <MySQLMeta.MetaModal datasourceValue={realDatasourceValue} />;
  }
  if (datasourceCate === DatasourceCateEnum.ck && datasourceValue !== undefined) {
    const realDatasourceValue = _.isArray(datasourceValue) ? _.head(datasourceValue) : datasourceValue;
    return <CKMeta.MetaModal datasourceValue={realDatasourceValue} />;
  }
  return null;
}
