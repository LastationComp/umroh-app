'use server';

import React from 'react';
import DepartingForm from './DepartingForm';
import { getCities } from '../../action';

export default async function Departing({ departings }: { departings: any[] }) {
  const cities = await getCities();
  return <DepartingForm cities={cities} departings={departings} />;
}
