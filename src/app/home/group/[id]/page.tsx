import GroupData from '@/components/GroupData/GroupData';
import React from 'react';

interface pageProps {
  params: { id: string };
}

function Group({ params }: pageProps) {
  const { id } = params;
  return <GroupData pageId={id} />;
}

export default Group;
