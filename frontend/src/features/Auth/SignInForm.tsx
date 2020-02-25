import * as React from 'react';
import i18n from 'common/i18n';
import { Layout, Header, Separator } from './components';

export const SignInForm: React.FC = () => {
  return (
    <Layout>
      <Header title={i18n.t('features.Auth.signIn')} />
      <Separator />
    </Layout>
  );
};
