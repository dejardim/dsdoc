import React from 'react';
import { Content } from './Content';

export const Divider: React.FC = () => {
  return (
    <Content>
        <div className="my-4 border-t" style={{ borderColor: 'rgba(239, 239, 239, 1)' }} />
    </Content>
  );
}
