import React from 'react';

interface IShopTableProps {
	isNftShop: boolean,
};

const ShopTableView : React.FC<IShopTableProps> = ({
  isNftShop
}) => {

  return (
    <div className="nes-table-responsive">
      <table className="nes-table is-bordered is-centered">
        <tbody>
          <tr>
            <td>Thou hast had a good morning</td>
            <td>Thou hast had a good afternoon</td>
            <td>Thou hast had a good evening</td>
            <td>Thou hast had a good night</td>
          </tr>
          <tr>
            <td>Thou hast had a good morning</td>
            <td>Thou hast had a good afternoon</td>
            <td>Thou hast had a good evening</td>
            <td>Thou hast had a good night</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ShopTableView;
