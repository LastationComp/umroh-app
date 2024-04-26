import { FaBed, FaWheelchair, FaWifi } from 'react-icons/fa';
import { GiIsland } from 'react-icons/gi';
import { GrAnchor, GrBraille, GrCamera } from 'react-icons/gr';
import { IoIosBus } from 'react-icons/io';
import { PiCallBell } from 'react-icons/pi';
export const iconData = [
  {
    name: 'wifi',
    icon: <FaWifi />,
  },
  {
    name: 'bed',
    icon: <FaBed />,
  },
  {
    name: 'wheelchair',
    icon: <FaWheelchair />,
  },
  {
    name: 'island',
    icon: <GiIsland />,
  },
  {
    name: 'other',
    icon: <GrBraille />,
  },
  {
    name: 'anchor',
    icon: <GrAnchor />,
  },
  {
    name: 'camera',
    icon: <GrCamera />,
  },
  {
    name: 'bell',
    icon: <PiCallBell />,
  },
  {
    name: 'bus',
    icon: <IoIosBus />,
  },
];
