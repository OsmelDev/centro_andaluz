import React, { FC } from "react";
import CardItem from "./CardItem";
import { MenuItem } from "@/types/types";

interface TableContainerProps {
  menus: MenuItem[];
  selectedMenu: React.Dispatch<React.SetStateAction<MenuItem | null>>;
}

const TableContainer: FC<TableContainerProps> = ({ menus, selectedMenu }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-4">
          {menus.map((item) => (
            <CardItem selectedMenu={selectedMenu} menu={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableContainer;
