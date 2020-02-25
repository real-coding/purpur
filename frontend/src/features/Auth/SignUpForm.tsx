import * as React from 'react';
import i18n from 'common/i18n';
import { Header, Separator, Layout } from './components';

export const SignUpForm: React.FC = () => {
  return (
    <Layout>
      <Header title={i18n.t('features.Auth.signUp')} />
      <Separator />
    </Layout>
  );
};
