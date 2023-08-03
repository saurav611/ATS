'use client';

import Input from '@/components/Common/Input';
import JobFilterTab from '@/components/Pages/jobs/JobFilterTab';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

export default function Jobs() {
  const [value, setValue] = useState<string | number>('');
  const testingLabel = () => {
    return <p>label</p>;
  };
  return (
    <div className="p-7">
      <div>
        <JobFilterTab />
        <Input
          label={testingLabel()}
          type={''}
          name={''}
          inputValue={value}
          handleInputChange={(value: string | number) => {
            setValue(value);
          }}
        />
        <Button variant={'destructive'}>Click me</Button>
      </div>
    </div>
  );
}
