import { iconsImgs } from "../utils/images";

const Viewtransaction = () => {
  return (
    <div className="grid-one-item grid-common grid-c2">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">All Transactions</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="Plus Icon" />
        </button>
      </div>

      <div className="grid-content">
        <div className="grid-items">
          {transactions.map((transaction) => (
            <div className="grid-item flex justify-between items-center mb-28" key={transaction.id}>
              <div className="grid-item-l flex items-center space-x-10">
                <div className="avatar img-fit-cover w-40 h-40 rounded-full overflow-hidden">
                  <img src={transaction.image} alt={transaction.name} />
                </div>
                <p className="text font-semibold">{transaction.name} <span className="block text-gray-600 text-sm mt-4">{transaction.date}</span></p>
              </div>
              <div className="grid-item-r">
                <span className="text-scarlet font-medium">$ {transaction.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Viewtransaction;
