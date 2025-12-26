"use client";

import { useEffect, useState } from "react";
// import { useSignalR } from "@/hooks/useSignalR";
// import type { Notification } from "@/lib/signalr-service";
import { BellFilled } from "@ant-design/icons";
import { Badge, Dropdown, Divider, Button } from "antd";
// import { Notification } from "@/lib/signalRConnection";
// import NotificationCard from "../general/NotificationCard";
// import { markNotificationAsRead } from "@/redux/action/extra";
import { useRouter } from "next/navigation";
import NotificationCard from "./general/NotificationCard";
import { INotification } from "@/utils/interface";
// import { useAppSelector } from "@/hook";

export function NotificationBell() {
    // const { loginType } = useAppSelector(state => state.auth);
    const [notifications, setNotifications] = useState<INotification[]>([]);
    const [unread, setUnread] = useState(2);
    const router = useRouter();
    // const { subscribeToNotifications } = useSignalR();
    const [ loading, setLoading ] = useState(false);
    const [overlayWidth, setOverlayWidth] = useState(400);

    useEffect(() => {
        const updateWidth = () => {
            if (window.innerWidth < 500) setOverlayWidth(250);
            else if (window.innerWidth < 768) setOverlayWidth(320);
            else setOverlayWidth(400);
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    // useEffect(() => {
    //     const unsubscribe = subscribeToNotifications((n) => {
    //         setNotifications((prev) => [n, ...prev]);
    //         setUnread((u) => u + 1);
    //     });

    //     return unsubscribe;
    // }, [subscribeToNotifications]);

    const handleClick = () => {
        setLoading(true);
        // markNotificationAsRead()
        // .then(res => {
        //     if(res.status === 200) {
        //         setUnread(0);
        //         setLoading(false)
        //     }
        // })
        // .catch(err => {
        //     setLoading(false);
        //     console.log("err", err);
        // })
    }

    const items = [
    {
        key: "header",
        label: (
        <div className="notification-header">
            <span className="text-lg font-semibold">Notifications</span>

            <div className="flex items-center gap-0">
                <Button 
                type="text" 
                loading={loading}
                 onClick={(e) => {
                    e.stopPropagation();
                    handleClick()
                }}
                disabled={notifications.length === 0}
                className="text-[13px]! font-medium! text-white!"
            >
                Mark all read
            </Button>

            <Button 
                type="text" 
                loading={loading}
                 onClick={(e) => {
                    e.stopPropagation();
                    handleClick()
                }}
                disabled={notifications.length === 0}
                className="text-[13px]! font-medium! text-white!"
            >
                Delete All
            </Button>
            </div>
            
        </div>
        ),
    },
    {
        key: "content",
        label: (
        <div className="max-h-80 overflow-y-auto hidescroll">
            {notifications.length === 0 ? (
            <div 
                className="text-[#121212] text-sm py-5 text-center"
            >
                No notifications
            </div>
            ) : (
            notifications.map((n, index) => (
                <div key={index}>
                <NotificationCard 
                    isFixed  
                    notification={n}
                    onClick={() => {
                        handleClick();
                    }}
                />
                {/* <div className="py-2">
                    <div className="font-medium text-sm">{n.title}</div>
                    <div className="text-xs text-gray-600">{n.message}</div>
                    <div className="text-[10px] text-gray-400 mt-1">
                    {new Date(n.timestamp).toLocaleString()}
                    </div>
                </div> */}
                {index !== notifications.length - 1 && <Divider size="small" />}
                </div>
            ))
            )}
        </div>
        ),
    },
    ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      className="notification"
      placement="bottomRight"
      overlayStyle={{ width: overlayWidth }}
    >
      <div className="cursor-pointer">
            <div className="notification-container">
                <Badge count={unread} size="small">
                    <BellFilled className="belly hover:text-[#9013fe]! text-base!"/>
                </Badge>
            </div>
      </div>
    </Dropdown>
  );
}
