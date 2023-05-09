import React, { useState } from 'react';
import ContentBox from './ContentBox';
import NavListBox from './NavListBox';

function GuideForm() {
  const [role, setRole] = useState<boolean>(false);
  return (
    <div className="flex justify-between w-full gap-3 msm:flex-col">
      <NavListBox role={role} setRole={setRole} />
      <ContentBox role={role} />
    </div>
  );
}

export default GuideForm;
