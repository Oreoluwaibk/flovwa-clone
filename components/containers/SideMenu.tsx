import { CloseOutlined, DownOutlined, RightOutlined } from '@ant-design/icons';
import { Drawer, Dropdown, Menu, MenuProps } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Home from '../svgs/menu/Home';
import Discover from '../svgs/menu/Discover';
import Library from '../svgs/menu/Library';
import Stack from '../svgs/menu/Stack';
import Subscription from '../svgs/menu/Subscription';
import Hub from '../svgs/menu/Hub';
import Settings from '../svgs/menu/Settings';
import { User } from '@supabase/supabase-js';

interface SideMenuProps {
  active: string;
  open: boolean;
  onCancel: () => void;
  handleLogout: () => void;
  loading: boolean;
  user: User | null;
}

const SideMenu:React.FC<SideMenuProps> = ({
    active, onCancel, open, handleLogout, loading, user
}) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  // --- Detect Screen Size (mobile/tablet vs desktop) ---
  useEffect(() => {
    const updateWidth = () => {
      setIsMobile(window.innerWidth < 768); // mobile + small tablets
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // --- Menu items ---
  const items = [
    { 
      label: "Home", 
      key: "Home", 
      path: "/dashboard", 
      icon: <Home />,
      style: {display: "flex", gap: 8, alignItems: "Center", fontSize: 16}
    }, //<FontAwesomeIcon icon="fa-solid fa-house" /> },
    { 
      label: "Discover", 
      key: "Discover", 
      path: "#", 
      icon: <Discover />,
      style: {display: "flex", gap: 8, alignItems: "Center", fontSize: 16} 
    },
    { 
      label: "Library", 
      key: "Library", 
      path: "#",
      icon: <Library />,
      style: {display: "flex", gap: 8, alignItems: "Center", fontSize: 16} 
    },
    { 
      label: "Tech Stack", 
      key: "Tech Stack", 
      path: "#",
      icon: <Stack />,
      style: {display: "flex", gap: 8, alignItems: "Center", fontSize: 16} 
    },
    { 
      label: "Subscription", 
      key: "Subscription", 
      path: "#",
      icon: <Subscription />,
      style: {display: "flex", gap: 8, alignItems: "Center", fontSize: 16} 
    },
    { 
      label: "Rewards Hub", 
      key: "Rewards Hub", 
      path: "/dashboard/earn-rewards",
      icon: <Hub />,
      style: {display: "flex", gap: 8, alignItems: "Center", fontSize: 16} 
    },
    { 
      label: "Settings", 
      key: "Settings", 
      path: "#",
      icon: <Settings />,
      style: {display: "flex", gap: 8, alignItems: "Center", fontSize: 16} 
    },
  ];

  // --- Click Handler (cleaner version) ---
  const handleMenuClick = (info: { key: string }) => {
    const found = items.find((x) => x.key === info.key);
    if (found?.path) router.push(found.path);

    if (isMobile) onCancel(); // close drawer after navigation
  };

  const dropDownItem: MenuProps["items"] = [
    {
      key: "1",
      label: <p className=' border-none w-full text-start px-4 py-2 cursor-pointer hover:bg-[rgba(144,19,254,0.1)] rounded-lg'>Feedback</p>

    },
    {
      key: "2",
      label: <p className=' border-none w-full text-start px-4 py-2 cursor-pointer hover:bg-[rgba(144,19,254,0.1)] rounded-lg'>Support</p>
    },
    {
      key: "3",
      label: <p onClick={handleLogout} className='px-4 py-2 cursor-pointer hover:bg-[rgba(255,107,107,0.1)] hover:text-[#FF6B6B] rounded-lg'>Log Out</p>
    }
  ]
  return (
    <>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <div className="bg-white h-screen py-4 pt-3 px-4 flex flex-col justify-between">
          <div className='flex flex-col gap-2'>
            <div className="flex items-center justify-between pt-1 pl-5">
              <Image src="https://app.flowvahub.com/assets/flowva_logo-xVpZI3-U.png" width={130} height={100} alt="Safe Harbour" className="bg-white text-center" />
            </div>

            <Menu
              className="admin-side-menu"
              theme="light"
              mode="inline"
              selectedKeys={[active]}
              items={items}
              onClick={handleMenuClick}
              expandIcon={({ isOpen }) =>
                isOpen ? <DownOutlined /> : <RightOutlined />
              }
            
          />
          </div>
          
          <Dropdown className='logout' placement="top" trigger={["click"]} menu={{ items: dropDownItem }}>
                <div className="mt-auto py-3 relative flex justify-center">
            <div className="absolute top-0 left-1 right-2 border-t border-[#64748B]"></div>
            <div className="w-full flex items-center justify-between">
              <button className="flex items-center border-none">
                <div className="w-10 h-10 relative overflow-hidden rounded-full font-semibold mr-3 flex items-center justify-center  text-[#9013FE] bg-[#E9D4FF]"><p className="font-semibold">O</p>
                </div>
                <div className="text-start">
                  <span className="text-[0.9rem] font-semibold">{user && user.user_metadata.name ||""}</span>
                  <p className="text-[0.8rem] text-[#718096] truncate overflow-x-hidden max-w-38.25">{user && user.email}</p>
                </div>
              </button>
            </div>
          </div>
          </Dropdown>
        
        </div>
      )}

      {/* Mobile Drawer */}
      {isMobile && open && (
        <Drawer
          open={open}
          onClose={onCancel}
          placement="left"
          size={250}
          className='h-full! w-full!'
          closeIcon={null}
          classNames={{ 
            header: "border-0! border-bottom-0! pb-2!", 
            body: "pt-0! border-0!",
            footer: "border-t-[#64748B]! mx-4! px-0! pt-2!",
            root: "border-0! border-r-0!"
          }}
          title={
            <div className="flex items-center justify-between pt-1">
              <Image src="https://app.flowvahub.com/assets/flowva_logo-xVpZI3-U.png" width={130} height={100} alt="Safe Harbour" className="bg-white" />
              <CloseOutlined className="cursor-pointer absolute top-3 right-3 text-xl" onClick={onCancel} />
            </div>
          }
          footer={<Dropdown className='logout' trigger={["click"]} menu={{ items: dropDownItem }}><div>
            <div className="w-full flex items-center justify-between"><button className="flex items-center border-none">
              <div className="w-10 h-10 relative overflow-hidden rounded-full font-semibold mr-3 flex items-center justify-center  text-[#9013FE] bg-[#E9D4FF]">
                <p className="font-semibold">O</p></div><div className="text-start">
                  <span className="text-[0.9rem] font-semibold">{user && user.user_metadata.name}</span>
                  <p className="text-[0.8rem] text-[#718096] truncate overflow-x-hidden max-w-38.25">{user && user.email}</p></div>
                  </button>
                  </div>
          </div></Dropdown>}
        >
          <Menu
            mode="inline"
            selectedKeys={[active]}
            items={items}
            onClick={handleMenuClick}
          />

        </Drawer>
      )}
    </>
   
  )
}

export default SideMenu