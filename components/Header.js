import { Menu } from 'antd';
import React from 'react';
import Link from 'next/link';

const items = [
  {
    label: <h1>Бригада Халилов Педай</h1>,
    key: '0',
  },
  {
    label: <Link href={'/'}>Server Time</Link>,
    key: '1',
  },
  {
    label: <Link href={'/upload'}>Upload</Link>,
    key: '2',
  },
  {
    label: <Link href={'/slider'}>Slider</Link>,
    key: '3',
  },
  {
    label: <Link href={'/animalCard'}>Questionnaire</Link>,
    key: '4',
  },
 
];

const Header = () => {
  return (
    <div style={{ backgroundColor: '#333', padding: '20px 0', textAlign: 'center' }}>
      <Menu mode={'horizontal'} theme={'dark'} style={{ backgroundColor: '#333', border: 'none' }}>
        {items.map(item => (
          <Menu.Item key={item.key} style={{ backgroundColor: '#333', border: 'none' }}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Header;
