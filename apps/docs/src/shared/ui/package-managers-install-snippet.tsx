import CodeBlock from '@theme/CodeBlock';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import React from 'react';

export interface PackageManagersInstallSnippetProps {
  value: string;
  type?: 'dev' | 'prod';
}

export function PackageManagersInstallSnippet({ type, value }: PackageManagersInstallSnippetProps) {
  const args = type === 'dev' ? '-D' : '';
  const command = (prefix: string) => `${prefix}${args ? ` ${args}` : ''} ${value}`;

  return (
    <Tabs>
      <TabItem value="yarn" label="Yarn">
        <CodeBlock language="bash">{command('yarn add')}</CodeBlock>
      </TabItem>
      <TabItem value="pnpm" label="Pnpm">
        <CodeBlock language="bash">{command('pnpm add')}</CodeBlock>
      </TabItem>
      <TabItem value="npm" label="Npm">
        <CodeBlock language="bash">{command('npm install')}</CodeBlock>
      </TabItem>
    </Tabs>
  );
}
