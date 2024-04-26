import React from 'react';
import { iconData } from './iconData';

export default function GetIconFacilities({ name }: { name: string }) {
  const icon = iconData.find((icons) => icons.name === name);
  if (icon) return icon.icon;
}
